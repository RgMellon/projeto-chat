<template>
  <div>
    <div>
        <img @click="enviaMsg(g.images.original.url)" v-for="g in giphies" :key="g.id" :src="g.images.original.url">
    </div>
    <div class="input-gif flex justify-between ">
      <input name="title" v-model="item" placeholder="Buscar gifs">
      <button class="btn-enviar" @click="buscaGif()" type="button">
        <q-icon name="search" color="grey"/>
      </button>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
  props:['idRoute'],
  name: 'ComponentGif',
  data () {
    return {
      item: '',
      giphies: [],
    }
  },
  methods:{
    buscaGif() {
      var link = "https://api.giphy.com/v1/gifs/search?api_key=dc6zaTOxFJmzC&q=";
      var apiLink = link + this.item;
      this.$axios.get(apiLink)
                  .then(res =>  this.giphies = res.data.data)
                  .catch(err => console.error(err));
    },
    enviaMsg(msg){
      this.$firebase.ref(`salas/${this.idRoute}/msgs`).push({
        name: this.user.nome,
          msg: `<img src="${msg}">`,
          sent: true,
          avatar: this.user.foto,
          stamp: new Date().toLocaleString(),
          email: this.user.email,
        }).then(this.$router.replace(`/bate-papo/${this.idRoute}`))
      }
  },
  computed: {
    ...mapGetters({
        user: "getUser",
    }),
  }
}
</script>

<style scoped>
  .input-gif {
    position: fixed;
    bottom: 0px;
    right: 0;
    left: 0;
    height: 32px;
    background: white;
  }
  input {
    outline:none;
    border: 0px;
    padding: 1rem;
  }
  button {
    background: white;
    border: 0px;
    outline: none;
  }
</style>

<template>
  <div>
    <div v-if="this.erro">
        {{ erro }}
    </div>
    <div>
        <img @click="enviaMsg(g.images.original.url)" v-for="g in giphies" :key="g.id" :src="g.images.original.url">
    </div>
    <div class="input-gif flex justify-between ">
      <input name="title" v-model="item" placeholder="Buscar gifs">
      <div  class="btn-gif">
        <q-btn :loading="load" color="info" @click="buscaGif()" label="Buscar" no-caps />
      </div>
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
      load: false,
      erro: '',
    }
  },
  methods:{
    buscaGif() {
      this.load = true;
      var link = "https://api.giphy.com/v1/gifs/search?api_key=dc6zaTOxFJmzC&q=";
      var apiLink = link + this.item;
      this.$axios.get(apiLink)
                  .then(res =>  {
                    this.giphies = res.data.data
                    this.load = false;
                  })
                  .catch(err => console.error(err))
                  .catch(err => this.erro =  'Erro ao carregar gifs :/ ')
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
  .btn-gif {
    height: 32px;
  }
</style>

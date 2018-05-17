<template>
  <div class="area-envio flex no-wrap">
    <button class="btn-enviar" @click="enviaMsg(msg)" type="button">
      <q-icon name="unarchive" color="black"/>
    </button>

    <textarea class="envio-input" rows="4" cols="50"
          placeholder="Escreva uma mensagem" v-model="msg">
    </textarea>
    <router-link class="flex" :to="{ path: `/gifs/${this.id}`}">
        <button class="btn-enviar" type="button">
        <q-icon self-center name="gif" style="font-size: 30px" color="red"/> </button>
    </router-link>
    <button class="btn-enviar" @click="enviaMsg(msg)" type="button">
      <q-icon name="send" :color="cor"/>
    </button>

  </div>
</template>

<script>
  import { mapGetters } from 'vuex';
  export default {
    props:['id'],
    name: 'envio-msg',
    components: {
    },
    data(){
       return {
         msg: '',

       }
    },
    computed: {
      cor() {
        if(this.msg){
          return 'blue';
        }
      },
      ...mapGetters({
        user: "getUser"
      }),
    },
    methods: {
      enviaMsg(msg){
        if (msg == "") return;
          else {
            this.$firebase.ref(`salas/${this.id}/msgs`).push({
              name: this.user.nome,
              msg,
              sent: true,
              avatar: this.user.foto,
              stamp: new Date().toLocaleString(),
              email: this.user.email,
            }).then(res => this.msg = '');
          }
      },
    }

  }
</script>

<style>

  .area-envio{
    position: fixed;
    width: 100%;
    bottom: 0;
    z-index: 4;
    right:0;
  }

  .envio-input {
    height: 50px;
    width:100%;
    border: 0px;
    outline:none;
    padding: 1rem;
  }
  .image-icon {
    width: 20px;
    margin-right: 1rem;
    margin-left: 1rem;
    align-self: center;
  }

  .btn-enviar {
    width: 50px;
    background:white;
    border:0;
    outline: none;
  }
</style>

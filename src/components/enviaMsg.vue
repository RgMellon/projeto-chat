<template>
  <div>
  <!-- <div v-if="this.confirma">
     <confirma-upload :imgConfirmacao="this.img"> </confirma-upload>
  </div> -->
  <img :src="this.img">
  <div class="area-envio flex no-wrap">
    <upload @addFile="uploadFile" class="items-center"
      size="35" icon="unarchive" :mostraImagem="false">
    </upload>

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
  </div>
</template>

<script>
  import upload from './upload';
  import confirmaUpload from './confirmaUpload';
  import { mapGetters } from 'vuex';
  export default {
    props:['id'],
    name: 'envio-msg',
    components: {
      upload,
      'confirma-upload' : confirmaUpload,
    },
    data(){
      return {
        msg: '',
        confirma: true,
        img: '',
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
      uploadFile(file) {
       let reader = new FileReader();

        reader.onload = (e) => {
          this.img = e.target.result;
          console.log(this.img);
        };


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

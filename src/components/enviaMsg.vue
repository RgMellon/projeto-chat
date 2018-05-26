<template>
  <div >
    <div v-if="this.confirma.length >= 1">
      <confirma-upload :id="this.id" @acao="acaoAposClicar" :imgConfirmacao="this.confirma"> </confirma-upload>
    </div>

    <div class="area-envio flex no-wrap">
      <div style="align-self:center; background:white">
        <label for="file-input" class="flex">
          <q-icon style="margin-left:10px; font-size:20px"  name="unarchive"/>
        </label>
        <input id="file-input" type="file" accept="image/*" @change="onFileChange"/>
      </div>

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
  import confirmaUpload from './confirmaUpload';
  import IconeComponent from './IconeComponent';
  import { mapGetters } from 'vuex';
  import { Emoji } from 'emoji-mart-vue'
  export default {
    props:['id'],
    name: 'envio-msg',
    components: {
      'confirma-upload' : confirmaUpload,
      'emoji': Emoji,
      'iconeComponent' : IconeComponent
    },
    data(){
      return {
        msg: '',
        confirma: '',
        img: '',
        icone: false,
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
        this.$salvaMensagem(this.id, msg);
        this.msg = '';
      },

      onFileChange(e) {
        this.$createImg(e)
          .then(res =>  this.confirma = res);
      },
      acaoAposClicar() {
        this.confirma = '';
      }
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
    background: white;
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
  #file-input{
    display: none;
  }
</style>

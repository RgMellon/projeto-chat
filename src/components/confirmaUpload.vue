<template>
  <div class="confirma-upload flex justify-around">
      <div class="flex">
        <div style="align-self: center;">
          <img :src="this.imgConfirmacao" >
        </div>
      </div>

      <div class="flex column" style="    align-self: center;">
        <q-btn class="margin-btn" :loading="load" color="info" @click="enviaFoto()" label="Enviar" no-caps />
        <q-btn class="margin-btn" color="deep-orange" no-caps label="Cancelar" @click="cancelar"/>
      </div>

  </div>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
  props:['imgConfirmacao', 'id'],
  name: 'ComponentConfirmaUpload',
  data () {
    return {
       load: false,

    }
  },
  computed:{
    ...mapGetters({
        user: "getUser"
    }),
  },
  methods: {
    enviaFoto() {
      this.load = true;
      this.$uploadImagem(this.imgConfirmacao)
        .then(res => {
          if (res.img == "") return;
            else {
              this.$firebase.ref(`salas/${this.id}/msgs`).push({
                name: this.user.nome,
                msg: `https://api-chat-aps.herokuapp.com/images/avatar/${res.img}/`,
                sent: true,
                avatar: this.user.foto,
                stamp: new Date().toLocaleString(),
                email: this.user.email,
              });
          }
        }).then(this.cancelar())
    },
    cancelar(){
      this.$emit('acao');
    },
  }

}
</script>

<style scoped>
  .confirma-upload{
        width: 95%;
    position: fixed;
    bottom: 50px;
    background: #d0c3c39c;
  }
  .confirma-upload img {
    margin: 0.4rem;
    width: 100px;

  }
  .margin-btn {
    margin: 0.3rem;
  }
</style>

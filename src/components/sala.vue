<template>
  <li class="colecao-users" @click="irBatePapo">
      <div  class="lista-amigo">
        <div class="flex">
          <div class="foto">
            <img :src="`http://api-chat-aps.herokuapp.com/images/avatar/${this.imagem}`" alt="">
          </div>
          <q-toolbar-title class="flex column justify-center">
            <p style="color:black"> {{this.titulo}} </p>
            <span slot="subtitle"> {{ this.subtitulo }}</span>
          </q-toolbar-title>
        </div>
      </div>
  </li>
</template>

<script>
  export default {
    name: 'ComponentSala',
    props:['imagem', 'titulo', 'subtitulo'],
    data(){
      return {
      }
    },
    methods: {
      irBatePapo() {
        this.$router.replace('/bate-papo');
      }
    },
  }
</script>

<style scoped>
  * {
    color: rgba(0,0,0,.54);
    background: white;
  }
  .subheader h2{
    font-size: 16px;
  }
  .lista-amigo img{
    width: 60px;
  }

  .lista-amigo{
    cursor:pointer;
    border-bottom: 1px solid #ccc;
    padding-top: 1rem;
    padding-bottom: 1rem;
  }

  h3 {
    font-size: 15px;
    color: black;
  }

  .nome-desc {
    margin-left: 1rem;
  }

  img{
    width: 60px;
    height: 60px;
    border-radius: 50%;
  }
</style>

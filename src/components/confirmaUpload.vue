<template>
  <div class="confirma-upload flex justify-around">
      <div class="flex">
        <div style="align-self: center;">
          <img :src="this.imgConfirmacao" >
        </div>
      </div>

      <div class="flex column" style="    align-self: center;">

          <q-btn class="margin-btn" :loading="loading1" color="info" @click="simulateProgress(1)" label="Enviar" no-caps />
          <q-btn class="margin-btn" color="deep-orange" no-caps label="Cancelar" />

      </div>

  </div>
</template>

<script>
export default {
  props:['imgConfirmacao'],
  name: 'ComponentConfirmaUpload',
  data () {
    return {
       loading1: false,

    }
  },
  methods: {
    simulateProgress (number) {
      // we set loading state
      this[`loading${number}`] = true
      // simulate a delay
      setTimeout(() => {
        // we're done, we reset loading state
        this[`loading${number}`] = false
      }, 3000)
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

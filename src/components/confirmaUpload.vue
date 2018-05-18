<template>
  <div class="confirma-upload">
    <img :src="`http://api-chat-aps.herokuapp.com/images/avatar/${this.imgConfirmacao}`">
  </div>
</template>

<script>
export default {
  props:['imgConfirmacao'],
  name: 'ComponentConfirmaUpload',
  data () {
    return {}
  }
}
</script>

<style scoped>
  .confirma-upload{
    width: 100%;
    min-height: 67px;
    background: inherit;
    position: relative;
    bottom: 26px;

  }
  .confirma-upload img {
    width: 100px;
    height: 100px;
  }
</style>

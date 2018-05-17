<template>
  <q-page padding>
    <criarSala></criarSala>
  </q-page>
</template>
<script>
  import criarSala from '../components/criarSala';
  export default {
    name: 'PageCriarSala',
    components: {
      criarSala,
    }
  }
</script>

<style scoped>
</style>

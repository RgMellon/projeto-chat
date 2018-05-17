<template>
  <q-page padding>
    <batePapoComponent :id="this.id"></batePapoComponent>
    <envia-msg :id="this.id"> </envia-msg>
  </q-page>
</template>

<script>
import batePapoComponent from '../components/batePapoComponent';
import enviaMsg from '../components/enviaMsg';
export default {
  props:['id'],
  name: 'PageBatePapo',
  components: {
    batePapoComponent,
    enviaMsg,
  }
}
</script>

<style>
</style>

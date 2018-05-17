<template>
  <q-page padding>
       <gif :idRoute="this.id"></gif>
  </q-page>
</template>

<script>
import gifComponent from '../components/gifComponent';
export default {
  props:['id'],
  name: 'GifsPage',
  components: {
    gif: gifComponent,
  }
}
</script>

<style>
</style>

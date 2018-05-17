<template>
  <q-page padding>
    <ul style="margin-top: 2rem"> 
      <div v-for="i of rooms" @click="conversarCom(i['.key'])">
         <sala :imagem="i.img" :titulo="i.nome" :subtitulo="i.desc"> </sala>
      </div>
    </ul>
  </q-page>
</template>

<script>
import { roomsRef } from '../plugins/firebase';
import sala from '../components/sala' ;
export default {
  name: 'PageSala',
  components: {
    sala
  },
  firebase: {
    rooms: roomsRef,
  },
  methods: {
    conversarCom(id) {
      this.$router.replace(`/bate-papo/${id}`);
    }
  }
}
</script>

<style>
</style>

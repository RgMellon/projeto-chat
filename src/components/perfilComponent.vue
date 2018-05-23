<template>
  <div class="column perfil">
    <div class="imagem-perfil flex justify-center">
      <div> <img :src="user.foto" :alt="user.nome"> </div>
    </div>
    <div class="nome-perfil flex justify-center">
      {{ user.nome }}
    </div>
    <div v-if="rooms[0].emailCriador == user.email "
      class="flex justify-center" style="margin-top: 3rem">
      <h1> Salas Criadas </h1>
    </div>
    <div v-for="i of rooms">
      <div v-if="user.email == i.emailCriador" class="salas-criadas flex justify-around">
        <router-link :to="`/bate-papo/${i['.key']}`" class="flex link-sala justify-around">
          <div class="img-link">
            <img :src="`https://api-chat-aps.herokuapp.com/images/avatar/${i.img}`">
          </div>
          <div class="nome-link">
            <p> {{ i.nome }} </p>
          </div>
        </router-link>
      </div>
    </div>
    <div class="btn-perfil">
      <q-btn class="full-width input-cria-sala" color="info" @click="sair()">
        Sair
      </q-btn>
    </div>
  </div>
</template>

<script>
import {mapGetters} from 'vuex';
import firebase from 'firebase';
import { roomsRef } from '../plugins/firebase';
export default {
  name: 'ComponentName',
  data () {
    return {

    }
  },
  computed: {
    ...mapGetters({
      user: 'getUser'
    })
  },
  methods: {
    sair(){
      firebase.auth()
        .signOut()
        .then( () => {
          localStorage.removeItem('vuex')
          this.$router.replace('/')
        }).catch(err  =>  console.err(err));
      }
  },
  firebase: {
    rooms: roomsRef,
  },
}
</script>

<style scoped>
  .imagem-perfil {
    width: 100%;
  }
  img {
    border-radius: 50%;
    width: 150px;
  }
  .perfil{
    height: 85vh;
    margin-top: 3rem;
  }
  .nome-perfil{
    margin-top: 1rem;
  }
  .btn-perfil {
    position: fixed;
    bottom: 0;
    right: 0;
    left: 0;
  }
  .salas-criadas{
    margin-top: 2rem;
  }
  h1 {
    font-size: 16px;
  }
  .link-sala img{
    width: 50px;
    height:50px;
  }
  .nome-link {
    align-self: center;
    padding: 1rem;
  }
</style>

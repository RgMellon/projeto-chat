<template>
  <div>
    <q-btn color="blue-8 input-margin" @click="autenticar" class="full-width" no-caps label="Login com o Google" />
  </div>
</template>

<script>
import firebase from 'firebase';
import { mapActions, mapGetters } from 'vuex';
export default {
  name: 'ComponentLoginGoogle',
  data () {
    return {}
  },
  computed: {
    ...mapGetters({
      getUsers: 'getUser',
    })
  },
  methods: {
    autenticar() {
      let provider = new firebase.auth.GoogleAuthProvider();
      this.signIn(provider)
    },
    signIn(provider) {
        firebase.auth()
          .signInWithPopup(provider)
          .then((result) => {
            let user = {
              email: result.additionalUserInfo.profile.email,
              nome: result.additionalUserInfo.profile.name,
              foto: result.additionalUserInfo.profile.picture,
              id: result.additionalUserInfo.profile.id
            }
           this.salvaDados(user)
           this.$router.replace('/salas');
          })
        .catch((err) => {
            console.error('erro ao autenticar')
            console.error(err);
        });
    },
    ...mapActions({
      addUser: 'adiciona',
    }),
    salvaDados(user) {
      this.addUser(user)
    },
  }
}
</script>

<style>
</style>

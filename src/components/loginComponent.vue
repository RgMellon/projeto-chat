<template>
  <div class="shadow-14 login">
    <q-input class="input-margin" v-model="email" color="brown-3" type="email" float-label="Email" suffix=".com" />
    <q-input class="input-margin" v-model="password" type="password" float-label="Senha" color="brown-3"  />
    <q-btn color="brown-8 input-margin" class="full-width" no-caps label="Login" />
    <q-btn color="brown-4 input-margin" class="full-width" no-caps label="Cadastrar" />
    <loginGoogle class="input-margin"></loginGoogle>
  </div>
</template>

<script>
import { required, email } from 'vuelidate/lib/validators';
import loginGoogle from '../components/loginGoogle';
export default {
  components: {
    loginGoogle,
  },
  data () {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    
  }
}
</script>
<style scoped>
  .input-margin {
    margin-top: 2rem;
  }
  .login {
    padding: 0.8rem;
    width: 100%;
  }
</style>

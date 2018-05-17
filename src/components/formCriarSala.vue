<template>
  <div>
    <q-field>
      <q-input float-label="Nome" v-model="nome" class="input-cria-sala"/>
      <q-input float-label="Descrição" class="input-cria-sala" v-model="descricao" />
      <q-btn :loading="loading4" color="info" @click="criaSala(4)" class="full-width input-cria-sala">
        Criar
          <span slot="loading">
          <q-spinner-hourglass class="on-left" />
          Criando ...
        </span>
      </q-btn>
    </q-field>
  </div>
</template>

<script>
export default {
  name: 'ComponentFormCriarSala',
  props: ['img'],
  data () {
    return {
      nome: '',
      descricao: '',
      loading4: false,
    }
  },
  methods: {
    criaSala() {
      this.loading4 = true;
      this.$uploadImagem(this.img)
        .then(data => data.img)
        .then(img => {
          this.$firebase.ref('salas').push({
            img,
            nome: this.nome,
            desc: this.descricao
          }).catch(err => console.error('erro ao criar sala'))
        }).then(final => {
          this.loading4 = false
          this.$router.replace('/salas');
        });
    }
  },
}
</script>

<style scoped>
  .input-cria-sala {
    margin-top: 2rem;
  }
</style>

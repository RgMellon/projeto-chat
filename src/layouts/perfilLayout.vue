<template>
  <q-layout>
    <q-layout-header>
      <q-toolbar color="info" class="fixed shadow-5">
        <q-btn @click="$router.push('/salas')"
          flat
          aria-label="Profile">
          <q-icon name="navigation"/>
        </q-btn>
        <q-toolbar-title class="flex justify-center">
         <p>Perfil</p>
        </q-toolbar-title>
        <q-btn
          flat  @click="$router.push('salas/criar')"
          aria-label="Create">
          <q-icon name="add" />
        </q-btn>
      </q-toolbar>
    </q-layout-header>
    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { openURL } from 'quasar'

export default {
  name: 'PerfilLayout',
  data () {
    return {

    }
  },
  methods: {
    openURL
  },

}
</script>

<style>
</style>

<template>
  <q-layout>
    <q-layout-header>
      <q-toolbar color="info" class="fixed shadow-5">
        <q-btn
          flat
          aria-label="Profile">
          <q-icon name="face"/>
        </q-btn>
        <q-btn 
          flat  @click="$router.push('salas/criar')" 
          aria-label="Create">
          <q-icon name="add" />
        </q-btn>
        <q-toolbar-title class="flex justify-center">
         <p> Chat Aps </p>
        </q-toolbar-title>
        <q-btn
          flat
          aria-label="Search">
          <q-icon name="search"/>
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
  name: 'LayoutDefault',
  data () {
    return {
      leftDrawerOpen: this.$q.platform.is.desktop
    }
  },
  methods: {
    openURL
  }
}
</script>

<style>
</style>

<template>
  <q-layout>
    <q-layout-header>
      <q-toolbar color="info" class="fixed shadow-5">
        <q-btn
          flat
          aria-label="back">
          <q-btn flat class="rotate"
            @click="$router.push('/salas')" icon="navigation">
          </q-btn>
        </q-btn>
        <q-toolbar-title class="flex justify-center">
         <p> Chat Aps </p>
        </q-toolbar-title>
        <q-btn
          flat aria-label="image-icon">
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

<style scoped>
  .rotate {
    transform: rotate(-90deg)
  }
</style>

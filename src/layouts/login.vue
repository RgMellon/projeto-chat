<template>
  <q-layout class="layout-login">
    <q-page-container>
        <img :src="require('../assets/img/terra-mobile.png')" alt="">
        <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
export default {
  // name: 'LayoutName',
  data() {
    return {
      leftDrawer: true
    };
  }
};
</script>

<style scoped>
  .layout-login {
    background: #775b38;
  }
</style>

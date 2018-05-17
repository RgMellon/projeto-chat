<template>
  <q-page padding>
    <div class="flex justify-center" style="margin-top:2rem">
      <div class="img-upload shadow-1 flex justify-center">
        <upload @addFile="uploadFile"  class="items-center"
                 size="80" avatar="chat.png">
        </upload>
      </div>
    </div>
    <formCriarSala :img="file"></formCriarSala>
  </q-page>
</template>

<script>
import upload from './upload';
import formCriarSala from './formCriarSala';
export default {
  name: 'ComponentCriaSala',
  components: {
    upload,
    formCriarSala,
  },
  data () {
    return {
      file: '',
    }
  },
  methods: {
    uploadFile(img){
      this.file = img;
    }
  }
}
</script>

<style scoped>
 .img-upload {
    margin-top: 2rem;
    border-radius: 50%;
    width: 120px;
    height: 120px;
    overflow: hidden;
  }
</style>

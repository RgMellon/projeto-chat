<template>
  <div class="flex">
    <div v-if="!imagem" :style="myIcon" class="cor-icone">
      <label for="file-input" class="flex">
        <q-icon  name="add_a_photo"/>
      </label>
      <input id="file-input" type="file" accept="image/*" @change="onFileChange"/>
    </div>
    <div v-else class="flex items-center" >
      <img :src="imagem" alt="" style="overflow:hidden">
    </div>

    <div class="container-flex btn-img-excluir" v-if="imagem" >
      <q-btn flat aria-label="Create">
        <q-icon name="create" />
      </q-btn>
    </div>

  </div>
</template>

<script>
export default {
  props:['avatar', 'size'],
  // name: 'ComponentName',
  data () {
    return {
      imagem: '',
    }
  },
  computed: {
    myIcon(){
      return `font-size:${this.size}px`;
    }
  },
  methods: {
      onFileChange(e) {
        let files = e.target.files || e.dataTransfer.files;
        if (!files.length) return;
        this.createImage(files[0]);
      },

      createImage(file) {
       let reader = new FileReader();

        reader.onload = (e) => {
          this.imagem = e.target.result;
          this.$emit('addFile', this.imagem);
        };

        reader.readAsDataURL(file);
      },

      removeImage(e) {
        this.imagem = '';
        this.$emit('addFile', null);
      },

    }
}
</script>

<style scoped>
  #file-input{
    display: none;
  }
  .btn-img-excluir{
    margin-top: 5px;
    position: absolute;
    right: -50%;
  }
  .cor-icone {
    color: #d3c6c6c4;
  }
</style>

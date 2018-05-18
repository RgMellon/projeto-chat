<template>
  <div class="flex">
    <div class="" v-if="this.mostraImagem">
      <div v-if="!imagem" :style="myIcon" class="cor-icone">
        <label for="file-input" class="flex" @click="devolveImg(true)">
          <q-icon  :name="icon"/>
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
    <div v-else>
        <div v-if="!imagem" :style="myIcon" class="cor-icone">
        <label for="file-input" class="flex" @click="devolveImg(false)">
          <q-icon  :name="icon"/>
        </label>
        <input id="file-input" type="file" accept="image/*" @change="onFileChange"/>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  props:['size', 'icon', 'mostraImagem'],
  name: 'UploadName',
  data () {
    return {
      imagem: '',
      escondeImg: '',
    }
  },
  computed: {
    myIcon(){
      return `font-size:${this.size}px`;
    }
  },
  methods: {
      devolveImg(boolean) {
        this.escondeImg = boolean;
      },
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
          if(this.escondeImg == false){
           this.imagem = false
          }
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

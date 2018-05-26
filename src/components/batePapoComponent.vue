<template>
  <q-page padding class="row justify-center">
    <div style="width: 100%; margin-top:1rem;">
      <div class="scroll" v-chat-scroll >
      <q-chat-message @click="teste()"
        v-for="(msg, index) in room"
        :key="`reg-${index}`"
        :label="msg.label" 
        :sent="verificaEmail(msg.email)"
        :text-color="msg.textColor"
        :bg-color="msg.bgColor"
        :name="msg.name"
        :avatar="msg.avatar"
        :text="verificaMsg([msg.msg])"
        :stamp="String(msg.stamp)"
      />
    </div>
    </div>
  </q-page>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
  props:['id'],
  data () {
    return {
      message: '',

    }
  },
  created(){
    let salaMsgs = `salas/${this.id}/msgs`;
    this.$bindAsArray("room", this.$firebase.ref(salaMsgs));
  },
  computed: {
    ...mapGetters({
        user: "getUser"
    }),
  },
  methods: {
    verificaEmail(email) {
      return this.user.email == email;
    },
    verificaMsg(msg) {
      if(typeof(msg)){
          let sub = String(msg).substring(0, 42);
          let url = 'https://api-chat-aps.herokuapp.com/images/'
          if(url == sub) {
            return [`<img src="${[msg]}">`]
          }else if(msg == 'goHorse'){
            return [`<img src="./statics/goHorse.jpeg">`];
          }else{
            return msg;
          }
       }
    },
    teste() {
      alert('oi')
    }
  }
}
</script>
<style scoped>
  .scroll{
    max-width: 90vw;
	  overflow-y: scroll;
    max-height:88vh;
    width: 100%;
    background: red;
}
</style>

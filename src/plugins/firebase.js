import { initializeApp } from 'firebase';
import VueFire from 'vuefire';
const app = initializeApp({
  apiKey: "AIzaSyCkJf1NUVet7ha3oc-UtgHNcMJ1UtG-X9E",
  authDomain: "chat-aps.firebaseapp.com",
  databaseURL: "https://chat-aps.firebaseio.com",
  projectId: "chat-aps",
  storageBucket: "chat-aps.appspot.com",
  messagingSenderId: "73601295023"
});

const db =  app.database();
export const roomsRef =  db.ref('salas');

export default ({ Vue }) => {
  Vue.use(VueFire)
  Vue.prototype.$firebase = app.database();
}


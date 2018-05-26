import { db } from './firebase';  
import { user } from './retornaUsuario';
let userJson = user();

export default ({ app, router, Vue }) => {
  Vue.prototype.$salvaMensagem = (id, mensagem) => {
    if (mensagem == "") return;
      else {
        db.ref(`salas/${id}/msgs`).push({
          name: userJson.nome,
          msg: mensagem,
          sent: true,
          avatar: userJson.foto,
          stamp: new Date().toLocaleString(),
          email: userJson.email,
        });
      }
  }
}

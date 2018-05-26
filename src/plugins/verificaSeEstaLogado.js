import  { user }  from './retornaUsuario';
let userJson = user();
const verificaSeEstaLogado = () => {
  if(userJson.nome && userJson.email != undefined){
    userJson.nome && userJson.email !== '' ? true : false
  }
}

export default ({ router }) => {
  router.beforeEach((to, from, next) => {
  if(to.meta.requiresAuth){
    if((verificaSeEstaLogado())) {
      next({path: '/salas'});
    }else{
      next()
    }
  }
    next()
  });
}
  

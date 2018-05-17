const verificaSeEstaLogado = () => {
   let user = localStorage.getItem('vuex');
   if(user == null || user == 'undefined') {
     return false;
   }else{
    let userJson = JSON.parse(user);
      if(userJson.user.user.nome && userJson.user.user.email != undefined){
        if(userJson.user.user.nome && userJson.user.user.email !== ''){
          return true;
        }else{
          return false;
        }
      }
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
  

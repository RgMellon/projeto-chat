import Vue from 'vue';
export const middleware = router.beforeEach((to, from, next) => {
  if(to.meta.requiresAuth){
    if(verificaSeEstaLogado()) {
      next();
    }else{
      next({
        name: 'auten'
      })
    }
  }
  next()
});
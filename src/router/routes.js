
export default [
  {
    path: '/',
    component: () => import('layouts/login'),
    children: [
      { path: '', meta: {requiresAuth: true}, component: () => import('pages/login-page') }
    ]
  },
  {
    path: '/salas',
    component: () => import('layouts/default'),
    children: [
      { path: '', meta: {isLoged: true}, component: () => import('pages/salas-page') },
    ]
  },
  {
    path: '/salas/criar',
    component: () => import('layouts/bate-papo'),
    children: [
      { path: '', component: () => import('pages/criar-sala') },
    ]
  },
  {
    path: '/bate-papo',
    component: () => import('layouts/bate-papo'),
    children: [
      { path: ':id', props:true, component: () => import('pages/bate-papo-page') }
    ]
  },
  {
    path: '/gifs',
    component: () => import('layouts/bate-papo'),
    children: [
      { path: ':id', props:true, component: () => import('pages/gifs-page') }
    ]
  },

  {
    path: '/perfil',
    component: () => import('layouts/perfilLayout'),
    children: [
      { path: '', component: () => import('pages/perfil-page') }
    ]
  },

  {
    path: '*',
    component: () => import('pages/404')
  }
]

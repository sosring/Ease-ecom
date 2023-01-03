import { createRouter, createWebHistory } from 'vue-router'

function lazyLoad(view){
  return() => import(`@/views/${view}.vue`)
}

const routes = [
    {
      path: '/',
      name: 'home',
      component: lazyLoad('Homepage')
    },
    {
      path: '/auth',
      name: 'auth',
      component: lazyLoad('Authpage')
    },
    {
      path: '/products',
      name: 'products',
      component: lazyLoad('Productpage')
    },
    {
      path: '/cart',
      name: 'cart',
      component: lazyLoad('Cartpage')
    }
  ]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,

  scrollBehavior() {
      return {x: 0, y: 0}
  }
})

export default router

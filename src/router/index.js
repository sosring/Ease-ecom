import { createRouter, createWebHistory } from 'vue-router'

const routes = [
    {
      path: '/',
      name: 'home',
      component: () => import('@/views/Homepage.vue')
    },
    {
      path: '/auth',
      name: 'auth',
      component: () => import('@/views/Authpage.vue')
    },
    {
      path: '/products',
      name: 'products',
      component: () => import('@/views/Productpage.vue')
    },
    {
      path: '/cart',
      name: 'cart',
      component: () => import('@/views/Cartpage.vue')
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

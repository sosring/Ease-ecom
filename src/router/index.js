import { createRouter, createWebHistory } from 'vue-router'
import  Homepage from '@/views/Homepage.vue'
import  Authpage from '@/views/Authpage.vue'
import  Productpage from '@/views/Productpage.vue'
import  Wishlist from '@/views/Wishlist.vue'
import  Cartpage from '@/views/Cartpage.vue'

const routes = [
    {
      path: '/',
      name: 'home',
      component: Homepage
    },
    {
      path: '/auth',
      name: 'auth',
      component: Authpage
    },
    {
      path: '/products',
      name: 'products',
      component: Productpage 
    },
    {
      path: '/wishlist',
      name: 'wishlist',
      component: Wishlist 
    },
    {
      path: '/cart',
      name: 'cart',
      component: Cartpage 
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

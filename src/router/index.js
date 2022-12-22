import { createRouter, createWebHistory } from 'vue-router'
import Homepage from '../views/Homepage.vue'
import Authpage from '../views/Authpage.vue'

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
    }
  ]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router

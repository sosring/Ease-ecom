import { createRouter, createWebHistory } from 'vue-router'
import Homepage from '@/views/Homepage.vue'
import Authpage from '@/views/Authpage.vue'
import Cartpage from '@/views/Cartpage.vue'
import Productpage from '@/views/Productpage.vue'
import ProductDetails from '@/views/ProductDetails.vue'


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
      path: '/cart',
      name: 'cart',
      component: Cartpage 
    },
    {
      path: '/products/:id',
      name: 'productDetails',
      component: ProductDetails,
      props: true
    }
  ]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router

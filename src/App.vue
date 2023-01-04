<template>

  <Navbar />

  <main class="main-container"
   v-if="productStore.productLoaded">

   <router-view v-slot="{ Component, route }">
     <transition name="fade" mode="out-in">
       <div :key="route.name">  
       <component :is="Component"></component>
       </div>
     </transition>
   </router-view>
  </main>
</template>

<script setup>
  import { onMounted } from 'vue'
  import Navbar from './components/TheNavbar.vue'
  import { useAuthStore } from '@/stores/auth'
  import { useProductStore } from '@/stores/product'

  const useAuth = useAuthStore()
  const productStore = useProductStore() 

  onMounted(() => {
    useAuth.init()
    productStore.fetchProductData()
  })
</script>

<style lang="scss">
  @import './src/styles/main';

  #app {
    height: 100vh;
    width: 100vw;
  }

  .main-container {
    width: 100%;
    height: 100%;
    overflow-y: scroll;

    scrollbar-width: none;  
    scroll-behavior: smooth;

    padding-top: 3rem;
  }

 /* route */
.fade-enter-active,
.fade-leave-active {
  transition: opacity .3s ease;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>

<template>

  <header>
    <Navbar />
  </header>

  <main class="main-container">
   <RouterView />
  </main>
</template>

<script setup>
  import { onMounted } from 'vue'
  import Navbar from './components/TheNavbar.vue'
  import { useAuthStore } from '@/stores/auth'
  import { useProductStore } from '@/stores/product'
  import { vAutoAnimate } from '@formkit/auto-animate'

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
    overflow: scroll;

    position: fixed;
    top: 6%;

    @include screen-md {
      top: 8%;
    }
  }
</style>

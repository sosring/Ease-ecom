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

  const useAuth = useAuthStore()

  onMounted(() => useAuth.init() )
</script>

<style lang="scss">
  @import './src/styles/main';

  #app {
    height: 100vh;
    width: 100vw;
  }

  .main-container {
    margin-top: 3rem;
    padding: .5rem;
  }
</style>

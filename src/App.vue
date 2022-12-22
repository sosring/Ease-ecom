<template>

  <div class="app">

  <header>
    <Navbar />
  </header>

  <main class="main">
   <RouterView />
  </main>
  </div>
</template>

<script setup>
  import { onMounted } from 'vue'
  import Navbar from './components/TheNavbar.vue'
  import { useAuthStore } from '@/stores/auth'

  const useAuth = useAuthStore()

  onMounted(() => useAuth.init() )
</script>

<style lang="scss" scoped>
  @import './src/styles/main';

  .main {
    margin-top: 4rem;
    padding: .5rem;
  }
</style>

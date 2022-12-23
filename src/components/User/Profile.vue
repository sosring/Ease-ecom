<template>

   <button v-if="useAuth.user.id"
    class="logout-btn"
    @click="useAuth.signOutUser">
    logOut
   </button>
</template>

<script setup>
  import { useAuthStore } from '@/stores/auth'

  const useAuth = useAuthStore()
</script>

<style lang="scss" scoped>
  @import '@/styles/main';

  .logout-btn {
    padding: .8rem 1rem;
    background: $brown;
    color: $white;
    border-radius: 8px;
  }
</style>

<template>

</template>

<script setup>
  import { ref, computed, watch } from 'vue'
  import { useAuthStore } from '@/stores/auth'

  const useAuth = useAuthStore()

  const props = defineProps(['editProfile'])

  const signOutUser = () => {

    if(useAuth.user.isAnonymous){
      useAuth.deactivateUser()
      return
    }
    useAuth.signOutUser()
  }
</script>

<style lang="scss" scoped>
  @import '@/styles/main';
</style>

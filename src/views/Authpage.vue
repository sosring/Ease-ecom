<template>

  <Form v-if="useAuth.user.id"
   :formDetails="formDetails"/>

</template>

<script setup>
  import { ref, reactive } from 'vue'
  import Form from '@/components/User/Form.vue'
  import { useAuthStore } from '@/stores/auth'

  const useAuth = useAuthStore()
  
  const formDetails = [
    { label: 'FIRST NAME', type: 'text', placeholder: 'John' },
    { label: 'LAST NAME', type: 'text', placeholder: 'Doe' },
    { label: 'PASSWORD', type: 'password', placeholder: 'eg - 8*jfaVnci' },
    { label: 'CONFIRM PASSWORD', type: 'password', placeholder: 'eg - 8*jfaVnci' },
  ]     
</script>

<style lang="scss" scoped>
  @import '@/styles/main';

</style>

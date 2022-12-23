<template>

  <Form v-if="!useAuth.user.id" 
   v-model:firstname="credentials.firstname"
   v-model:lastname="credentials.lastname"
   v-model:email="credentials.email"
   v-model:password="credentials.password"/>

  <Profile v-if="useAuth.user.id"
   />

</template>

<script setup>
  import { ref, reactive } from 'vue'
  import Form from '@/components/User/Form.vue'
  import Profile from '@/components/User/Profile.vue'

  import { useAuthStore } from '@/stores/auth'

  const useAuth = useAuthStore()

  const credentials = reactive({
    firstname: '',
    lastname: '',
    email: '',
    password: ''
  })  
</script>

<style lang="scss" scoped>
  @import '@/styles/main';
</style>

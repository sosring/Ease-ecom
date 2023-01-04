<template>

<div class="auth-wrapper">

  <Form v-if="!useAuth.user.id" 
    v-model:firstname="credentials.firstname"
    v-model:lastname="credentials.lastname"
    v-model:email="credentials.email"
    v-model:password="credentials.password"/>

  <UserProfile 
   v-if="useAuth.user.id"/>
</div>

</template>

<script setup>
  import { ref, computed, reactive } from 'vue'
  import Form from '@/components/User/Form.vue'
  import UserProfile from '@/components/User/UserProfile.vue'

  import { useAuthStore } from '@/stores/auth'

  const useAuth = useAuthStore()

  const credentials = reactive({
    firstname: '',
    lastname: '',
    email: '',
    password: ''
  })

  const greetings = computed(() =>  `Hey! ${useAuth.user.name}`)
</script>

<style lang="scss" scoped>
  @import '@/styles/main';

  .auth-wrapper {
    padding-top: 3rem;
  }
</style>

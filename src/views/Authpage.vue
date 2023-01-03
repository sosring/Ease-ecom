<template>

<div class="auth-wrapper" v-auto-animate>
 <Form v-if="!useAuth.user.id" 
   v-model:firstname="credentials.firstname"
   v-model:lastname="credentials.lastname"
   v-model:email="credentials.email"
   v-model:password="credentials.password"/>

</div>

</template>

<script setup>
  import { ref, computed, reactive } from 'vue'
  import { vAutoAnimate } from '@formkit/auto-animate'
  import Form from '@/components/User/Form.vue'
  import UserDesktopProfile from '@/components/User/UserDesktopProfile.vue'

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

  span {
   padding: .8rem;
   cursor: pointer;

    i{
      margin-right: .5rem;
      font-size: .8rem;
    }
  }

 .profile-container {
    width: min(800px, 100%);
    padding: 1rem;
    overflow: hidden;
    margin: 2rem auto;

    @include screen-md {
      box-shadow: 0 2px 8px 0 rgba(0,0,0,0.2);
      border-radius: 6px; 
    }
 
    header {
     display: grid;
     align-items: start;
     margin-bottom: 1rem;

      span {
       font-size: clamp(1.2rem, 5vw, 1.4rem);
       padding: .8rem 0;
      }

      .profile-img {
        height: 120px;
        width: 120px;
        border-radius: 50%;

        overflow: hidden;
        position: relative;

        @include screen-md {
          margin: .8rem 0; 
          height: 180px;
          width: 180px;
        }

        img {
          position: absolute;
          object-fit: cover;
          height: 100%;
          width: 100%;
        }
      }
    }
  }
</style>

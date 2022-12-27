<template>

<div v-auto-animate>
<Form v-if="!useAuth.user.id" 
   v-model:firstname="credentials.firstname"
   v-model:lastname="credentials.lastname"
   v-model:email="credentials.email"
   v-model:password="credentials.password"/>

  <div v-if="useAuth.user.id" 
   class="profile-container">
    
    <header>
      <span @click="previousRoute">
        <i class="fas fa-chevron-left"></i>
        <p class="capitalize">
          {{ editUserProfile ? 'Edit Profile' : greetings }}
        </p>
      </span>

       <div v-if="!editUserProfile"
        class="profile-img">
        <img :src="useAuth.user.img">
       </div>
    </header>

  <div class="user-wrapper">
   <Profile
    key="profile"
    v-if="!editUserProfile"
    v-model:editProfile="editUserProfile"/>

   <Editprofile 
    key="editProfile"
    v-if="editUserProfile"
    v-model:editProfile="editUserProfile"/>
  </div>

 </div>
</div>

</template>

<script setup>
  import { ref, computed, reactive, watch } from 'vue'
  import { useRouter } from 'vue-router'
  import { vAutoAnimate } from '@formkit/auto-animate'
  import Form from '@/components/User/Form.vue'
  import Profile from '@/components/User/Profile.vue'
  import Editprofile from '@/components/User/Editprofile.vue'

  import { useAuthStore } from '@/stores/auth'

  const useAuth = useAuthStore()

  const credentials = reactive({
    firstname: '',
    lastname: '',
    email: '',
    password: ''
  })  

  const greetings = computed(() =>  `Hey! ${useAuth.user.name}`)

  const editUserProfile = ref(false) 
  const router = useRouter()

  const previousRoute = () => {
    if(editUserProfile.value){
      editUserProfile.value = false 
      return 
    }
    router.go(-1)
  }
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
    max-width: 800px;
    padding: 1rem;
    overflow: hidden;
    margin: 1rem auto;

    @include screen-md {
      box-shadow: 0 2px 8px 0 rgba(0,0,0,0.2);
      border-radius: 6px; 
    }
 
    header {
     display: grid;
     align-items: start;
     margin-bottom: 1rem;

      span {
       font-size: 1.2rem;
       padding: .8rem 0;

       @include screen-sm {
         font-size: 1.4rem;
       }
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

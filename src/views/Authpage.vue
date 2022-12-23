<template>

<div>
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
        <p>{{ editUserProfile ? 'Edit Profile' : greetings }}</p>
      </span>

     <div class="profile-img">
      <img :src="useAuth.user.img">
     </div>
    </header>

   <Profile
    v-if="!editUserProfile"
    v-model:editProfile="editUserProfile"/>

   <Editprofile 
    v-if="editUserProfile"
    v-model:editProfile="editUserProfile"/>
  </div>
</div>

</template>

<script setup>
  import { ref, computed, reactive, watch } from 'vue'
  import { useRouter } from 'vue-router'
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
    max-width: 700px;
    margin: 1rem auto;

    header {
     margin-bottom: 1rem;
     display: grid;

      span {
       font-size: 1.2rem;
       padding: .8rem 0;
      }

      .profile-img {
        height: 100px;
        width: 100px;
        border-radius: 50%;
        position: relative;
        overflow: hidden;
        margin: .8rem .5rem;

        @include screen-md {
          margin: .8rem 0; 
          height: 150px;
          width: 150px;
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

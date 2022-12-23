<template>

  <div class="edit-profile-container">

   <form class="form-update"
    @submit.prevent="submitForm">
     
     <div>
      <label>FIRST NAME</label>
      <input 
       v-model="userInfo.firstname"
       class="form-inputs capitalize" 
       type="text">
     </div>

     <div>
      <label>LAST NAME</label>
      <input 
       v-model="userInfo.lastname"
       class="form-inputs capitalize" 
       type="text">
     </div>

     <div>
      <label>EMAIL</label>
      <input 
       v-model="userInfo.email"
       class="form-inputs" 
       type="text">
     </div>

     <div v-if="setNewPassword">
      <label>OLD PASSWORD</label>
      <input 
       v-model="userInfo.password"
       class="form-inputs" 
       type="password">
     </div>

     <div v-if="setNewPassword">
      <label>New PASSWORD</label>
      <input 
       v-model="userInfo.confirmation"
       class="form-inputs" 
       type="password">
     </div>

    <input 
     class="submit-btn btns" 
     type='submit' 
     value="SUBMIT">
   </form>


   <div class="other-neccessary-btns">

    <button 
     @click="changePassword"
     class="password-btn">
      {{ setNewPassword ? 'Cancel' : 'Change password' }}
    </button>

    <button class="deactivate-btn"
     @click="useAuth.deactivatedUser">
      Deactived Account
    </button>

   </div>
  </div>
</template>

<script setup>
  import { ref, reactive } from 'vue'
  import { useAuthStore } from '@/stores/auth'

  const useAuth = useAuthStore()

  const emits = defineEmits(['editProfile'])

  const userInfo = reactive({
    firstname: useAuth.user.name.split(' ')[0],
    lastname: useAuth.user.name.split(' ')[1],
    email: useAuth.user.email,
    password: '',
    confirmation: ''
  })

  const submitForm = () => {

    const userChanges = {
       fullName: `${userInfo.firstname} ${userInfo.lastname}`,
       email: userInfo.email
    }

    useAuth.updateUserProfile(userChanges)
    emits('update:editProfile' , false)
  }

  const setNewPassword = ref(false)

  const changePassword = () => {
    setNewPassword.value = !setNewPassword.value
    console.log(userInfo.password)
  }
</script>

<style lang="scss" scoped>
 @import '@/styles/main';
  
 .edit-profile-container {
    padding: .8rem 0;
    max-width: 700px;
    margin: 1rem auto;

    header {
      cursor: pointer;
      display: grid;

      span {
        margin-bottom: 1rem;

        p {
         font-size: 1.1rem;
         font-weight: 700;
        }

        i{
          margin-right: .5rem;
        }
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

    .form-update {
      display: grid;

      div {
        margin: 1rem 0;

        label {
          color: $text-light;
          font-weight: 700;
          font-size: .7rem;
        }
      }

      .form-inputs {
        width: 100%;
        color: $text-dark;
        padding: .5rem 0; 
        border-bottom: $brown 1px solid;
      }

      .submit-btn {
        text-align: end;
        color: darken($indigo, 20);
        font-size: 1rem;
      }
    }
 }

 .other-neccessary-btns {
   button {
    display: block;
    margin: .5rem 0;
   }

  .deactivate-btn {
    font-size: .9rem;
    color: darken($pink, 5);
  }

  .password-btn {
    font-size: .9rem;
    color: darken($text-light, 10);
  }
 }
</style>

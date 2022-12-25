<template>

  <div class="edit-profile-container">

   <form class="form-update"
    @submit.prevent="submitForm">
     
     <div>
      <label>FIRST NAME</label>
      <input 
       v-model="userInfo.firstname"
       class="inputs capitalize" 
       type="text">
     </div>

     <div>
      <label>LAST NAME</label>
      <input 
       v-model="userInfo.lastname"
       class="inputs capitalize" 
       type="text">
     </div>

     <div>
      <label>EMAIL</label>
      <input 
       v-model="userInfo.email"
       class="inputs" 
       type="text">
     </div>

   <div class="submit-wrapper">
    <input 
     class="submit-btn btns" 
     type='submit' 
     value="SUBMIT">
    </div>
  </form>


   <div class="other-neccessary-btns">

    <button class="password-btn"
     @click="resetPassword">
      Change password
    </button>

    <button class="deactivate-btn"
     @click="useAuth.deactivateUser">
      Deactived Account
    </button>

   </div>
  </div>
</template>

<script setup>
  import { ref, reactive } from 'vue'
  import { useAuthStore } from '@/stores/auth'

  const useAuth = useAuthStore()

  const emits = defineEmits(['update:editProfile'])

  const userInfo = reactive({
    firstname: useAuth.user.name.split(' ')[0],
    lastname: useAuth.user.name.split(' ')[1],
    email: useAuth.user.email
  })

  const submitForm = () => {

    const credentials = {
       firstname: userInfo.firstname,
       lastname: userInfo.lastname,
       email: userInfo.email,
    }

    if(credentials.firstname === '' || credentials.lastname.lastname === '' || credentials.email === ''){
      alert('Please complete the form!')
      return 
    }

    useAuth.updateUserProfile(credentials)
    emits('update:editProfile' , false)
  }

  const resetPassword = () => {
    useAuth.changePassword(userInfo.email)
  }
</script>

<style lang="scss" scoped>
 @import '@/styles/main';
  
 .edit-profile-container {
    max-width: 700px;
    margin: 1rem auto;
    padding: .8rem 0;

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
    }

    .form-update {
      display: grid;

      div {
        margin: 1rem 0;

        label {
          color: $text-light;
          font-weight: 700;
          font-size: .7rem;

          @include screen-sm {
            font-size: .9rem;
          }
        }
      }

      .inputs {
        width: 100%;
        color: $text-dark;
        padding: .5rem 0; 
        border-bottom: $brown 1px solid;

        @include screen-sm {
          font-size: 1rem;
        }
      }

      .submit-wrapper {
        text-align: end;

      .submit-btn {
        text-align: end;
        color: darken($indigo, 20);
        font-size: 1rem;

        &:hover {
          text-decoration: underline;
        }
      }
     }
    }
 }

 .other-neccessary-btns {
   button {
    display: block;
    margin: .5rem 0;
    font-size: .9rem;

     &:hover {
       text-decoration: underline;
     }
   }

  .deactivate-btn {
    color: darken($pink, 5);
  }

  .password-btn {
    color: darken($text-light, 10);
  }
 }
</style>

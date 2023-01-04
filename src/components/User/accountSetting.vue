<template>

  <section class="user-profile-wrapper">
   <header>
     <h3>Account Settings</h3>
   </header>

   <article class="detail-article">
    <p>Personal Information</p>

    <form @submit.prevent="submitForm"
     class="detail-form">

     <div class="input-wrapper">
      <label>First Name</label>

      <input 
       class="form-input"
       type="text"
       v-model="credentials.firstname">
     </div> 


     <div class="input-wrapper">
      <label>Last Name</label>

      <input 
       class="form-input"
       type="text"
       v-model="credentials.lastname">
     </div> 

     <div class="input-wrapper">
      <label>E-mail</label>

      <input 
       class="form-input"
       type="email"
       v-model="credentials.email">
     </div> 
     <br>

    <div class="btn-wrapper">
     <input class="submit-btn btns"
      type="submit" value="SUBMIT"> <br>

     <button class="deactivated-btn"
      @click="useAuth.deactivateUser">
        Deactivated Account
     </button>
    </div>

    </form>

   </article>
  </section>

</template>

<script setup>
  import { reactive } from 'vue'
  import { useAuthStore } from '@/stores/auth'

  const useAuth = useAuthStore()

  const credentials = reactive({
    firstname: '',
    lastname: '',
    email: ''
  }) 

  const props = defineProps({
    currentTab: {
      type: Number
    }
  });

  const emits = defineEmits(['update:currentTab'])

  credentials.firstname = useAuth.user.name.split(' ')[0]
  credentials.lastname = useAuth.user.name.split(' ')[1]
  credentials.email = useAuth.user.email

  const submitForm = () => {
    useAuth.updateUserProfile(credentials)
    emits('update:currentTab', 0)
  }
</script>

<style lang="scss" scoped>
  @import '@/styles/main';

  .user-profile-wrapper {
    width: 100%;
    margin-top: 2rem;

    padding: 2rem 2rem 0;

    @include screen-md {
      outline: $border 1px solid;
    }

   header {
    margin-bottom: 2rem;

    h3 {
      font-size: clamp(1.3rem, 2.5vw, 2.3rem);
      color: $indigo
    }
   }

   .detail-article {
     p {
      font-size: clamp(1.2rem, 2.5vw, 1.5rem );
      border-bottom: 2px $border solid;
      padding: .5rem 0;
     }
   }
  }

  .detail-form {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
    grid-gap: 2rem;

    padding: 2rem 0;

    .input-wrapper {
      display: grid;
      grid-gap: 1rem;
    }

    label {
      display: block;
      font-size: clamp(1rem, 2.5vw, 1.3rem)
    }

    .form-input {
      border: $border 1px solid;
      border-radius: 4px;

      padding: .9rem;

      font-size: 1.1rem;
      color: $text-light;

      &:focus {
        background: lighten($indigo, 30);
        color: $indigo
      }
    }

    .btn-wrapper {
      text-align: end;

      @include screen-md {
        grid-column: 1 / span 2;
      }
    }

    .submit-btn {
      padding: .7rem 1rem;
      border-radius: 4px;
      margin-bottom: 1rem;

      font-weight: 400;
      font-size: clamp(1.2rem, 2.5vw, 1.4rem);

      color: $indigo;
      border: $border 1px solid;
      background: lighten($indigo, 30);
      cursor: pointer;
    }
  }

  .deactivated-btn {
    color: $error;
    font-family: $source;
    font-size: clamp(1rem, 4.5vw, 1.3rem);
  }
</style>

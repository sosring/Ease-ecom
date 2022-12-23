<template>

  <div class="edit-profile-container">

   <form class="form-update"
    @submit.prevent="submitForm">
     
     <div>
      <label>FIRST NAME</label>
      <input 
       :value="userInfo.firstname"
       class="form-inputs" 
       type="text">
     </div>

     <div>
      <label>LAST NAME</label>
      <input 
       :value="userInfo.lastname"
       class="form-inputs" 
       type="text">
     </div>

     <div>
      <label>EMAIL</label>
      <input 
       v-model="userInfo.email"
       class="form-inputs" 
       type="text">
     </div>

    <input 
     class="submit-btn btns" 
     type='sumit' value="SUBMIT">
   </form>
   
  </div>
</template>

<script setup>
  import { ref, reactive } from 'vue'
  import { useAuthStore } from '@/stores/auth'

  const useAuth = useAuthStore()

  const props = defineProps(['condition'])

  const userInfo = reactive({
    firstname: useAuth.user.name.split(' ')[0],
    lastname: useAuth.user.name.split(' ')[1],
    email: useAuth.user.email
  })

  const submitForm = () => console.log(userInfo)
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
      padding: .8rem;
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
        padding: .5rem; 
        margin-top: .5rem;
        border-bottom: $brown 1px solid;
      }

      .submit-btn {
        text-align: center;
        color: darken($indigo, 20);
        @include fontStyle($source, 1.1rem);
      }
    }
 }
</style>

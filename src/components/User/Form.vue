<template>

  <div class="form-container">

   <div class="form-design">
    <img src="/assets/annie-spratt-1.jpg">
   </div>
    
   <div class="form-input-container">
    <header>
      <h1>{{ formInfo }}</h1> 
    </header>

    <form class="form-input-grid"
      @submit.prevent="submitForm">

     <div v-if="register">
      <label>FIRST NAME</label> 

      <input 
       :value="firstname"
       @input="$emit('update:firstname', $event.target.value)"
       class="form-inputs capitalize"
       type="text"
       placeholder="John">
     </div>

     <div v-if="register">
      <label>LAST NAME</label> 

      <input 
       :value="lastname"
       @input="$emit('update:lastname', $event.target.value)"
       class="form-inputs capitalize"
       type="text"
       placeholder="Doe">
     </div>

     <div>
      <label>EMAIL</label> 

      <input 
       :value="email"
       @input="$emit('update:email', $event.target.value)"
       class="form-inputs"
       type="email"
       placeholder="eg - johndoe@gmail.com">
     </div>

     <div>
      <label>PASSWORD</label> 

      <span
       class="password-input">
        <input 
         :value="password"
         @input="$emit('update:password', $event.target.value)"
         :type="hidePassword ? 'password' : 'text'"
         placeholder="eg - 8*jfaVnci">

         <i @click="hidePassword = !hidePassword"
          :class="hidePassword ? 'fas fa-eye' : 'fas fa-eye-slash'">
         </i>
       </span>
    </div>

    <input 
     class="form-submit-btn btns"
     type="submit" value="SUBMIT">

     <span class="question-span" 
      v-if="register"> 
      <p>Already have an account 
      <b @click="register = !register">
       Sign in ?</b>
      </p>
     </span>

     <span class="question-span"
      v-if="!register"> 
      <p>Create a new account
      <b @click="register = !register">
       Sign up ? </b>
      </p>
     </span>

    </form>

    <div class="auth-btns">

     <button class="google-btn btns"
       @click="useAuth.signInGoogle">
      <i class="fab fa-google"></i> Google
     </button>

     <button class="demo-btn btns"
      @click="useAuth.demoUser">
      <i class="fas fa-user"></i> Demo
     </button>
    </div>

    <div>
    </div>
   </div>

  </div>
</template>

<script setup>
  import { ref, reactive, computed } from 'vue' 
  import { useAuthStore } from '@/stores/auth'

  const useAuth = useAuthStore()

  const props = defineProps({
    firstname: {
      type: String,
      default: ''
    },
    lastname: {
      type: String,
      default: ''
    },
    email: {
      type: String,
      default: ''
    },
    password: {
      type: String,
      default: ''
    },
  })

  const register = ref(true)
  const hidePassword = ref(true)

  const formInfo = computed(() => {
   return register.value ? 'Sign Up' : 'Sign In'
  })

  const submitForm = () => {

    const credentials = {
      firstname: props.firstname,
      lastname: props.lastname,
      email: props.email, 
      password: props.password
    }

    if(register.value){
      if(credentials.firstname === '' || credentials.lastname === ''){
        alert('Please complete the form before submiting!')
        return 
      }
    }

    register.value ? useAuth.registerNewUser(credentials) : useAuth.signInEmailUser(credentials)
  }
</script>

<style lang="scss" scoped>
  @import '@/styles/main';

  input {
    font-size: 1rem;
  }

  .form-container {
    width: min(1350px, 100%);
    height: min(700px, 100%);

    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    overflow: hidden;

    display: flex;
    flex-direction: column;

    .form-design {
      width: 40%;
      position: relative;
      display: inline-block;

      img {
        object-fit: cover;
        position: absolute;
        height: 100%;
        width: 100%;
        filter: grayscale(80%);
      }
    }

    @include screen-lg {
      flex-direction: row;

      border-radius: 8px;
      box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2),
      0 6px 20px 0 rgba(0,0,0,0.19);
    }
  }

    .form-input-container {
      padding: 1rem;

      width: min(650px, 100%);
      margin: 4rem auto;
      font-size: clamp(1rem, 5vw, 1.4rem); 

      h1 {
        @include fontStyle($libre, 1.7em);
        font-weight: 400;

        color: lighten($text-dark, 10%);
        text-decoration: underline 2px;
        margin: 0 0 1rem;

        font-size: 2.3em
      }

      label {
        display: block;
        margin: .5rem 0;

        color: $error;
        font-weight: 800;
        font-size: .9em;
      }

      .question-span {
        justify-content: center;
        color: $text-light;
        font-size: .9em;
        cursor: pointer;

        b {
          color: darken($indigo, 20);
          cursor: pointer;
        }

        @include screen-base {
          grid-column: 1 / span 2;
        }
      }
    }

  .password-input {
    width: 100%;
    color: $text-light;
    border-radius: 4px;

    position: relative;

    input {
      width: 100%;
      height: 100%;
      color: inherit;

      padding: .9rem 1rem; 
      border-radius: 4px;
      border: $error 1px solid;

      &:focus {
        background: lighten($error, 40%);
        outline: none;
      }
    }

    i {
      z-index: 1;
      position: absolute;
      right: 3%;
      cursor: pointer;
    }
  }

  .form-input-grid {
     gap: .5rem;

    .form-inputs {
      width: 100%;
      color: $text-light;
      padding: .9rem 1rem; 
      border-radius: 4px;
      border: $error 1px solid;

      &:focus {
        background: lighten($error, 40%);
        outline: none;
      }
    }


    .form-submit-btn {
      color: $white;
      background: $error;
      transition: all .15s;
      cursor: pointer;

      font-size: 1.1rem;

      margin: 1rem 0;
      width: 100%;

      &:hover {
        background: darken($error, 10);
        box-shadow: 0 0px 8px 0 rgba(0,0,0,0.1)
      }
    }

    @include screen-sm {
      gap: 1rem;
      display: grid;
      grid-template-columns: repeat(2, 1fr);

      .form-submit-btn {
        grid-column: 1 /span 2
      }

      .auth-btns {
        grid-column: 1 / span 2; 
      }
    }
  }

  .auth-btns {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    margin: 1rem 0;
    grid-gap: 1rem;

    font-size: 1rem;

    .google-btn{
      color: $white;
      background: darken($indigo, 10);

      &:hover {
        background: darken($indigo, 20);
      }
    }

    .demo-btn{
      background: lighten($text-dark, 10);
      color: $white;
      
      &:hover {
        background: lighten($text-dark, 5);
      }
    }
  }
</style>

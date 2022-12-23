<template>

  <form class="form-container"
   @submit.prevent="submitForm">

   <div class="form-design">
    <img src="/annie-spratt-1.jpg">
   </div>
    
   <div class="form-input-container">
    <header>
      <h1>{{ formInfo }}</h1> 
    </header>

    <div class="form-input-grid">

     <div v-if="register">
      <label>FIRST NAME</label> 

      <input 
       :value="firstname"
       @input="$emit('update:firstname', $event.target.value)"
       class="form-inputs"
       type="text"
       placeholder="John">
     </div>

     <div v-if="register">
      <label>LAST NAME</label> 

      <input 
       :value="lastname"
       @input="$emit('update:lastname', $event.target.value)"
       class="form-inputs"
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

      <input 
       :value="password"
       @input="$emit('update:password', $event.target.value)"
       class="form-inputs"
       type="password"
       placeholder="eg - 8*jfaVnci">
     </div>

    <input class="form-submit-btn btns"
     type="submit" value="SUBMIT">

     <span v-if="register"> 
      <p>Already have an account </p>
      <p @click="register = !register">
       Sign in ?
      </p>
     </span>

     <span v-if="!register"> 
      <p>Create a new account</p>
      <p @click="register = !register">
       Sign up ?
      </p>
     </span>

    </div>

    <section class="auth-btns"
     @click="useAuth.signInGoogle">
     <button class="google-btn btns">
      <i class="fab fa-google"></i> Google
     </button>

     <button class="demo-btn btns"
      @click="useAuth.demo">
      <i class="fas fa-person"></i> Demo
     </button>
    </section>

    <div>
    </div>
   </div>

  </form>
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

  const formInfo = computed(() => {
   return register.value ? 'Sign Up' : 'Sign In'
  })

  const submitForm = () => {
    const credentials = {
      fullName : `${props.firstname} ${props.lastname}`,
      email: props.email, 
      password: props.password
    }

    if(credentials.fullName === '' || credentials.email === '' || credentials.password === ''){
      alert('Please complete the form.')
    }

    register.value ? useAuth.registerNewUser(credentials) : useAuth.signInEmailUser(credentials)
  }
</script>

<style lang="scss" scoped>
  @import '@/styles/main';

  .form-container {
    height: auto;
    max-width: 1400px;
    margin: 0 auto;

    overflow: hidden;
    @include flexCenter(none, none, column);

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

    @include screen-md {
      height: 700px;
      width: 90%;
      margin: 3rem auto;
      border-radius: 8px;
      @include flexCenter(none, none, row);
      box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2),
      0 6px 20px 0 rgba(0,0,0,0.19);
    }
  }

    .form-input-container {
      padding: 1rem;
      font-size: 1.4rem; 

      h1 {
        @include fontStyle($libre, 1.7rem);
        color: lighten($text-dark, 10%);
        text-decoration: underline 2px;
        margin: 0 0 1rem;

      }

      label {
        display: block;
        margin: 1rem 0;

        color: $brown;
        font-size: 1rem;
        font-weight: 800;
      }

      .btns {
        padding: .9rem 0;
        border-radius: 4px;
        transition: all .15s ease-in;

        &:active {
          transform: translate(0, 5%)
        }
      }


      @include screen-md {
        margin: 3rem auto; 

        h1{
          font-size: 2.5rem;
        }

        label {
          font-size: 1.1rem;
        }
      }
      span {
        display: flex;
        justify-content: center;
        color: $text-light;
        font-size: 1rem;

        :nth-child(1){
          margin-right: .5rem;
        }
        :nth-child(2){
          font-weight: 700;
          color: darken($indigo, 20);
          cursor: pointer;
        }
        @include screen-base {
          grid-column: 1 / span 2;
        }
      }


      .form-inputs {
        width: 100%;
        color: $text-light;
        padding: .7rem 1rem; 
        border-radius: 4px;
        border: $brown 1px solid;

        &:focus {
          background: lighten($brown, 30%);
          outline: none;
        }
      }
    }

  .form-input-grid {
     gap: .5rem;

    .form-submit-btn {
      color: $white;
      background: darken($brown, 10);
      transition: all .15s;

      margin: 1rem 0;
      width: 100%;

      &:hover {
        background: darken($brown, 7);
        box-shadow: 0 0px 8px 0 rgba(0,0,0,0.1)
      }
    }

    @include screen-base {
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

    .google-btn{
      color: $white;
      margin-right: .5rem;
      background: darken($indigo, 10);

      &:hover {
        background: darken($indigo, 20);
      }
    }

    .demo-btn{
      background: lighten($text-dark, 10);
      color: $white;
      margin-left: .5rem;
      
      &:hover {
        background: lighten($text-dark, 5);
      }
    }
  }

</style>

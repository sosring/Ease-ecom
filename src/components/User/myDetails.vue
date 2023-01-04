<template>

  <section class="user-profile-wrapper">
   <header>
     <h3>My details</h3>
   </header>

   <article class="detail-article">
    <p>Personal Information</p>

    <form @click.prevent="$emit('update:currentTab', 2)"
     class="detail-form">

     <div v-for="input in inputObj"
      class="input-wrapper">
      <label v-html="input.label"></label>
      <input 
       readonly
       class="form-input"
       type="text"
       :value="input.value">
     </div> <br>

    <div class="btn-wrapper">
     <input 
      class="submit-btn btns"
      type="submit"
      value='Edit' />
    </div>

    </form>
   </article>
 </section>

</template>

<script setup>
  import { useAuthStore } from '@/stores/auth'

  const props = defineProps({
    currentTab: {
      type: Number
    }
  });

  const emits = defineEmits(['update:currentTab'])

  const useAuth = useAuthStore()

  const inputObj = [
    { label: 'First Name', value: useAuth.user.name.split(' ')[0]},
    { label: 'Last Name', value: useAuth.user.name.split(' ')[1]},
    { label: 'Email', value: useAuth.user.email }
  ] 
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
      @include screen-sm {
        grid-column: 1 / span 2;
      }
    }

    .submit-btn {
      padding: .7rem 1.7rem;
      border-radius: 4px;

      font-weight: 400;
      font-size: clamp(1.2rem, 2.5vw, 1.4rem);

      color: $indigo;
      border: $border 1px solid;
      background: lighten($indigo, 30);
      cursor: pointer;
    }
  }
</style>

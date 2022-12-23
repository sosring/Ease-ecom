<template>

<main>
  <div class="primary-grid">
   <span>
      <i class="cart fas fa-shopping-cart"></i>
      <p>CartList</p>
    </span>

    <span>
      <i class="heart fas fa-heart"></i>
      <p>WishList</p>
    </span>
  </div>

  <div class="secoundary-grid">
    <h3>Account Settings</h3>

    <span @click="$emit('update:editProfile', true)">
      <i class="fas fa-user"></i>
      <p>Edit Profile</p>
    </span>

    <span>
      <i class="fas fa-circle-half-stroke"></i>
      <p>Theme</p>
    </span>

    <span @click="signOutUser">
      <i class="fas fa-sign-out"></i>
      <p>Logout</p>
    </span>

  </div>
</main>

</template>

<script setup>
  import { ref, computed, watch } from 'vue'
  import { useAuthStore } from '@/stores/auth'

  const useAuth = useAuthStore()

  const props = defineProps(['editProfile'])

  const signOutUser = () => {

    if(useAuth.user.isAnonymous){
      useAuth.deactivateUser()
      return
    }
    useAuth.signOutUser()
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

    .primary-grid {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 8px;

      margin-bottom: 1rem;

      span {
        justify-content: center;
        background: lighten($brown, 30);
        border-radius: 6px;

        @include screen-sm {
          font-size: 1rem;
        }

        .cart {
          color: darken($indigo, 20)
        }

        .heart {
          color: $pink
        }
      }
    }

  .secoundary-grid {

    h3 {
      padding: .8rem 0;
      font-family: $oswald;
    }

    span p:hover {
      text-decoration: underline;
    }

    @include screen-sm {

      h3 {
        font-size: 1.2rem;
      }

      span p {
        font-size: 1rem;
      }
    }
    
   }
</style>

<template>

  <div v-if="!editUserProfile" 
   class="profile-container">
    
    <header>
      <span @click="$router.go(-1)">
        <i class="fas fa-chevron-left"></i>
        <p>{{ greetings }}</p>
      </span>

     <div class="profile-img">
      <img :src="useAuth.user.img">
     </div>
    </header>

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

        <span @click="editUserProfile = !editUserProfile">
          <i class="fas fa-user"></i>
          <p>Edit Profile</p>
        </span>

        <span>
          <i class="fas fa-circle-half-stroke"></i>
          <p>Theme</p>
        </span>
        
        <span @click="useAuth.signOutUser">
          <i class="fas fa-sign-out"></i>
          <p>Logout</p>
        </span>

      </div>
    </main>
  </div>

  <Editprofile 
   v-model:condition="editUserProfile"
   v-if="editUserProfile" />

</template>

<script setup>
  import { ref, computed, watch } from 'vue'
  import { useAuthStore } from '@/stores/auth'
  import { useDateFormat } from '@vueuse/core'
  import Editprofile from '@/components/User/Editprofile.vue'

  const useAuth = useAuthStore()

  const formatted = computed(() => {
    const format = useDateFormat(useAuth.user.creationTime, 'DD-MM-YY')
    return format.value
  })

  const greetings = computed(() => {
    let name;

    if(useAuth.user.isAnonymous === false) {
      name = useAuth.user.name 
    }
    return `Hey! ${name}`
  })

  const editUserProfile = ref(false) 
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

    .primary-grid {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 8px;

      margin-bottom: 1rem;

      span {
        justify-content: center;
        background: lighten($brown, 30);
        border-radius: 6px;

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
   }
  }
</style>

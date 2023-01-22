<template>

  <div class="profile-wrapper">
    <aside class="profile-aside-tools">
      <h1>My Account</h1>

      <div class="profile-settings">
        <button 
         v-for="(btn, index) in btnObj"
         :class="{ 'active-tab': index === currentTab}"
         @click="changeTab(index)">
          <i :class="`user fas fa-${btn.icon}`"></i>
          <p class="capitalize">{{ btn.title }}</p>
        </button>
      </div>
    </aside>

    <MyDetails 
     v-if="currentTab === 0"
     v-model:currentTab="currentTab"/>

    <MyOrders 
     v-if="currentTab === 1"/>

    <AccountSetting
     v-if="currentTab === 2"
     v-model:currentTab="currentTab"/>
  </div>
</template>

<script setup>
  import { ref } from 'vue'
  import { useAuthStore } from '@/stores/auth'
  import MyDetails from '@/components/User//myDetails.vue'
  import MyOrders from '@/components/User//myOrders.vue'
  import AccountSetting from '@/components/User//accountSetting.vue'

  const useAuth = useAuthStore()

  const btnObj = [
    { title: "my details", icon: 'user' },
    { title: "my orders", icon: 'box'},
    { title: "account setting", icon: 'cog'},
    { title: "logout", icon: 'sign-out'}
  ]

  const currentTab = ref(0)

  const changeTab = index => {
    currentTab.value = index

    if(index === 3) { 
     if(useAuth.user.isAnonymous){ useAuth.deactivateUser() }

     useAuth.signOutUser() 
    }
  }
</script>

<style lang="scss" scoped>
  @import '@/styles/main';

  .profile-wrapper {
    width: min(1400px, 100%);
    margin: 0 auto;  

   @include screen-md {

    display: flex;
    justify-content: space-between;
    gap: 1rem;
   } 

    font-family: $raleway;
    background: $primary
  }

  .profile-aside-tools {
    width: (450px, 100%);
    padding: 1rem;

    h1 {
      color: $text-light;
      font-size: 3rem;
    }

    .profile-settings {
      display: grid;
      grid-gap: 1rem;
      margin-top: 2rem;

      button {
        display: flex;
        gap: 1rem;

        padding: 1rem;
        font-size: 1.2rem;

        border: 1px $border solid;
        color: lighten($text-light, 10);
        transition: all .15s ease; 

        &:hover {
          color: $indigo;
          background: lighten($indigo, 30)
        }
      }

      .active-tab {
        color: $indigo;
        background: lighten($indigo, 30)
      }
    }
  }
</style>

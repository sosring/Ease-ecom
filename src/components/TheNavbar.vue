<template>

  <nav class="nav-container"
   ref="NavbarRef">

  <div class="inner-nav-cont"
   v-auto-animate>

  <div class="primary-nav">
    <h1 @click="redirect">
     Ease
    </h1>

   <span 
    class="mobile-nav-btns">
    <i class="fas 
     fa-shopping-cart"
     ref="NavBtnRef">
    </i> 

    <i @click="toggleNav"
     class="fas fa-bars"
     ref="NavBtnRef">
    </i> 
   </span>
  </div>
  
  <div v-if="showNav"
   class="secoundary-nav">

    <RouterLink 
     @click="toggleNav"
     v-for="route in routes" 
     :to="{ name: route.path }">
       {{ route.name }}
    </RouterLink>

    <button class="cart-btn">
      <p>Cart</p>
      <i class="fas fa-shopping-cart"></i>
    </button>
  </div>

  </div>
 </nav>
</template>

<script setup>
  import { ref,  } from 'vue'
  import { onClickOutside } from '@vueuse/core'
  import { vAutoAnimate } from '@formkit/auto-animate'
  import { useAuthStore } from '@/stores/auth'
  import { useRouter } from 'vue-router'

  const router = useRouter()
  const useAuth = useAuthStore()

  const showNav = ref(null)
  const screenWidth = ref(null)

  const NavbarRef = ref('')
  const NavBtnRef = ref('')

  const toggleNav = () => {
    screenWidth.value <= 900 ? showNav.value = !showNav.value : showNav.value 
  } 

  onClickOutside( NavbarRef, () => {
    screenWidth.value <= 900 ? showNav.value = false : showNav.value
  }, { ignore: [NavBtnRef] })

  const checkScreen = () => {
    screenWidth.value = window.innerWidth
    screenWidth.value <= 900 ? showNav.value = false : showNav.value = true
  }
  checkScreen()
  window.addEventListener('resize', checkScreen)

  const routes = [
    { name: 'Home', path: 'home' },
    { name: 'Product', path: 'products' },
    { name:  'Profile'   , path: 'auth' }
  ] 

  const redirect = () => {
    showNav.value = false
    router.push({ name: 'home' })
  }
</script>

<style lang="scss" scoped>
  @import "@/styles/main";

  .nav-container {
    font-size: 16px;
    font-weight: 600;
    border-bottom: 1px solid $border;
    z-index: 2;

    background: $bg-light;

    position: fixed;
    top: 0;
    width: 100%;

    @include screen-sm {
     font-size: 18px;
    }
  }

  .inner-nav-cont {
    padding: .7rem; 
    @include flexCenter(none, space-between, column);


    max-width: 1540px;
    margin: 0 auto;

    @include screen-md {
      flex-direction: row;
    }

    .primary-nav {
      @include flexCenter(center, space-between, row);
      
      h1 {
        cursor: pointer;
        color: $text-dark;
        font-family: $libre;
        font-style: italic;
      }

     .mobile-nav-btns {
      gap: 1rem;

      i{
        display: inline-block;
        font-size: 1.1rem;
        color: $text-light;

        &:active{
          transform: translate(0, 5%);
        }

        @include screen-md {
         display: none;
        }
      }
     }
    }

    .secoundary-nav {
      text-align: end;
      gap: 1rem;
      margin: 1rem 0 0;

      @include flexCenter(end, start, column);

      a {
        color: $text-light;

        &.router-link-exact-active {
          color: $brown;
        } 

        &:hover {
          text-decoration: underline;
        }
      }

      @include screen-md {
        margin: 0;
      }

      @include screen-md {
        @include flexCenter(center, none, row);
      }
    }

    .cart-btn {
      display: none;

      color: $white;
      padding: .7rem 1rem; 
      border-radius: 4px;

      color: $brown;
      border: $brown 1px solid;
      font-size: 1rem;

      transition: all .15s;

      &:hover{
        background: $brown;
        color: $white;
      }

      &:active{
        transform: translate(0, 5%);
      }

      @include screen-md {
        display: flex;
        gap: .5rem;
      }
    }
  }
</style>

<template>

  <header class="nav-container"
   ref="NavbarRef">

  <nav class="inner-nav-cont"
   v-auto-animate>

  <div class="primary-nav">
    <h1 @click="redirect">
     Ease
    </h1>

   <span 
    class="mobile-nav-btns">

    <i 
     @click="$router.push({name: 'auth'})"
     class="user fas fa-user"
     ref="NavBtnRef">
    </i> 

    <i @click="gotoCart"
     class="cart fas fa-shopping-cart"
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
     class="links"
     @click="toggleNav"
     v-for="route in routes" 
     :to="{ name: route.path }">

      <p>{{ route.name }}</p>
    </RouterLink>

     <span class="search-bar">
      <input type="text" 
       class="capitalize"
       placeholder="search products">

       <i class="fas fa-magnifying-glass"></i>
     </span>

    <button class="account-btn"
     @click="$router.push({ name: 'auth' })">
      <i class="fas fa-user"></i>
      <p>My Account</p>
    </button>

    <button class="cart-btn"
     @click="$router.push({ name: 'cart' })">
      <i class="fas fa-shopping-cart"></i>
      <p>Cart</p>
    </button>
  </div>

  </nav>
 </header>
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
    { name: 'Product', path: 'products' }
  ] 

  const redirect = () => {
    screenWidth.value <= 900 ? showNav.value = false : showNav.value = true
    router.push({ name: 'home' })
  }

  const gotoCart = () => {
    showNav.value = false
    router.push({ name: 'cart' })
  }
</script>

<style lang="scss" scoped>
  @import "@/styles/main";

  .nav-container {
    font-size: clamp(1rem, 5vw, 1.2rem);
    font-weight: 600;
    border-bottom: 1px solid $border;
    z-index: 2;

    background: $bg-light;

    position: fixed;
    top: 0;
    left: 0;
    right: 0;
  }

  .inner-nav-cont {
    padding: .7rem; 
    display: flex;
    justify-content: space-between;
    flex-direction: column;

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

      .user {
        color: $error;
      }

      .cart {
        color: darken($indigo, 10);
      }

      i{
        display: inline-block;
        font-size: 1.1em;

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

      .search-bar {
        width: 100%;

        border: darken($border, 10) 1px solid;
        border-radius: 2rem;

        position: relative;
        color: $error;

        @include screen-sm {
          width: 400px;
        }

        input { 
         color: $text-light;
         padding: .7em 1em; 
         width: 90%;

         font-size: .9em;
        }

        i {
          position: absolute;
          right: 0;
          cursor: pointer;
          z-index: 1;

          height: 100%;
          padding: 0 1rem;
          font-size: 1em; 

          color: inherit;
          border-radius: 2rem;

          @include flexCenter(center, center, row);
        }
      }

      .links {
        color: $text-light;
        font-size: 1.1em;

        &.router-link-exact-active {
          color: $error;
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

    .account-btn,
    .cart-btn {
      display: none;

      color: $white;
      padding: .8rem 1rem; 
      border-radius: 50%;

      color: $text-light;

      font-size: .9em;
      font-family: $work;

      transition: all .15s;

      i {
        color: transparent;
       -webkit-text-stroke: 2px $text-dark; 
      }

      &:hover{
        color: $error;
        i {-webkit-text-stroke: 2px $error; }
      }

      @include screen-md {
        display: inline-block;
        gap: .5rem;
      }
    }
  }
</style>

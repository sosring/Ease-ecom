<template>

  <nav class="nav-container">

  <div class="inner-nav-cont"
   ref="NavbarRef">

  <div class="primary-nav">
    <h1 
     @click="$router.push({ name: 'home' })">
     Ease
    </h1>

    <i @click="toggleNav"
     class="fas fa-bars"
     ref="NavBtnRef">
    </i> 
  </div>
  
  <div v-if="showNav"
   class="secoundary-nav">

    <RouterLink v-for="route in routes" 
     :to="{ name: route.path }">
       {{ route.name }}
    </RouterLink>

    <button class="cart-btn">
      CART
      <i class="fas fa-shopping-cart">
      </i>
    </button>
  </div>

  </div>
 </nav>
</template>

<script setup>
  import { ref,  } from 'vue'
  import { onClickOutside } from '@vueuse/core'

  const showNav = ref(null)
  const screenWidth = ref(null)

  const NavbarRef = ref('')
  const NavBtnRef = ref('')

  const toggleNav = () => {
    screenWidth.value <= 600 ? showNav.value = !showNav.value : showNav.value 
  } 

  onClickOutside(() =>  NavbarRef, () => {
    screenWidth.value <= 600 ? showNav.value = false : showNav.value
  },
  { 
   ignore: [NavBtnRef] 
  } )

  const checkScreen = () => {
    screenWidth.value = window.innerWidth
    screenWidth.value <= 600 ? showNav.value = false : showNav.value = true
  }
  checkScreen()
  window.addEventListener('resize', checkScreen)

  const routes = [
    { name: 'Home', path: 'home' },
    { name: 'PROFILE', path: 'auth' }
  ] 
</script>

<style lang="scss" scoped>
  @import "@/styles/main";

  .nav-container {
    font-size: 16px;
    font-weight: 600;
    background: $bg-light;
    border-bottom: 1px solid $border;

    position: fixed;
    top: 0;
    width: 100%;

    @include screen-sm {
     font-size: 18px;
    }
  }

  .inner-nav-cont {
    padding: .7rem .5rem; 
    @include flexCenter(none, space-between, column);

    max-width: 1140px;
    margin: 0 auto;

    @include screen-sm {
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

      i{
        display: inline-block;

        @include screen-sm {
         display: none;
        }
      }
    }

    .secoundary-nav {
      display: grid;
      text-align: end;
      margin: 1rem 0 0;

      a {
        margin: 0 0 1rem;
        color: $text-light;

        &.router-link-exact-active {
          color: $brown;
        } 

        &:hover {
          text-decoration: underline;
        }
      }

      @include screen-sm {
        @include flexCenter(center, none, row);
        margin: 0;

        a{
          margin: 0 1rem 0 0;
        }
      }
    }

    .cart-btn {
      background: $brown;
      color: $white;
      border-radius: 4px;
      padding: .7rem 0; 

      font-family: $oswald;
      transition: all .15s;

      @include screen-sm {
        border: $brown 1px solid;
        color: $brown;
        background: transparent;
        padding: .5rem 1rem;
        font-size: 1rem;

        &:hover{
          background: $brown;
          color: $white;
        }

        &:active{
          transform: translate(0, 5%);
        }
      }
    }
  }
</style>

<template>

  <header class="nav-container">

  <nav class="inner-nav-cont"
   ref="NavbarRef" v-auto-animate>

  <div class="primary-nav">
    <h1 class="brand"
     @click="redirect">
     Ease
    </h1>

   <span 
    class="mobile-nav-btns">

    <i @click="gotoRouting('auth')"
     class="user fas fa-user"
     ref="NavBtnRef">
    </i> 

    <i @click="gotoRouting('cart')"
     class="fas fa-shopping-cart"
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

  <span ref="searchBarRef" 
   class="search-engine-wrapper">

   <span
    class="search-bar">

    <input
     type="text" 
     class="capitalize"
     v-model="searchEngine"
     placeholder="search products">

     <i class="fas fa-magnifying-glass"></i>
   </span>

    <div v-if="searchEngine"
     class="search-product-list">

     <TheSearchList 
      @click="closeSearchList"
      v-for="product in searchList"
      :product="product"/>
    </div>
   </span>

    <RouterLink class="account-btn"
     :to="{ name: 'auth' }">
      <i class="fas fa-user"></i>
      <p>My Account</p>
    </RouterLink>

    <RouterLink class="cart-btn"
     :to="{ name: 'cart' }">
      <i class="fas fa-shopping-cart"></i>
      <p>Cart {{useCart.cartItems.length}}</p>
    </RouterLink>
  </div>

  </nav>
 </header>
</template>

<script setup>
  import { ref, computed } from 'vue'
  import { onClickOutside } from '@vueuse/core'
  import { vAutoAnimate } from '@formkit/auto-animate'
  import TheSearchList from '@/components/TheSearchList.vue'
  import { useAuthStore } from '@/stores/auth'
  import { useProductStore } from '@/stores/product'
  import { useCartStore } from '@/stores/cart'
  import { useRouter } from 'vue-router'

  const router = useRouter()

  const useAuth = useAuthStore()
  const useCart = useCartStore()
  const productStore = useProductStore()

  const showNav = ref(null)
  const screenWidth = ref(null)

  const NavbarRef = ref('')
  const NavBtnRef = ref('')
  const searchBarRef = ref('')

  const toggleNav = () => {
    console.log('toggle')
    screenWidth.value <= 900 ? showNav.value = !showNav.value : showNav.value 
  }

  onClickOutside( NavbarRef, () => {
    screenWidth.value <= 900 ? showNav.value = false : showNav.value
  }, { ignore: [NavBtnRef, searchBarRef] })

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

  const gotoRouting = (route) => {
    showNav.value = false
    router.push({ name: route })
  }

  const searchEngine = ref('')

  const searchList = computed(() => {
    return productStore.products.filter(product => {
      return product.title.toLowerCase().includes(searchEngine.value)
    })
  })

  const closeSearchList = () => {
   searchEngine.value = ''
   screenWidth.value <= 900 ? showNav.value = false : showNav.value
  }
  onClickOutside(searchBarRef , () => searchEngine.value = '' )
</script>

<style lang="scss" scoped>
  @import "@/styles/main";

  .nav-container {
    font-size: clamp(1rem, 5vw, 1.1rem);
    font-weight: 600;
    z-index: 2;

    background: darken($secoundary, 5);

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
      
      .brand {
        cursor: pointer;
        color: $primary;

        font-family: 'dancing script';
        font-size: clamp(2rem, 2.5vw, 2.5rem);
        font-style: italic;
      }

     .mobile-nav-btns {
      gap: 1rem;
      color: $primary;

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

      .links {
        color: $primary;
        font-size: 1.1em;
        text-underline-offset: 4px;

        &.router-link-exact-active {
          text-decoration: underline 2px;
        } 

        &:hover {
          text-decoration: underline 2px;
        }
      }

      @include screen-md {
        margin: 0;
        @include flexCenter(center, none, row);
      }

    }

    .account-btn,
    .cart-btn {
      display: none;

      color: $primary;
      padding: .8rem 1rem; 
      border-radius: 50%;

      color: $primary;

      font-size: 1em;
      font-family: $roboto;

      transition: all .15s;

      i {
        font-size: 1em;
        color: transparent;
       -webkit-text-stroke: 2px $primary; 
       text-decoration: none;
      }

      @include screen-md {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: .5rem;
      }
    }
  }

  .search-engine-wrapper {
    width: 100%;

    position: relative;


    @include screen-sm {
      display: flex;
      flex-direction: column;
      
      width: 400px;
    }

  }

  .search-bar {
    width: 100%;
    border-radius: 2rem;

    position: relative;
    color: $secoundary;
    overflow: hidden;
    background: $primary;

    input { 
     color: $text-light;
     padding: .8em 1em; 
     width: 100%;

     font-size: .9em;

     &:focus {
      background: lighten($secoundary, 40)
     }
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
      @include flexCenter(center, center, row);
    }
  }

  .search-product-list {
    position: absolute; 
    top: 170%;

    display: grid;
    grid-gap: 1rem;

    width: 100%;
    max-height: 80vh;

    background: rgba(255 255 255 / .8);
    backdrop-filter: blur(4px);
    border-radius: 4px;

    overflow-y: scroll;
    box-shadow: rgba(0 0 0 / .4);
    z-index: 1;
  }

  .search-product-list::-webkit-scrollbar {
    width: 0; 
  }
</style>

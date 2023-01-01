<template>

  <div class="cart-main-wrapper"
    v-if="!useCart.isEmpty">

    <CartList 
     :cartItems="useCart.cartItems"/>

    <PriceDetails 
     :cartItems="useCart.cartItems"/>
  </div>

    <section 
     v-if="useCart.isEmpty" 
     class="empty-indicator">

      <img src="/empty-cart.jpg">
      <h1>Your cart is empty!</h1>
    </section>
</template>

<script setup>
  import { watch } from 'vue'
  import PriceDetails from '@/components/Cart/PriceDetails.vue'
  import CartList from '@/components/Cart/CartList.vue'
  import { useCartStore } from '@/stores/cart'

  const useCart = useCartStore()
</script>

<style lang="scss" scoped>
  @import "@/styles/main";

  .cart-main-wrapper {
    max-width: 1250px;

    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));

    grid-gap: 2rem;
    padding: .7rem;

    margin: 1rem auto;
  }

  .empty-indicator {
    height: 100vh;
    width: 100vw;

    @include flexCenter(center, center, column);

    img {
      max-height: 20%;

      @include screen-sm {
        max-height: 40%;
      }
    }

    h1 {
      font-family: $work;
      font-size: 1.7rem;
      color: $error
    }
  }
</style>

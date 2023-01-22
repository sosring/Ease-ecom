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

      <img src="/empty.jpg">
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
    width: min(1250px, 100%);

    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));

    grid-gap: 2rem;

    margin: 0 auto;
    padding-top: 3rem;
  }

  .empty-indicator {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    @include flexCenter(center, center, column);

    img {
      width: min(90vw, 650px);
    }

    h1 {
      color: $secoundary;

      font-family: $raleway;
      font-size: clamp(1.2rem, 5vw,1.7rem)
    }
  }
</style>

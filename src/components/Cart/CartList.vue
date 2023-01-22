<template>

  <div class="cart-wrapper">
    <header>
      <span class="active">
       Carlist ...
      </span>
    </header>

    <section class="product-list-wrapper">

      <CartListItem 
       v-for="(product, index) in cartItems"
       :product="product"
       :index="index"/>

    </section>
  </div>

</template>

<script setup>
  import { ref } from 'vue'
  import CartListItem from '@/components/Cart/CartListItem.vue'

  const props = defineProps({
    cartItems: {
      type: Array
    }
  });
</script>

<style lang="scss" scoped>
  @import "@/styles/main";
  
  .cart-wrapper {
    border-radius: 4px;
    background: $primary;
    padding: 1rem;

   @include screen-sm {
    grid-column: 1 / span 2;
    margin-bottom: 5rem;
   }

    header {
     border-bottom: 2px $border solid;
     padding: 1rem 0;

      span {
        justify-content: start;
        cursor: pointer;
        
        font-family: $raleway;
        font-weight: 800; 
        font-size: clamp(2.4rem, 5vw, 4rem); 

        color: $text-light;

        backdrop-filter: blur(4px);
        border-radius: 4px;
      }
   }
 }

 .product-list-wrapper {
   display: grid;
   grid-gap: 1rem;
   margin: 1rem 0;
 }
</style>

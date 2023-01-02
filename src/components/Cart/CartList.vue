<template>

  <div class="cart-wrapper">
    <header>
      <span class="active">
       Carlist
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
    background: $bg-light;
    padding: .5rem;

   @include screen-sm {
    grid-column: 1 / span 2;
    margin-bottom: 5rem;
   }

    header {

      span {
        padding: 1rem;
        justify-content: center;
        cursor: pointer;
        
        font-family: $work;
        font-weight: 800; 
        font-size: clamp(1.3rem, 5vw, 1.7rem); 

        background: rgb(102 126 234 / .6);
        color: $white;

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

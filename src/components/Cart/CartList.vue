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
        font-size: 1.1rem; 
        font-weight: 700; 

        background: lighten($indigo, 10);
        border-radius: 4px;
        color: $white;
      }
   }
 }

 .product-list-wrapper {
   display: grid;
   grid-gap: 1rem;
   margin: 1rem 0;
   padding: .5rem;
 }
</style>

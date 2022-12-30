<template>

  <div class="cart-product-wrapper">
    <header>
      <span @click="isCartList = true" 
       :class="{ 'active': isCartList }">
       Carlist
      </span>

      <span @click="isCartList = false"
       :class="{ 'active': !isCartList }">
       Wishlist
      </span>
    </header>
  </div>

</template>

<script setup>
  import { ref } from 'vue'
  import Carousel from '@/components/Carousel/Carousel.vue'

  const props = defineProps({
    cartlist: {
      type: Array
    }
  });

  const isCartList = ref(true)
</script>

<style lang="scss" scoped>
  @import "@/styles/main";
  
  .cart-product-wrapper {

    box-shadow: 0 2px 4px 2px rgba(0,0,0,0.2);
    border-radius: 4px;

   @include screen-md {
    grid-column: 1 / span 2;
   }


    header {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 1rem;
    }

      span {
        padding: 1rem;
        justify-content: center;
        cursor: pointer;
        
        font-family: $work;
        font-size: 1.1rem; 
        font-weight: 500; 
      }

      .active {
        border-bottom: $brown 2px solid;
        color: $brown;
      }
   }
</style>

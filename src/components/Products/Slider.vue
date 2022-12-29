<template>


  <div class="slider-container">

   <Card v-for="product in products"
    :product="product" />
  </div>
</template>

<script setup>
  import { ref, computed } from 'vue' 
  import Card from '@/components/Products/Card.vue'
  
  const props = defineProps({
    products: {
      type: Array
    }
  });
</script>

<style lang="scss" scoped>
  @import '@/styles/main';  

  .slider-container {
    margin: 2rem auto;

    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
    padding: 0 .5rem;

    overflow-x: scroll;
    scroll-snap-type: x mandatory;

    -ms-overflow-style: none;  
    scrollbar-width: none;  
  }
</style>

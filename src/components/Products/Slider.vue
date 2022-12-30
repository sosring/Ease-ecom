<template>

  <div class="slider-container">

   <Card v-for="product in products"
    :product="product"/>
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

    display: grid;
    grid-template-columns: repeat( auto-fit, minmax(350px, 1fr) );

    padding: 0 .5rem;
    grid-gap: 2rem;

    -ms-overflow-style: none;  
    scrollbar-width: none;  
  }
</style>

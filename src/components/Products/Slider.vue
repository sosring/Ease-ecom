<template>

 <section class="slider-wrapper">
  <h1>{{ heading }}</h1>

  <div class="slider-container">

   <Card v-for="product in products"
    :product="product"/>
  </div>

 </section>
</template>

<script setup>
  import { ref, computed } from 'vue' 
  import Card from '@/components/Products/Card.vue'
  
  const props = defineProps({
    products: {
      type: Array
    },
    heading: {
      type: String,
      default: 'ease .' 
    }
  });
</script>

<style lang="scss" scoped>
  @import '@/styles/main';  

  .slider-wrapper {
    padding: 1rem;
    margin: 1rem 0;

    color: $text-light;

    h1 {
      font-family: $raleway;
      color: inherit;

      font-size: clamp(2rem, 5vw, 4rem);
      margin-bottom: 2rem;
    }
  }

  .slider-container {

    display: grid;
    grid-template-columns: repeat( auto-fit, minmax(330px, 1fr) );

    grid-gap: 1rem;

    -ms-overflow-style: none;  
    scrollbar-width: none;  
  }
</style>

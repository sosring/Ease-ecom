<template>

  <div class="slider-container">

    <Card v-for="product in products"
     :product="product"/>
  </div>
</template>

<script setup>
  import { computed } from 'vue' 
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
    overflow: scroll;
    gap: 1rem;

    height: 100%;
    width: 100%;
  }
</style>

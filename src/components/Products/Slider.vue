<template>

  <div class="slider-container"
   v-for="product in products">
    
    <div></div>
    <div></div>
    <div></div>
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
    height: 400px;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));

    div {
     background: black
    }
  }
</style>

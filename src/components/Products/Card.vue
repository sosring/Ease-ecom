<template>

  <div class="product-card-cont">
  </div>
</template>

<script setup>
  import { computed } from 'vue'
    
  const props = defineProps({
    product: {
      type: Object
    }
  });
</script>

<style lang="scss" scoped>
  @import '@/styles/main';  

  .product-card-cont {
  }
</style>

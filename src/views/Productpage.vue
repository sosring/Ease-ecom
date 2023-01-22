<template>

  <section class="product-page-wrapper">

  <div class="product-sorter">
  </div>

   <div class="product-slides">
    <Slider 
     class="products"
     :products="productStore.products"/>
   </div>

  </section>
</template>

<script setup>
  import { useProductStore } from '@/stores/product'
  import Slider from '@/components/Products/Slider.vue'

  const productStore = useProductStore()
</script>

<style lang="scss" scoped>
  @import '@/styles/main';

  .product-page-wrapper {
    padding: .8rem;
    margin-bottom: 4rem;
  }

  .product-sorter {
    height: 6rem;
    border-bottom: 2px $border solid; 
  }
</style>

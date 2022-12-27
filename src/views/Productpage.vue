<template>

  <section class="product-page-wrapper">

    {{ productStore.products }}
  </section>
</template>

<script setup>
  import { useProductStore } from '@/stores/product'

  const productStore = useProductStore()
</script>

<style lang="scss" scoped>
  @import '@/styles/main';

  .product-page-wrapper {
    padding: .8rem;
  }
</style>

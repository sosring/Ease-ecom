<template>

  <div class="product-detail-wrraper">
    {{product}}
  </div>
</template>

<script setup>
  import { computed } from 'vue'
  import { useProductStore } from '@/stores/product'

  const productStore = useProductStore() 

  const props = defineProps(['id']);

  const product = computed(() => {
    return productStore.products.filter(product => product.id === props.id )
  })
</script>

<style lang="scss" scoped>
 @import '@/styles/main';

 .product-detail-wrraper {
   margin-top: 3rem;
 }
</style>

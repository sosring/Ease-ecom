<template>

  <div class="product-detail-wrraper">
    {{product}}

    <button @click="useCart.addToCart(product.id)">
     add
    </button>
  </div>
</template>

<script setup>
  import { computed } from 'vue'
  import { useProductStore } from '@/stores/product'
  import { useCartStore } from '@/stores/cart'

  const productStore = useProductStore() 
  const useCart = useCartStore()

  const props = defineProps(['id']);

  const product = computed(() => {
    return productStore.products.filter(product => product.id === props.id )[0]
  })
</script>

<style lang="scss" scoped>
 @import '@/styles/main';

 .product-detail-wrraper {
   margin-top: 3rem;
 }
</style>

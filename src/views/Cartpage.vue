<template>

  <div class="cart-main-wrapper">
    <CartList 
     :cartlist="productStore.products"/>

    <PriceDetails 
     :cartDetails="productStore.products"/>
  </div>
</template>

<script setup>
  import PriceDetails from '@/components/Cart/PriceDetails.vue'
  import CartList from '@/components/Cart/CartList.vue'
  import { useProductStore } from '@/stores/product'

  const productStore = useProductStore()
</script>

<style lang="scss" scoped>
  @import "@/styles/main";

  .cart-main-wrapper {
    max-width: 1450px;
    margin: 2rem auto;

    display: grid;
    padding: .7rem;
    grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));

    grid-gap: 2rem;
  }
</style>

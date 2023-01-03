<template>

  <span @click="showProductDetails"
   class="main-wrapper">
    <div class="content-img-wrapper">
      <img :src="`/assets/${product.images[0]}.jpg`">
    </div>
     
     <span class="content-desc">
      <h3 v-html="product.title.slice(0, 15)"></h3>

       <span class="product-price">
        <p :class="{ 'discounted': product.discount }">
         ₹{{ product.price }}
        </p>

        <p v-if="product.discount"
         class="success">
         ₹{{ discounted }}
        </p>
       </span>
     </span>
  </span>

</template>

<script setup>
  import { ref } from 'vue'
  import { discountValuation } from '@/composables/discount'
  import { useRouter } from 'vue-router'

  const router = useRouter()

  const { discountedPrice } = discountValuation() 
  const discounted = discountedPrice(props.product.discount, props.product.price)

  const props = defineProps({
    product: {
      type: Object 
    }
  });

  const emits = defineEmits(['closeSearchList'])

  const showProductDetails = () => {
    router.push({ name: 'productDetails', params: { id: props.product.id } })
  }
</script>

<style lang="scss" scoped>
  @import '@/styles/main';

  .main-wrapper {
    padding: .5rem .7rem;

    height: 120px;
    width: 100%;

    font-size: 1.1rem;
    color: $text-light;

    gap: 1rem;
  }

  .content-img-wrapper {
    position: relative;
    height: 100%;
    width: 40%;

    img {
      width: 100%;
      height: 100%;

      object-fit: cover;
      object-position: top
    }
  }

  .content-desc {
    flex-direction: column;
    align-items: start;
    padding: .5rem;

    gap: 1rem;
    
    .product-price {
      gap: 1rem;
      font-size: .9em;
    }
  }
</style>

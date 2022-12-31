<template>

  <div class="product-card-cont"
   :key="product.id" 
   :id="product.id">

   <div class="image-cont">
    <img :src="`/assets/${product.images[1]}.jpg`"
     :alt="product.title">

    <button 
     @click="showQuickView = !showQuickView"
     class="overview-btn">
     Quick view
    </button>
   </div>

   <div class="product-details">
    <span>
     <h3 class="uppercase" v-html="product.title.slice(0, 15)"></h3>

      <span class="product-price">
       <p :class="{ 'discounted': product.discount }">
        ₹{{ formatting(product.price) }}
       </p>

       <p v-if="product.discount"
        class="success">
        ₹{{ formatting(discounted) }}
       </p>
      </span>
    </span>

     <p class="capitalize" v-html="product.brand"></p>
   </div>
  </div>

  <Quickview 
   v-if="showQuickView"
   v-model:condition="showQuickView"
   :product="product"
   :discountedPrice="discounted"/>

</template>

<script setup>
  import { ref, computed } from 'vue'
  import Quickview from '@/components/Products/Quickview.vue'
  import { discountValuation } from '@/composables/discount'
  import { priceFormatter } from '@/composables/priceFormatter'

  const { discountedPrice } = discountValuation() 
  const discounted = discountedPrice(props.product.discount, props.product.price)

  const { formatting } = priceFormatter()
    
  const props = defineProps({
    product: {
      type: Object
    }
  });

  const showQuickView = ref(false)
</script>

<style lang="scss" scoped>
  @import '@/styles/main';  

  .product-card-cont {
    min-height: 450px;
    width: 100%;

    flex: none;

    line-height: 1.3;
    color: $text-light;

    font-family: $work;
    font-weight: 400;

    .image-cont {
      height: 90%;
      width: 100%;

      position: relative;
      border-radius: 4px;

      img {
        height: 100%;
        width: 100%;

        object-fit: cover;
        position: absolute;
        object-position: top;
      }

      .overview-btn {
        @include screen-md { opacity: 0; }

        font-size: .9rem;

        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);

        background-color: rgba(255, 255, 255, 0.6);
        backdrop-filter: blur(5px);

        padding: .7rem;
        transition: opacity .2s ease-out , background-color .15s ease;


        &:hover {
          background-color: rgba(255, 255, 255, 0.8);
        }
      }

      &:hover .overview-btn {
        opacity: 1;
      }
   }

  .product-details {
     @include flexCenter(none, center, column);

     padding: .5rem 0;

     span {
      justify-content: space-between;
      
      h3 {
        color: $text-dark;
        font-family: $oswald;
      }
     }

     @include screen-sm {
       font-size: .8rem;

       p {
        font-size: 1rem;
       }

       h3 {
        font-size: 1.1rem;
       }
     }

    .product-price {
      gap: .5rem;
      font-family: monospace;
    }
   }
 }
</style>

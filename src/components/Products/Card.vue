<template>

  <div @click="$router.push({ name: 'productDetails',
   params: { id: product.id }})"
   class="product-card-cont"
   :key="product.id" 
   :id="product.id">

   <div class="image-cont">
    <img :src="`/assets/${product.images[1]}.jpg`"
     :alt="product.title">

     <button class="quickview-btn">
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

</template>

<script setup>
  import { ref, onMounted, computed } from 'vue'
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

    margin-bottom: 2rem;
    flex: none;

    line-height: 1.3;
    color: $text-light;

    font-family: $raleway;
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

     .quickview-btn {
       opacity: 0;

       position: absolute;
       top: 50%;
       left: 50%;
       transform: translate(-50%, -50%);
       padding: .7rem 1rem; 

       background: rgba(255 255 255 / .8);
       font-size: 1.1rem;

       backdrop-filter: blur(2px);
       z-index: 1;

       transition: all .3s ease-in; 
     }
     
      @include screen-md {
       &:hover .quickview-btn {
         opacity: 1;
       }
      }
   }


  .product-details {
     @include flexCenter(none, center, column);

     padding: .5rem 0;
     font-size: clamp(1rem, 5vw, 1.4rem);

     span {
      justify-content: space-between;
      
      h3 {
        color: $text-dark;
        font-family: $oswald;
        font-size: 1em;
      }

     }
     p { font-size: .9em; }

    .product-price {
      gap: 1rem;
      font-family: monospace;
      font-size: .9em; 
    }
   }
 }
</style>

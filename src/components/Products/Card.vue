<template>

  <div class="product-card-cont"
   :key="product.id" 
   :id="product.id">

   <div class="image-cont">
    <img :src="`/assets/${product.images[1]}.png`">

    <button 
     @click="showQuickView = !showQuickView"
     class="overview-btn">
     Quick view
    </button>
   </div>

   <div class="product-details">
    <span>
     <h3 class="uppercase">{{ product.title }}</h3>

    <span class="product-price">
     <p :class="{ 'discounted': product.discount }">
      ₹{{ product.price }}
     </p>

     <p v-if="product.discount">
      ₹{{ discountedPrice }}
     </p>
    </span>
    </span>

     <p class="capitalize">{{ product.brand }}</p>
   </div>
  </div>

  <Quickview 
   v-if="showQuickView"
   v-model:condition="showQuickView"
   :product="product"
   :discountedPrice="discountedPrice"/>

</template>

<script setup>
  import { ref, computed } from 'vue'
  import Quickview from '@/components/Products/Quickview.vue'
    
  const props = defineProps({
    product: {
      type: Object
    }
  });

  const showQuickView = ref(false)

  const discountedPrice = computed(() => { 

    if(props.product.discount !== null){
      const discount = Number(props.product.price / props.product.discount)

      return Number(props.product.price - discount)
    }
  })

</script>

<style lang="scss" scoped>
  @import '@/styles/main';  

  .product-card-cont {
    min-height: 450px;
    width: 100%;

    @include screen-base {
      height: 650px;
    }

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
        position: absolute
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
      color: darken($brown, 20)
    }
   }
 }
</style>

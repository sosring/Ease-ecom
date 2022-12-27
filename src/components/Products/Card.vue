<template>

  <div class="product-card-cont">

   <div class="image-cont" v-auto-animate>
    <img :src="`/assets/${product.images[1]}.png`">

    <button class="overview-btn">
     Quick view
    </button>
   </div>


   <div class="product-details">
     <h3>{{ product.title }}</h3>
     <p>{{ product.brand }}</p>

    <span class="product-price">
     <p :class="{ 'discounted': discounted }">
      ₹ {{ product.price }}
     </p>

     <p v-if="discounted">
      ₹ {{ discountedPrice }}
     </p>
    </span>
   </div>
  </div>
</template>

<script setup>
  import { ref, computed } from 'vue'
  import { vAutoAnimate } from '@formkit/auto-animate'
    
  const props = defineProps({
    product: {
      type: Object
    }
  });

  const discounted = ref(false)

  const discountedPrice = computed(() => {

    if(props.product.discount !== null){
      const discount = Number(props.product.price / props.product.discount)
      discounted.value = true

      return Number(props.product.price - discount)
    }
  })
</script>

<style lang="scss" scoped>
  @import '@/styles/main';  

  .product-card-cont {
    height: 550px;
    width: 375px;
    flex: none;
  
   @include screen-md {
     height: 650px;
     width: 450px;
   }

    line-height: 1.3;
    color: $text-light;

    font-family: $work;
    font-weight: 400;
    margin: 0 auto;

    .image-cont {
      height: 80%;
      width: 100%;

      position: relative;

      img {
        height: 100%;
        width: 100%;

        object-fit: cover;
        position: absolute
      }

      .overview-btn {
        opacity: 0;

        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);

        background-color: rgba(255, 255, 255, 0.6);
        backdrop-filter: blur(5px);

        padding: .7rem;
        font-size: 18px;
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
     height: 20%;
     @include flexCenter(none, center, column);

     padding: .7rem;
     font-family: monospace;

    .product-price {
      gap: .5rem;
      letter-spacing: 1px;
    }
   }
 }
</style>

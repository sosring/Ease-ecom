<template>

  <section class="quickview-wrapper"
   :key="product.id">

    <div ref="overviewRef"
     class="quick-view-cont" 
     v-motion-slide-bottom>

      <i @click="$emit('update:condition', false )"
       class="close fas fa-times">
      </i>

     <Carousel 
      :images="product.images"/>

      <div class="product-content">
       <div class="contents">
        <h1 v-html="product.title"></h1>
        <h2 v-html="product.brand"></h2>
        
        <span class="price">
          <p v-if="discountedPrice"> ₹ {{ discountedPrice }} </p>
          <p :class="{ 'discounted': product.discount }">
           ₹ {{ product.price }}
          </p>
        </span>

        <p v-html="product.desc" class="desc"></p>
       </div>

        <span class="btn-container">
          <button class="cart-btn btns">
           ADD TO CART
          </button>
        </span>
      </div>
    </div>
  </section>

</template>

<script setup>
  import { ref, onMounted } from 'vue'
  import Carousel from '@/components/Carousel/Carousel.vue'
  import { onClickOutside } from '@vueuse/core'


  const emits = defineEmits(['update:condition'])

  const props = defineProps({
    product: {
      type: Object
    },
    condition: {
      type: Boolean
    },
    discountedPrice: {
      type: String
    }
  });

  const overviewRef = ref('')

  onClickOutside(overviewRef, () => emits('update:condition', false))
  
  const handleKey = e => {
    if(e.key === 'Escape'){
      emits('update:condition', false)
    }
  }

  onMounted(() => document.addEventListener('keyup', handleKey))
</script>

<style lang="scss" scoped>
  @import '@/styles/main';

  .quickview-wrapper {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    height: 100vh;
    width: 100vw;
    background: rgba(0,0,0,0.4);

    @include flexCenter(center, center, row);
    z-index: 1;
  }

  .quick-view-cont {
    height: 80%;
    width: 90%;
    position: relative;

    background: $bg-light;
    border-radius: 2px;
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2),
    0 6px 20px 0 rgba(0,0,0,0.19);
    padding: .5rem;

    display: grid;
    grid-template-rows: repeat(2, 1fr);

    @include screen-md {
      height: 70%;
      width: 90%;
      grid-template-columns: repeat(2, 1fr);
      grid-template-rows: none;
    }

    @include screen-xl {
      width: 70%;
    }

    .close {
      position: absolute;
      right: 4%;
      top: 2%;
      font-size: 1.5rem;
      color: $text-light;
      z-index: 1;

      @include screen-md {
        right: 1%;
      }
    }
  }

  .product-content {
    padding: 1rem;
    display: grid;
    font-size: 14px;
      
    @include screen-sm {
      font-size: 16px;
    }

    @include screen-md {
      font-size: 18px;
    }

    .contents {
      line-height: 2rem;

      @include screen-md {
        line-height: 3rem;
      }

      h1 {
        font-size: 1.4em;
        font-family: $oswald;
        letter-spacing: 2px;
      }

      h2 {
        color: $text-light;
      }

      span {
        gap: 1rem;
      }

      .price {
        font-family: monospace;
      }

      .desc {
        line-height: 1.5;
      }
    }

   .btn-container {

    .cart-btn {
      background: #1d1d1d;
      color: $bg-light;
      width: 100%;
    }
   }
  }
</style>

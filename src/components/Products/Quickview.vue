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

        <h1 v-html="product.title.slice(0, 10)" class="uppercase"></h1>
        <h2 v-html="product.brand"></h2>
        
        <span class="product-price">
         <span>
          <p :class="{ 'discounted': product.discount }">
           ₹{{ formatting(product.price) }} 
          </p>

          <p v-if="discountedPrice" 
           class="success">
           ₹{{ formatting(discountedPrice) }} 
          </p>
         </span>

          <h3 v-if="discountedPrice">
            {{product.discount}}% discount 
          </h3>
        </span>

        <p v-html="product.desc.slice(0, 200)" class="desc"></p>
       </div>

        <span class="btn-container">
          <button 
           @click="$router.push({ name: 'productDetails', params: { id: product.id }})"
           :disabled="product.stock <= 0"
           :class="product.stock <= 0 ? 'disabled' : 'cart-btn'" 
           class="btns">
           ADD TO CART
          </button>
        </span>

        <p class="stock-tracker">
          {{ stockUpdates(product.stock) }}
        </p>

      </div>
    </div>
  </section>

</template>

<script setup>
  import { ref, reactive, computed, onMounted } from 'vue'
  import Carousel from '@/components/Carousel/Carousel.vue'
  import { onClickOutside } from '@vueuse/core'
  import { trackProductStock } from '@/composables/stock'
  import { priceFormatter } from '@/composables/priceFormatter'

  const { formatting } = priceFormatter()
  const { stockUpdates } = trackProductStock()

  const emits = defineEmits(['update:condition'])

  const props = defineProps({
    product: {
      type: Object
    },
    condition: {
      type: Boolean
    },
    discountedPrice: {
      type: Number 
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
      font-size: clamp(1.7rem, 5vw, 2rem);
      z-index: 1;
      color: $text-light;

      @include screen-md {
        right: 1%;
      }
    }
  }

  .product-content {
    padding: 1rem;
    display: grid;

    font-size: clamp(1.3rem, 5vw, 1.7rem);
      
    @include screen-sm {
      padding: 2rem;
    }

    .contents {
      line-height: clamp(1.7rem, 5vw, 3rem);

      h1 {
        font-size: 1em;
        font-family: $oswald;
        letter-spacing: 2px;
        color: $text-dark;
      }

      h2 {
        color: $text-light;
        font-size: .9em;
      }

      span {
        gap: 1rem;
      }

      .product-price {
        font-family: monospace;
        justify-content: space-between;

        p { font-size: .8em; }

        h3 { 
         color: $text-light;
         font-family: $roboto;
         font-size: .9em
        }
      }

      .desc {
        line-height: 1.3;
        font-size: .8em;
        margin-top: .5rem;
      }
    }

   .btn-container {
      margin-top: 1rem;
    
      button {
        width: 100%
      }

    .cart-btn {
      background: $black;
      color: $bg-light;
      font-size: .9em
    }
   }
 }

  .stock-tracker {
    text-align: center;
    font-size: .9em;

    font-weight: 900;
    font-family: $source;
    color: $error
  }

  .image-scaler {
    padding: 1rem;
  }
</style>

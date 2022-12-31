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
        <h1 v-html="product.title" class="uppercase"></h1>
        <h2 v-html="product.brand"></h2>
        
        <span class="price">
         <span>
          <p v-if="discountedPrice"> ₹{{ discountedPrice }} </p>

          <p :class="{ 'discounted': product.discount }">
           ₹{{ product.price }} 
          </p>
         </span>

          <h3 v-if="discountedPrice">
            {{product.discount}}% discount 
          </h3>
        </span>

        <p v-html="product.desc" class="desc"></p>
       </div>

        <span class="btn-container">
          <button 
           :class="product.stock >= 0 ? 'cart-btn' : 'disabled'" 
           class="btns">
           ADD TO CART
          </button>
        </span>

        <p class="stock-tracker">
          {{ stockStatus }}
        </p>

      </div>
    </div>
  </section>

</template>

<script setup>
  import { ref, reactive, computed, onMounted } from 'vue'
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

  const stockStatus = computed(() => {
    if(props.product.stock < 30) {
      return `HURRY UP ONlY ${props.product.stock} OF THEM ARE LEFT`
    }
    else if(props.product.stock === 0) {
      return `OUT OF STOCK!`
    }
    else { return ''}
  })

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
      padding: 2rem;
    }

    @include screen-md {
      font-size: 18px;
    }

    .contents {
      line-height: 1.7;

      @include screen-md {
        line-height: 2.5;
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
        justify-content: space-between;

        p { color: darken($brown, 20); }

        h3 { 
         color: $text-light;
         font-family: $roboto;
        }
      }

      .desc {
        line-height: 1.5;
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
    }
   }
  }

  .stock-tracker {
    text-align: center;

    font-weight: 700;
    font-family: $work;
    color: $error
  }

  .image-scaler {
    padding: 1rem;
  }
</style>

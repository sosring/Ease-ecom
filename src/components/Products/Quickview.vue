<template>

  <section class="quickview-wrapper"
   :key="product.id">

    <div class="quick-view-cont"
     v-motion-slide-visible-bottom>

      <i @click="$emit('update:condition', false )"
       class="close fas fa-times">
      </i>

      <div class="product-images">
       <span v-for="image in product.images">
        <img :src="`/assets/${image}.png`">
       </span>
      </div>

      <div class="product-content">
       <div class="contents">
        <h1 v-html="product.title"></h1>
        <h2 v-html="product.brand"></h2>
        
        <span class="price">
          <p> ₹ {{ discountedPrice }} </p>
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

  const emits = defineEmits(['update:emits'])
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
    height: 60%;
    width: 70%;

    background: $bg-light;
    border-radius: 2px;
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2),
    0 6px 20px 0 rgba(0,0,0,0.19);
    padding: 1rem;

    display: grid;
    grid-template-columns: repeat(2, 1fr);

    .close {
      position: absolute;
      right: 2%;
      top: 4%;
      font-size: 1.2rem;
    }
  }

  .product-images {
    display: flex;
    overflow-x: scroll;
    gap: .5rem;

    span {
      flex: none;
      height: 70%;
      width: 320px;
      background: black;

      position: relative;

      img {
       position: absolute;
       object-fit: cover;
        height: 100%;
        width: 100%;
      }
    }
  }

  .product-content {
    padding: 1rem;
    display: grid;

    .contents {
      line-height: 3rem;

      h1 {
        font-size: 1.4rem;
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
        line-height: 1.4;
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

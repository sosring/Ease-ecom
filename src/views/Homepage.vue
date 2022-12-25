<template>

  <section class="product-banner">
    <div class="banner-tag"
     v-motion-slide-visible-once-bottom>
      <h1>Take the stress <br>
      out of fashion.</h1> <br>

      <p>Best fashion deals with ease.</p><br>

      <button class="product-btn btns">
       View products
      </button> 
    </div>
  </section>

  <section class="product-slider">

    <h3>Take off your shirt!</h3> 
  </section>
</template>

<script setup>
  import { ref, onMounted } from 'vue'
  import { useProductStore } from '@/stores/product'

  const productStore = useProductStore() 
</script>

<style lang="scss" scoped>
  @import '@/styles/main';

  .product-banner {
    min-height: 450px;
    background: url('/assets/banner01.png')  no-repeat center;
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: cover;

    @include flexCenter(center, center, row);

    @include screen-sm {
      min-height: 650px;
    }
  }

  .banner-tag {
    color: $pink;
    z-index: 1;

    text-align: center;
    padding: 2rem;
    font-size: 24px;
    @include screen-md { font-size: 28px; }
    @include screen-md { font-size: 40px; }

    h1, p {
      text-shadow: 2px 7px 5px rgba(0,0,0,0.3), 
      0px -4px 10px rgba(255,255,255,0.3);
    }

    h1 {
      @include fontStyle($source, 1.5em) 
    }

    p {
      @include fontStyle('arial', 1.1em);
      letter-spacing: 3px;
    }

    .product-btn {
      color: $pink;
      border: $pink 1px solid; 
      font-size: .9rem;

      background-color: rgba(0, 0, 0, 0.2);
      -webkit-backdrop-filter: blur(5px);
      backdrop-filter: blur(5px);

      &:hover {
        background-color: rgba(0, 0, 0, 0.4);
      }

      padding: .9rem 1rem; 
      border-radius: 0;
    }
  }
</style>

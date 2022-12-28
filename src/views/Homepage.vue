<template>

  <div class="product-banner">
    <div class="banner-tag" v-motion-slide-bottom>

      <h1>Take the stress <br>
      out of fashion.</h1> <br>

      <p>Best fashion deals with ease.</p><br>

      <button
       @click="$router.push({ name: 'products' })"
       class="product-btn btns">
       View products
      </button> 
    </div>
  </div>

  <Slider 
   :products="menFiltered"/>

  <div class="about">
   <div class="about-title">
      <h3>MADE FOR THE <br> MORDERN CLOTHINGS</h3>
   </div>

   <div class="about-desc">
    <p> Clothes are meant to be fun, but sometimes 
    it can be difficult to find something that is both 
    flattering and trendy. In this short story, a young woman 
    finds the perfect outfit to add some spice to her life.
    </p>
   </div> 
  </div>

  <footer class="homepage-footer">
  </footer>

</template>

<script setup>
  import { ref, computed } from 'vue'
  import { useProductStore } from '@/stores/product'
  import { vAutoAnimate } from '@formkit/auto-animate'
  import Slider from '@/components/Products/Slider.vue'

  const productStore = useProductStore() 

  const menFiltered = computed(() => {
    return productStore.products.filter(product => product.gender === 'men').slice(0, 4)
  })
</script>

<style lang="scss" scoped>
  @import '@/styles/main';

  .product-banner {
    min-height: 450px;
    background: url('assets/banner01.png')  no-repeat center;
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

  .product-slider {
    display: flex;
    overflow: scroll;
  }

  .about {
    max-width: 1450px;
    font-weight: 500;
    font-size: 16px;

    display: grid;
    gap: 1rem;
    
    padding: 2rem 1rem;
    margin: .5rem auto;

    .about-title {
      @include fontStyle($roboto, 1.2em);
      text-align: center;
      letter-spacing: 3px;
    }
    
    .about-desc {
      line-height: 1.2;
      @include fontStyle($work, .8em);
    }

    @include screen-base {
      font-size: 18px;

      grid-template-columns: repeat(2, 1fr);

      div {
        @include flexCenter(center, center, row)
      }
      
      .about-title {
        border-right: 2px $border solid;
      }
    }

    @include screen-md {
      font-size: 22px;
      height: 200px;
    }
  }

  .homepage-footer {
    height: 500px
  }
</style>

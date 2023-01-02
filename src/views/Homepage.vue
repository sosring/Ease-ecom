<template>

  <div class="hero-container">
    <div class="banner-container"
     v-motion-slide-bottom>

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
   heading="Men Clothes ."
   :products="menFiltered"/>

  <article class="about">
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
  </article>

  <Slider 
   heading="Women Clothes ."
   :products="womenFiltered"/>

  <footer class="homepage-footer">
  </footer>

</template>

<script setup>
  import { ref, computed, onMounted } from 'vue'
  import { useProductStore } from '@/stores/product'
  import { vAutoAnimate } from '@formkit/auto-animate'
  import Slider from '@/components/Products/Slider.vue'
  import BackToTop from 'vue-backtotop'

  const productStore = useProductStore() 

  const menFiltered = computed(() => {
    const maped = productStore.products.filter(product => product.gender === 'men')
    return maped.filter(product => product.discount !== null)
  })

  const womenFiltered = computed(() => {
    const maped = productStore.products.filter(product => product.gender === 'women')
    return maped.filter(product => product.discount !== null)
  })
</script>

<style lang="scss" scoped>
  @import '@/styles/main';

  .hero-container {
    min-height: 450px;

    background: 
    linear-gradient( rgba(0 0 0 / .2), rgba(0 0 0 / .3)),
    url('/assets/banner01.jpg')  no-repeat center;

    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: cover;

    @include flexCenter(center, center, row);

    @include screen-sm {
      min-height: 650px;
    }
  }

  .banner-container {
    color: $pink;
    z-index: 1;

    text-align: center;
    padding: 2rem;

    font-size: clamp(1.3rem, 5vw, 2.4rem);

    h1, p {
      text-shadow: 2px 7px 5px rgba(0,0,0,0.3), 
      0px -4px 10px rgba(255,255,255,0.3);
    }

    h1 {
      @include fontStyle($source, 1.5em) 
    }

    p {
      @include fontStyle($source, 1.1em);
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
    min-height: 200px;

    font-weight: 500;
    font-size: clamp(1rem, 5vw, 1.2rem);

    margin: .5rem auto;

    display: grid;
    gap: 1rem;
    
    padding: 2rem 1rem;
    text-align: center;

    .about-title {
      @include fontStyle($roboto, 1.2em);
      letter-spacing: 3px;
    }
    
    .about-desc {
      line-height: 1.2;
      @include fontStyle($work, .8em);
    }

    @include screen-md {
      text-align: left;

      grid-template-columns: repeat(2, 1fr);

      div {
        @include flexCenter(center, center, row)
      }
      
      .about-title {
        border-right: 2px $border solid;
      }
    }
  }

  .homepage-footer {
    height: 500px
  }
</style>

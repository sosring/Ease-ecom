<template>

  <div class="hero-container">

    <div class="banner-container">
      <h1>
        Take the stress <br>
        out of fashion.
      </h1> <br>
      <p>Best fashion deals with ease.</p><br>

      <Button
       @click="$router.push({ name: 'products' })"
       class="product-btn btns">
       View products
      </Button> 
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

  const productStore = useProductStore() 

  const menFiltered = computed(() => {
    const maped = productStore.products.filter(product => product.gender === 'men')
    return maped.filter(product => product.discount !== null).slice(0, 2)
  })

  const womenFiltered = computed(() => {
    const maped = productStore.products.filter(product => product.gender === 'women')
    return maped.filter(product => product.discount !== null)
  })

  import gsap from 'gsap'

  onMounted(() => {
    gsap.from('.banner-container', {
      y: 120,
      opacity: 0,
      duration: .7
    })
  })
</script>

<style lang="scss" scoped>
  @import '@/styles/main';

  .hero-container {
    min-height: 450px;

    background: 
    linear-gradient( rgba(0 0 0 / .2), rgba(0 0 0 / .3)),
    url('/assets/banner.jpg')  no-repeat center;

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
    color: $primary;
    z-index: 1;

    text-align: center;
    padding: 2rem;

    font-size: clamp(1.5rem, 5vw, 3rem);

    h1, p {
      text-shadow: 2px 7px 5px rgba(0,0,0,0.3), 
      0px -4px 10px rgba(255,255,255,0.3);
    }

    h1 {
      @include fontStyle($raleway, 1.5em) 
    }

    p {
      @include fontStyle($raleway, 1.1em);
      letter-spacing: 3px;
    }

    .product-btn {
      color: $primary;
      border: $primary 1px solid; 
      font-size: .9rem;

      background-color: rgba( 255 255 255 / .2);
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

    font-weight: 700;
    font-size: clamp(1rem, 5vw, 1.4rem);
    line-height: 1.2;

    margin: .5rem auto;

    display: grid;
    gap: 1rem;
    
    padding: 2rem 1rem;
    text-align: center;

    .about-title {
      font-size: 1.2em;
      letter-spacing: 3px;
      border-bottom: 2px $border solid;
    }
    
    .about-desc {
      color: $text-light;
      font-size: .9em;
    }

    @include screen-md {
      text-align: left;

      grid-template-columns: repeat(2, 1fr);

      div {
        @include flexCenter(center, center, row)
      }
      
      .about-title {
        border-right: 2px $border solid;
        border-bottom: none;
      }
    }
  }

  .homepage-footer {
    height: 500px
  }
</style>

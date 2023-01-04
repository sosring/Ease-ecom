<template>

  <div class="product-detail-wrraper">

   <section class="product-image">
    <div class="img-wrapper">
     <Carousel 
      :images="product.images"
      v-model:currentSlide="currentSlide"/>
    </div>

    <span class="image-slider">
      <div v-for="(image, index) in product.images"
       class="img-wrapper">

        <img @mouseover="changeSlide(index)"
         :class="{ 'notActive': index !== currentSlide}"
         :src="`/assets/${image}.jpg`">
      </div>
    </span>
   </section>

   <section class="product-content">
    <div class="content-heading">
     <h1 v-html="product.title" class="capitalize"></h1>
     <h3 v-html="product.brand"></h3>

      <span class="product-price">
       <span>
        <p :class="{ 'discounted': product.discount }">
         ₹{{ formatting(product.price) }} 
        </p>

        <p v-if="discounted" 
         class="success">
         ₹{{ formatting(discounted) }} 
        </p>
       </span>

        <p v-if="discounted">
          {{ product.discount }}% discount 
        </p>
      </span>
    </div>


    <div class="content-desc">
      <p v-html="product.desc"></p>
    </div>

    <p class="stock-tracker">
      {{ stockUpdates(product.stock) }}
    </p>

    <span class="btn-span-wrapper">

      <button class="order btns">
       Order
      </button>
      <button @click="addToCart"
       class="cart btns">
       Add to Card
      </button>
    </span>
   </section>
  </div>
</template>

<script setup>
  import { ref, computed } from 'vue'
  import { useRouter } from 'vue-router'
  import Carousel from '@/components/Carousel/Carousel.vue'
  import { useProductStore } from '@/stores/product'
  import { useCartStore } from '@/stores/cart'
  import { useAuthStore } from '@/stores/auth'

  import { trackProductStock } from '@/composables/stock'
  import { discountValuation } from '@/composables/discount'
  import { priceFormatter } from '@/composables/priceFormatter'

  const router = useRouter()

  const productStore = useProductStore() 
  const useCart = useCartStore()
  const useAuth = useAuthStore()

  const props = defineProps(['id']);

  const product = computed(() => {
    return productStore.products.filter(product => product.id === props.id )[0]
  })

  const addToCart = () => {
    if(useAuth.user.id){
      useCart.addToCart(product.value)
      return 
    }
    
    router.push({ name: 'auth' })
  }

  const currentSlide = ref(0)

  const changeSlide = index => {
    setTimeout(() => {
     currentSlide.value = index
    }, 300)
  }


  const { formatting } = priceFormatter()
  const { stockUpdates } = trackProductStock()
  const { discountedPrice } = discountValuation() 

  const discounted = discountedPrice(product.value.discount, product.value.price)
</script>

<style lang="scss" scoped>
 @import '@/styles/main';

 .product-detail-wrraper {
    position: fixed;
    left: 50%;
    transform: translateX(-50%);

    @include screen-md {
      display: grid;
      grid-gap: 1rem;
      top: 10%;

      grid-template-columns: repeat(2, 1fr);
    }

    width: min(1400px, 100%);
    height: 100%;
    padding: 1rem;

    overflow-y: scroll;
 }

 .product-image {
   height: 60%;

   @include screen-sm {
    height: 90%; 
   }

  .image-slider {
    height: 30%;
    gap: 1rem;
  }

  .img-wrapper {
    height: 70%; 
    width: 100%;

    border: 1px solid $border;

    position: relative;

    img {
      position: absolute;
      height: 100%; 
      width: 100%;

      object-fit: cover;
      object-position: top;
    }
  }
 }

 .notActive {
  opacity: .5;
 }

 .product-content {
   padding: 1rem;
   color: $text-light;

  .content-heading {
   padding-bottom: 1rem;
   border-bottom: 2px $border solid; 

   display: grid;
   gap: .5rem;

   h1 {
     font-family: $work;
     font-size: clamp(2rem, 5vw, 4rem);
   }

   h3 {
    color: lighten($text-light, 10);
    font-size: clamp(1.2rem, 5vw, 2rem)
   }

   .product-price {
    justify-content: space-between;
    margin: .5rem 0;
    span { gap: 1rem; }

     font-size: clamp(1rem, 5vw, 1.6rem);
     text-align: end;
   }
  }

  .content-desc {
    padding: 2rem 0;
    p {
      font-size: clamp(.8rem, 5vw, 1.3rem);
      line-height: 1.4;
    }
  }
 }

.stock-tracker {
  text-align: end;
  font-size: clamp(.9rem, 5vw, 1.5rem);

  font-weight: 900;
  font-family: $source;
  color: $error
}

.btn-span-wrapper {
  margin: 2rem 0;

  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 1rem;

  .order {
    background: $error;
    color: $bg-light; 
  }

  .cart {
    background: $black;
    color: $bg-light; 
  }
}
</style>

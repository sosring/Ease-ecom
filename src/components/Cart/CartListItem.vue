<template>

  <article @click="$router.push({ name: 'productDetails',
   params: { id: product.id }})"
   class="product-article"
   :key="index">

   <div class="product-wrapper">

   <span class="product-col-1">
    <div class="product-visuals">

     <div class="product-img-container">
      <img :src="`/assets/${product.images[0]}.jpg`">
     </div>
    </div>

    <div class="product-content-details">
     
     <div class="product-brand">
      <h3 v-html="product.title.slice(0, 10)" class="uppercase"></h3>
      <p v-html="product.brand"></p>
     </div>
  
    <span class="product-price-span">
      <p :class="{ 'discounted': product.discount }">
       ₹{{ formatting(product.price) }} 
      </p>

      <p v-if="product.discount" class="success">
        ₹{{ formatting(discounted) }}
      </p>
    </span>

    <span class="product-quantity-span">
      <button 
       @click="subProduct"
       class="fas fa-minus quantity-control">
      </button>

      <input type="number" disabled
       :value="product.quantity" >

      <button 
       :disabled="product.stock <= 0"
       :class="{ 'disabled': product.stock <=0 }"
       @click="addProduct"
       class="fas fa-add quantity-control">
      </button>
    </span>
    </div>
   </span>

   <p class="stock-updates">
     {{ stockUpdates(product.stock) }}
   </p>
   </div>


   <div class="product-btns">
      <button
       :disabled="product.stock <= 0"
       :class="buttonState"
       class="btn">
       ORDER
      </button>

      <button
       @click="useCart.removeItem(product.id)"
       class="remove-btn btn">
       REMOVE
      </button>
   </div>
  </article>

</template>

<script setup>
  import { ref, computed } from 'vue'
  import { useCartStore } from '@/stores/cart'
  import { discountValuation } from '@/composables/discount'
  import { trackProductStock } from '@/composables/stock'
  import { priceFormatter } from '@/composables/priceFormatter'

  const useCart = useCartStore()

  const { stockUpdates } = trackProductStock()
  const { discountedPrice } = discountValuation() 
  const { formatting } = priceFormatter()

  const discounted = discountedPrice(props.product.discount, props.product.price)

  const addProduct = e => {
      props.product.quantity++
      props.product.stock--
  }

  const subProduct = () => {
    props.product.quantity--
    props.product.stock++

    if(props.product.quantity <= 1){
      useCart.removeItem(props.product.id)
    }
  }

  const props = defineProps({
    product: {
      type: Object 
    },
    index: {
     type: Number
    }
  });
  
  const buttonState = computed(() => {
    return  props.product.stock <= 0 ? 'disabled' : 'order-btn'
  })
  
</script>

<style lang="scss" scoped>
  @import "@/styles/main";
  
   .product-article {
      display: flex;
      flex-direction: column;

      min-height: 220px; 
      background: inherit;

      box-shadow: 0 2px 8px 0 rgba(0,0,0,0.2);
      border-radius: 3px;
      overflow: hidden;

      @include screen-sm {
        min-height: 280px; 
      }

   }

  .product-wrapper {
    display: flex;
    flex-direction: column;

    overflow: hidden;

    height: 80%;
    border-bottom: 2px $border solid;

    padding: 0 .5rem;

    overflow-y: scroll;
    scroll-behavior: smooth;

    .product-col-1 {
      height: 100%;
    }

    .product-visuals {
      min-width: 40%;
      min-height: 100%;

      display: flex;
      position: relative;

      .product-img-container {
        height: 100%;
        width: 100%;

        img {
          position: absolute;
          height: 100%;
          width: 100%;

          object-fit: cover;
          object-position: top;
        }
      }
    }

    .product-content-details {
      min-width: 60%;
      padding: .5rem;

      line-height: 1.4;
      color: $text-light;
      font-size: clamp(1rem, 5vh, 1.2rem);

    .product-brand {

      h3 {
        color: $text-dark;
        font-family: $work;
        font-weight: 800;
        font-size: 1em;
      }

      p {
        font-size: .9em;
      }

    }

    .product-price-span {
      gap: 1rem;
      font-family: monospace;

      p {
        margin: .5rem 0;
        font-size: .9em;
      }
    }
   }
  }
   
  .stock-updates {

    font-size: 1em;
    font-family: $work;
    font-weight: 800;

    color: $error;
    text-align: start;
  }

  .product-quantity-span {
    gap: 1rem;
    color: $text-light;
    width: 30px;
    height: 30px;

    @include screen-sm {
      width: 40px;
      height: 40px;
    }

    .quantity-control {
      border-radius: 50%;
      color: inherit;
      padding: .3rem;

      border: 2px $border solid;

      @include screen-sm {
        padding: .5rem;
      }
    }

    input {
      text-align: center;
      color: inherit;
      padding: inherit;

      height: inherit;
      width: inherit;

      border: 2px $border solid;
    }
  }

  .product-btns {
    min-height: 20%;

    display: grid;
    grid-template-columns: repeat(2, 1fr);

    .order-btn{
      background: lighten($indigo, 10);
      color: $white;
    }

    .remove-btn{
      background: $bg-light;
      color: $indigo;
    }

    .btn {
      font-size: 1.1rem;
      font-family: $work;
      font-weight: 800;
      transition: background .3s ease;
    }
  }
</style>

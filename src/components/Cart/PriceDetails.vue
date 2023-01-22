<template>

<aside class="price-details">
  <header>
    <h3 class="uppercase">Price details</h3>
  </header>

  <section>

    <span class="price-section-span">
      <p>Price
        ({{ cartItems.length }}
        {{ cartItems.length > 1 ? "items" : "item"}})
      </p>
      <p>₹ {{ formatting(totalProductPrice) }}</p>
    </span>

    <span class="price-section-span">
      <p>Discount</p>

      <p class="discount"> 
       -₹ {{ formatting(totalDiscount) }}
      </p>
    </span>

    <span class="price-section-span">
      <p>Delivery charges</p>
      <p>₹ {{ formatting(deliveryChargeGenerator) }}</p>
    </span>
  </section>

    <footer>
      <span class="total-price">
        <p>Total Amount</p>
        <p>₹ {{ formatting(totalAmount) }}</p>
      </span>

       <p class="discount">
        You will save -₹ {{ formatting(totalDiscount) }} on this order.
       </p>
    </footer>
  </aside>

</template>

<script setup>
  import { ref, reactive, computed } from 'vue'
  import { priceFormatter } from '@/composables/priceFormatter'

  const { formatting } = priceFormatter()
  
  const props = defineProps({
    cartItems: {
      type: Array
    }
  });

  const details = reactive({
    deliveryFee: '',
    totalPrice: ''
  })

  const totalProductPrice = computed(() => {
    let totalPrice = 0;
    props.cartItems.forEach(product => {

      if(product.discount !== null ){
        const discounted = Number(product.price / product.discount) 
        totalPrice += Number(product.price - discounted) * product.quantity
      }
      else {
        totalPrice += Number(product.price) * product.quantity
      }
    })

    details.totalPrice = totalPrice
    return totalPrice
  })

  const totalDiscount = computed(() => {

    let totalDiscount = 0;
    props.cartItems.forEach(product => {
      if(product.discount !== null ){
        const discounts = Number(product.price / product.discount) 

        totalDiscount += discounts * product.quantity
      }
    })
    return totalDiscount 
  })

  const deliveryChargeGenerator = computed(() => {
    let totalCharge = 0;

    props.cartItems.forEach(product => {
      totalCharge += Math.floor(Math.random() * 1000)

      totalCharge * product.quantity
    })

    details.deliveryFee = totalCharge
    return totalCharge
  })

  const totalAmount = computed(() => {
    return details.deliveryFee + details.totalPrice
  })
</script>

<style lang="scss" scoped>
  @import "@/styles/main";

  .price-details {
    margin-bottom: 3rem;

    @include screen-md {
      border-radius: 4px;
      box-shadow: 0 2px 8px 0 rgba(0,0,0,0.2);
    }

    font-family: 'work sans';
    font-weight: 400;
    font-size: 1rem;
    padding: 0 1rem;

    height: 380px;

    position: sticky;
    top: 12%;

   header {
    padding: 1rem 0;
    border-bottom: 2px $border solid;

    h3 {
     color: lighten($text-light, 10);
     font-size: 1.2em;
    }
   }

   section {
    padding: 1rem 0;
    color: darken($text-dark, 30);
    border-bottom: 2px $border solid;
    margin: 1rem 0;

    display: grid;
    grid-gap: 1rem;

    .price-section-span {
      font-size: 1.1em;
      justify-content: space-between;
      
      line-height: 1.5;
    }
   }

   footer {
    padding: 1rem 0;
    line-height: 1.5;

    .total-price {
      justify-content: space-between;

      font-family: $roboto;
      font-weight: 600;
      font-size: 1.3em;
    }
  }
 }

  .discount {
    color: $success
  }
</style>

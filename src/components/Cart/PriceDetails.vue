<template>

<aside class="price-details">
  <header>
    <h3 class="uppercase">Price details</h3>
  </header>

  <section>

    <span class="price-section-span">
      <p>Price
        ({{ cartDetails.length }}
        {{cartDetails.length > 1 ? "items" : "item"}})
      </p>
      <p>₹ {{ totalItemPrice }}</p>
    </span>

    <span class="price-section-span">
      <p>Discount</p>
      <p class="discount"> 
       -₹ {{ totalDiscountValue }}
      </p>
    </span>

    <span class="price-section-span">
      <p>Delivery charges</p>
      <p>₹ {{ deliveryFeeGenerator() }}</p>
    </span>
  </section>

    <footer>
      <span class="total-price">
        <p>Total Amount</p>
        <p>₹ {{ actualTotalPrice }}</p>
      </span>

       <p class="discount">You will save -₹ {{ totalDiscountValue }} on this order.</p>
    </footer>
  </aside>

</template>

<script setup>
  import { ref, reactive, computed } from 'vue'
  
  const props = defineProps({
    cartDetails: {
      type: Array
    }
  });

  const priceDetials = reactive({
    totalDiscount: null,
    totalSum: null,
    totalFees: null,
    addedFeeAmount: null
  }) 

  const actualTotalPrice = computed(() => {

    const discounted = priceDetials.totalSum - priceDetials.totalDiscount

    priceDetials.addedFeeAmount = discounted +  priceDetials.totalFees 

    return formatting(priceDetials.addedFeeAmount)
  })

  const deliveryFeeGenerator = () => {

    let totalCharge = 0;
    props.cartDetails.forEach(() => {
      const deliveryCharge = Math.floor(Math.random() * 1000)

      totalCharge += deliveryCharge
    })

    priceDetials.totalFees = totalCharge
    return formatting(totalCharge)
  }

  const totalDiscountValue = computed(() => {

    props.cartDetails.forEach(product => {
      if(product.discount !== null) {
        priceDetials.totalDiscount += Number(product.price / product.discount)
      }
    })

    return formatting(priceDetials.totalDiscount)
  })

  const totalItemPrice = computed(() => {
    props.cartDetails.forEach(product => priceDetials.totalSum += Number(product.price))
    return priceDetials.totalSum
  })

  const formatting = (num) => {
    let  str = num.toString().split('.');

    if (str[0].length >= 3) {
      str[0] = str[0].replace(/(\d)(?=(\d{3})+$)/g, '$1,');
    }
    if (str[1] && str[1].length >= 3) {
      str[1] = str[1].replace(/(\d{3})/g, '$1 ');
    }

    return str.join('.');
  }

</script>

<style lang="scss" scoped>
  @import "@/styles/main";

  .price-details {
    box-shadow: 0 2px 4px 0 rgba(0,0,0,0.2);
    border-radius: 4px;

    font-family: $work;
    font-weight: 400;
    padding: 0 1rem;

    height: 380px;

    position: sticky;
    top: 0;

   header {
    padding: 1rem 0;
    border-bottom: 2px $border solid;

    h3 {
    color: lighten($text-light, 10);
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
      font-size: .9rem;
      justify-content: space-between;
      
      line-height: 1.5;
    }
   }

   footer {
    padding: 1rem 0;
    line-height: 1.5;

    .total-price {
      justify-content: space-between;

      font-family: $source;
      font-weight: 600;
      font-size: 1.1rem;
    }
  }
 }

  .discount {
    color: #388e3c
  }
</style>

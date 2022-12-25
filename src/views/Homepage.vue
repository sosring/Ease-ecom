<template>

  <section>

    <div class="product-banner">

      <div class="banner-tag">
        <h1>Take the stress <br>
        out of fashion.</h1> <br>

        <p>Best fashion deals with ease.</p>
      </div>
    </div>
  </section>

</template>

<script setup>

</script>

<style lang="scss" scoped>
  @import '@/styles/main';

  .product-banner {
    min-height: 450px;
    background: url('../assets/banner01.png')  no-repeat center;
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

    text-align: center;
    padding: 2rem;
    font-size: 28px;

    h1, p {
      text-shadow: 2px 7px 5px rgba(0,0,0,0.3), 
      0px -4px 10px rgba(255,255,255,0.3);
    }

    h1 {
      @include fontStyle($source, 1.5em) 
    }

    p {
      @include fontStyle($roboto, 1.2em);
      font-weight: 700;
      letter-spacing: 3px;
    }

    @include screen-sm {
      font-size: 40px;
    }
  }
</style>

<template>

  <transition :name="transitionEffect">
    <div class="carousel-item"
     v-show="currentSlide === index"
     :key="index">

      <img :src="`/assets/${image}.jpg`">
    </div>
  </transition>
</template>

<script setup>
  import { computed } from 'vue'
  
  const props = defineProps({
    image: {
      type: String
    },
    currentSlide: {
      type: Number
    },
    index: {
      type: Number
    },
    direction: {
      type: String
    }
  });

  const transitionEffect = computed(() => {
    return props.direction === 'right' ? 'slide-in' : 'slide-out'
  }) 
</script>

<style lang="scss" scoped>
  .carousel-item {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;

    img {
      object-fit: cover;
      object-position: top;

      height: 100%;
      width: 100%;
    }
  }

  /* transition */

  .slide-in-enter-active,
  .slide-in-leave-active, 
  .slide-out-enter-active,
  .slide-out-leave-active {
    transition: all 1s ease-in-out;
  }

  .slide-in-enter-from {
    transform: translateX(-100%);
  }

  .slide-in-leave-to {
    transform: translateX(100%);
    opacity: 0;
    filter: blur(4px)
  }

  .slide-out-enter-from {
    transform: translateX(100%);
  }

  .slide-out-leave-to {
    transform: translateX(-100%);
    filter: blur(15px);
    opacity: 0;
  }
</style>

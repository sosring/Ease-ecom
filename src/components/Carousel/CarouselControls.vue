<template>

  <button 
   v-if="index !== 0"
   @click="$emit('prev')" 
   class="carousel-btn left
   fa-solid fa-chevron-left">
  </button>

  <button
   v-if="index !== slides.length - 1"
   @click="$emit('next')" 
   class="carousel-btn right
   fa-solid fa-chevron-right">
  </button>

</template>

<script setup>
  const emits = defineEmits(['prev', 'next'])

  const props = defineProps(['slides', 'index']);
</script>

<style lang="scss" scoped>
  @import '@/styles/main';
  
  .carousel-btn {

    position: absolute;
    top: calc(50% - 25px);
    height: 40px;
    width: 40px;

    z-index: 1;
    font-size: 1.3rem;

    display: inline-block;

    background: rgba(255, 255, 255, 0.6);
    color: rgba(0,0,0, 0.4);
    backdrop-filter: blur(4px);

    border-radius: 50%;

    @include screen-base {
      font-size: 2rem;
      height: 60px;
      width: 60px;
    }
  }
  
  .left {
    left: 1%
  }

  .right {
    right: 1% 
  }
</style>

<template>

  <button @click="$emit('prev')" 
   class="carousel-btn left
   fa-solid fa-chevron-left">
  </button>

  <button @click="$emit('next')" 
   class="carousel-btn right
   fa-solid fa-chevron-right">
  </button>

</template>

<script setup>
  const emits = defineEmits(['prev', 'next'])
</script>

<style lang="scss" scoped>
  @import '@/styles/main';
  
  .carousel-btn {

    position: absolute;
    top: calc(50% - 25px);
    padding: .7rem;

    z-index: 1;
    font-size: 1.3rem;

    display: inline-block;

    color: rgba(0,0,0, 0.4);
    backdrop-filter: blur(1px);

    @include screen-sm {
      font-size: 2rem;
    }
  }
  
  .left {
    left: 0;
  }

  .right {
    right: 0
  }
</style>

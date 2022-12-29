<template>

  <div class="carousel-indication">

    <button v-for="(item, index) in total"
     :class="{ 'active' : currentSlide === index }"
     class="carousel-indication-item"
     @click="$emit('switchSlide', index)">
    </button>
  </div>
</template>

<script setup>
  
  const props = defineProps({
    total: {
      type: Number
    },
    currentSlide: {
      type: Number
    }
  });

  const emits = defineEmits(['switchSlide'])
</script>

<style lang="scss" scoped>
  @import '@/styles/main';

  .carousel-indication {
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);

    z-index: 1;

    display: flex;
    gap: .5rem;
    padding: .5rem;

    background: rgba(0,0,0, 0.2);
    backdrop-filter: blur(1px);
    border-radius: 8px 0 8px;

    margin: .5rem 0; 
  }

  .carousel-indication-item {
    height: 12px;
    width: 12px;

    border-radius: 50%;
    background: rgba(0,0,0, 0.4);
  }

  .active {
    background: rgba(255,255,255, 0.4);
  }

  @include screen-sm {
    .carousel-indication { padding: .7rem }
    .carousel-indication-item {
      height: 15px;
      width: 15px
    }
  }
</style>

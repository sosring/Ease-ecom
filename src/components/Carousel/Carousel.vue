<template>

  <div class="carousel" 
    ref="courselRef">
    <div class="carousel-inner">

    <CarouselIndicator 
     :total="images.length" 
     :currentSlide="currentSlide"
     @switchSlide="switchSlide"/>
      
     <CarouselItem 
      v-for="(image, index) in images"
      :image="image"
      :index="index"
      :direction="direction"
      :currentSlide="currentSlide"/>

     <CarouselControls 
      :slides="images"
      :index="currentSlide"
      @prev="prev"
      @next="next"/>

    </div>
  </div>
</template>

<script setup>
  import { ref, onMounted } from 'vue' 
  import CarouselItem from '@/components/Carousel/CarouselItem.vue'
  import CarouselControls from '@/components/Carousel/CarouselControls.vue'
  import CarouselIndicator from '@/components/Carousel/CarouselIndicator.vue'

  const props = defineProps({
    images: {
      type: Array 
    }
  });

  const currentSlide = ref(0)

  const direction = ref('right')

  const setCurrenSlide = index => {
    currentSlide.value = index
  }

  const switchSlide = index => setCurrenSlide(index)
  
  const next = (step = 1) => {
    const index = currentSlide.value < props.images.length - step ? currentSlide.value + step : 0;
    setCurrenSlide(index);
    direction.value = 'right'
  }

  const prev = (step = -1) => {
    const index = currentSlide.value > 0 ? currentSlide.value + step : props.images.length - 1; 
    setCurrenSlide(index);
    direction.value = 'left'
  }
</script>

<style lang="scss" scoped>
  @import '@/styles/main';
  
  .carousel {
    display: flex;
    justify-content: center;

   .carousel-inner {
    height: 100%;
    width: 100%; 
    overflow: hidden;
    position: relative;

    @include screen-md {
      width: 100%; 
    }
   }
  }
</style>

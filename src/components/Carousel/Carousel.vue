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
    },
    currentSlide: {
      type: Number
    }
  });
  
  const emits = defineEmits(['update:currentSlide'])

  const direction = ref('right')

  const setCurrenSlide = index => {
    emits('update:currentSlide', index)
  }

  const switchSlide = index => setCurrenSlide(index)
  
  const next = (step = 1) => {
    const index = props.currentSlide < props.images.length - step ? props.currentSlide + step : 0;
    setCurrenSlide(index);
    direction.value = 'right'
  }

  const prev = (step = -1) => {
    const index = props.currentSlide > 0 ? props.currentSlide + step : props.images.length - 1; 
    setCurrenSlide(index);
    direction.value = 'left'
  }
</script>

<style lang="scss" scoped>
  @import '@/styles/main';
  
  .carousel {
    display: flex;
    justify-content: center;
    height: 100%;
    width: 100%; 


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

<template>

  <button
   @click="$emit('update:condition', false)">
   testing
  </button>
</template>

<script setup>
  const props = defineProps(['condition'])
</script>

<style lang="scss" scoped>
 @import '@/styles/main';
  
</style>

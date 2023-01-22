<template>

  <div v-if="condition"
   class="model-wrapper">

    <div ref="modelRef"
     class="model-container">

      <span class="question-span">

        <button 
         class="fas fa-times close-btn"
         @click="closeModel">
        </button>

        <h3>ARE YOU SURE YOU WANT TO DEACTIVATE YOUR ACCOUNT ?</h3>
      </span>

      <span class="btn-wrapper">
        <button @click="closeModel">
         Cancel
        </button>
        <button @click="useAuth.deactivateUser">
         Deactivate
        </button>
      </span>
    </div>
  </div>
</template>

<script setup>
  import { ref, onMounted } from 'vue'
  import { onClickOutside } from '@vueuse/core'
  import { useAuthStore } from '@/stores/auth'

  const useAuth = useAuthStore()

  const props = defineProps({
    condition: {
      type: Boolean
    }
  });

  const emits = defineEmits(['update:condition'])

  const modelRef = ref(null)

  function closeModel() {
    emits('update:condition', false)
  }

  onClickOutside(modelRef, closeModel)

  // Close Model when press escape key
  onMounted(() => {
    window.addEventListener('keyup', (e) => {
      if(e.key === 'Escape') {
        closeModel()
      }
    })
  })
</script>

<style lang="scss" scoped>
  @import '@/styles/main';
  
  .model-wrapper {
    height: 100vh;
    width: 100vw;

    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    background: rgba( 0 0 0 / .4);
    z-index: 1;
    backdrop-filter: blur(4px)
  }

  .model-container {
    height: min(300px, 30%);
    width: min(500px, 80%);

    background: $primary;
    border-radius: 8px;

    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    display: flex;
    flex-direction: column;

    overflow: hidden;
  }

  .question-span {
    height: 80%;
    padding: 1rem 2rem;
 
    font-family: $roboto;
    font-size: clamp(.8rem, 2.5vw, 1rem);
    color: $text-light;

    border-bottom: 1px $border solid;
    position: relative;

    .close-btn {
      position: absolute;
      top: 5%;
      right: 2%;

      font-size: clamp(1.4rem, 2.5vw, 1.7rem);

      color: $secoundary;
      padding: .2rem .5rem;
      border-radius: 50%;
    }
  }

  .btn-wrapper {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    height: 20%;

    button {
      height: 100%;
      font-weight: 800;
      font-family: $raleway
    }

    :nth-child(1) {
      color: $black;
    }

    :nth-child(2) {
      background: $black;
      color: $primary;
    }
  }
</style>

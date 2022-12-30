import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useCartStore = defineStore('cartStore', {
  state: () => ({
    isEmpty: null,
    cartItems: [],
    wishItems: []
  }),

  actions: {
    addToCart (id) {
    }
  }
})

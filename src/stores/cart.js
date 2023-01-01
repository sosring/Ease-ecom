import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

import { useProductStore } from '@/stores/product'
import { useAuthStore } from '@/stores/auth'

export const useCartStore = defineStore('cartStore', {
  state: () => ({
    isEmpty: true,
    cartItems: []
  }),

  actions: {

    addToCart (id) {

      const productStore = useProductStore()
      const product = productStore.products.filter(product => product.id === id)[0]

      if(this.cartItems.find(item => item.id === id)){

        const index = this.cartItems.findIndex(item => item.id === id)

        this.cartItems[index].quantity++
        return
      }

      product.quantity = 1
      this.cartItems.push(product)
      this.emptyCheck()
      this.router.push({ name: 'cart' })
    },

    removeItem (id) {
      this.cartItems = this.cartItems.filter(item => item.id !== id)
      this.emptyCheck()
    },

    emptyCheck () {
      this.cartItems.length === 0 ? this.isEmpty = true : this.isEmpty = false
    }
  }
})

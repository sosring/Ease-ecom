import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import { collection, setDoc,
query, where, onSnapshot, orderBy,
updateDoc, doc, deleteDoc } from "firebase/firestore"; 

import { useProductStore } from '@/stores/product'
import { useAuthStore } from '@/stores/auth'
import { db } from '@/js/firebase'

let cartCollection;
let queryCartCollection;

export const useCartStore = defineStore('cartStore', {
  state: () => ({
    isEmpty: true,
    cartItems: []
  }),

  actions: {

    init(){
      const useAuth = useAuthStore()
      cartCollection = collection(db, "customer", useAuth.user.id, "cart")

      queryCartCollection = query(cartCollection,  orderBy("product.quantity"))

      this.fetchUserCart()
    },

    async fetchUserCart () {
      try {
        onSnapshot(queryCartCollection, (querySnapshot) => {
          const cartItems = [];
          const docId = []

          querySnapshot.forEach((doc) => {

            cartItems.push(doc.data().product)
            docId.push(doc.id)
          });

          this.cartItems = cartItems
          this.emptyCheck()
        });
      }
      catch (err) {
        alert(err.message)
      }
    },

    async addToCart (product) {
      product.quantity = 1

      await setDoc(doc(cartCollection, product.id) , {
        product
      })

      this.emptyCheck()
      this.router.push({ name: 'cart' })
    },

    async removeItem (id) {
      this.cartItems = this.cartItems.filter(item => item.id !== id)
      await deleteDoc(doc(cartCollection, id));
      this.emptyCheck()
    },

    emptyCheck () {
      this.cartItems.length <= 0 ? this.isEmpty = true : this.isEmpty = false
    }
  }
})

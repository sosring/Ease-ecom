import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import { collection, query, where, onSnapshot } from "firebase/firestore";
import { db } from '@/js/firebase'

const collections = collection(db, 'products')
const queryCollection = query(collections)

export const useProductStore = defineStore('productStore', {
  state: () => ({
    products: [],
    productLoaded: null
  }),

  actions: {
      
    async fetchProductData () {

      await onSnapshot(queryCollection, (querySnapshot) => {
        const products = []

        querySnapshot.forEach((doc) => {
          products.push(doc.data())
        });

        this.products = products
      });
    }
  }
})

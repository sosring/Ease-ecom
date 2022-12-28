import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import { collection, query, where, 
onSnapshot, orderBy } 
from "firebase/firestore";
import { db } from '@/js/firebase'

const collections = collection(db, 'products')
const queryCollection = query(collections,  orderBy("title"))

export const useProductStore = defineStore('productStore', {
  state: () => ({
    products: [],
    productLoaded: null
  }),

  actions: {

    async fetchProductData () {
      try {
        onSnapshot(queryCollection, (querySnapshot) => {
          const products = []
          querySnapshot.forEach((doc) => {

            const d = doc.data()

            const product = {
              id: doc.id,
              title: d.title,
              brand: d.brand,
              desc: d.desc,
              category: d.category,
              gender: d.gender,
              stock: d.stock,
              discount: d.discount,
              price: d.price,
              images: d.images
            }
            products.push(product)
          });
          this.products = products
        });
      }
      catch (err){
        console.log(err.message)
      }
    }
  }
})

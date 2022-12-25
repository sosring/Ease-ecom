import { createApp, markRaw } from 'vue'
import { createPinia } from 'pinia'
import { MotionPlugin } from '@vueuse/motion'

import App from './App.vue'
import router from './router'



const app = createApp(App)
const pinia = createPinia()
pinia.use(({store}) => { store.router = markRaw(router) })

app.use(pinia)
app.use(router)
app.use(MotionPlugin)

app.mount('#app')

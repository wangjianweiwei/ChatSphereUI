import {createApp} from 'vue'
import App from './App.vue'
import ElementPlus from 'element-plus'
import {createPinia} from 'pinia'
import piniaPluginPersist from 'pinia-plugin-persist'

import 'element-plus/dist/index.css'
import router from "./router.js";

const pinia = createPinia()
pinia.use(piniaPluginPersist)

createApp(App).use(ElementPlus).use(pinia).use(router).mount('#app')

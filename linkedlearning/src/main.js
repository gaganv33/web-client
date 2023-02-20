import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/mainIndex'
import Modal from 'vue-bs-modal'

createApp(App).use(store).use(router).use(Modal).mount('#app')

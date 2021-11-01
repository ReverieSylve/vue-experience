import {createApp} from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

const useArray = [store, router]

const app = createApp(App)
useArray.forEach(plugin => app.use(plugin));
app.mount('#app')

import { createApp} from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'



const vue = createApp(App)


vue.use(store).use(router).mount('#app')

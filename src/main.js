import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'
import vant from 'vant';
import 'vant/lib/index.css';
import store from'./store';



const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(vant)
app.use(store)
app.mount('#app')

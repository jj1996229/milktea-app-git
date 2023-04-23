import { createApp } from 'vue'
<<<<<<< HEAD
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'
import vant from 'vant';
=======
import App from './App.vue'
import router from './router'
import vant from 'vant'
>>>>>>> b018fcc4c09580f7936a9151f43ba45b40b66cd2
import 'vant/lib/index.css';
import store from'./store';



const app = createApp(App)

app.use(router)
app.use(vant)
app.use(store)
app.mount('#app')

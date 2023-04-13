import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import vant from 'vant'

import 'vant/lib/index.css';


// import './assets/main.css'

const app = createApp(App)

app.use(router)
app.use(vant)

app.mount('#app')

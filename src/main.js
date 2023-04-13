import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import vant from 'vant'

import 'vant/lib/index.css';


// 1. 引入你需要的组件
import vant from 'vant';
// 2. 引入组件样式
import 'vant/lib/index.css';

import store from'./store';



const app = createApp(App)

app.use(router)
app.use(vant)
<<<<<<< HEAD

=======
app.use(store)
>>>>>>> d6690e5a82d6cc8e888eb65df80ad12c4bb383e2
app.mount('#app')

import {createApp} from 'vue'
import App from './App.vue'
import Vant from 'vant'
import * as VueRouter from 'vue-router'
import {RouterOptions} from 'vue-router'
import routes from "./config/router";
import 'vant/lib/index.css'

const router = VueRouter.createRouter({
    history: VueRouter.createWebHashHistory(),
    routes,
} as RouterOptions)

const app = createApp(App);
app.use(Vant);

app.use(router)
app.mount('#app')



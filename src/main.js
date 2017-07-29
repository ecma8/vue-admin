import Vue from 'vue'
import App from './App.vue'

import Iview from 'iview'
import axios from 'axios'
import './assets/css/public.css';    // 使用 CSS
import './assets/css/bootstrap.css';    // 使用 CSS
import router from './route.js'
import './filter.js'
Vue.prototype.$http = axios;
Vue.use(Iview);

global.API_ROOT='http://localhost:89';

const app = new Vue({
    router,
    render: h => h(App)
}).$mount('#app');


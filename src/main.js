import Vue from 'vue'
import App from './App.vue'

import axios from 'axios'
import router from './route.js'
import store from './vuex.js'
import './filter.js'

Vue.prototype.$http = axios;

global.API_ROOT='http://localhost:89';
global.IMG_ROOT='http://127.0.0.1:8081/';

const app = new Vue({
    store,
    router,
    render: h => h(App)
}).$mount('#app');


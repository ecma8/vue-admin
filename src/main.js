import Vue from 'vue'
import App from './App.vue'
import Loading from './components/Loading'

import router from './route.js'
import store from './vuex.js'
import http from './http.js'

import './filter.js'



Vue.use(Loading);

Vue.prototype.$http = http;


const app = new Vue({
    store,
    router,
    render: h => h(App)
}).$mount('#app');


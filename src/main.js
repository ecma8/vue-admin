import Vue from 'vue'
import qs from 'qs'
import App from './App.vue'
import Loading from './components/Loading'

import router from './route.js'
import store from './vuex.js'
import http from './http.js'


import './filter.js'

Vue.use(Loading);

Vue.prototype.$http = http;
Vue.prototype.qs = qs;



const app = new Vue({
    store,
    router,
    render: h => h(App)
}).$mount('#app');
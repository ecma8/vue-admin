import axios from 'axios'
import router from './route'
import store from './vuex'

axios.defaults.timeout = 10000;

axios.defaults.baseURL = 'http://open.ecma8.com/';

axios.interceptors.request.use(config => {
    store.commit('show');
    return config
}, error => {
    store.commit('hide');
    return Promise.reject(error)
});

axios.interceptors.response.use(data => {
    store.commit('hide');
    if(data.data.msg === "失败"){
        router.replace({
            path: '/'
        })
    }
    return data
}, error => {
    if (error.response) {
        switch (error.response.status) {
            case 401:
                router.replace({
                    path: '/login'
                })
        }
    }
    return Promise.reject(error)
});
export default axios
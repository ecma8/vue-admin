import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);
var state={
    count:10
};
const mutations={
    add(state){
        state.count++
    },
    del(state){
        state.count--
    }
};
const actions={
    add:({commit})=>{
        commit('add')
    },
    del:({commit})=>{
        commit('del')
    }
};
const getters={
    count(state){
        return state.count;
    }
};
export default new Vuex.Store({
    actions,
    mutations,
    state,
    getters
})



import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

const store = new Vuex.Store({
    strict: true,
    modules: {},
    state: {
        //  baseServerURL:"https://lol.tk/",
        baseServerURL: 'http://localhost:4000',

    },
    getters: {},
    mutations: {}
})

export default store

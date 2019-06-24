import Vuex from 'vuex'
import Vue from 'vue'
Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        arr: []
    },
    mutations: {
        setArr (state, payload) {
            state.arr = payload.arr
        }
    },
    actions: {
        getData ({commit}) {
            setTimeout(function () {
                commit('setArr', {
                    arr: [{label: 'store1'}, {label: 'store2'}]
                })
            }, 1000)
        }
    }
})
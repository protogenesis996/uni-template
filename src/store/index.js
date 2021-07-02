import Vue from 'vue'
import Vuex from 'vuex'

import { setLocalStorage, getLocalStorage } from '@/utils/wxTool.js'

import system from './modules/system'

Vue.use(Vuex)

const store = new Vuex.Store({
    modules: {
        system
    },
    state: {
    },
    mutations: {
    }
})

export default store
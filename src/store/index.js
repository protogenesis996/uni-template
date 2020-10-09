import Vue from 'vue'
import Vuex from 'vuex'

import { setLocalStorage, getLocalStorage } from '@/utils/wxTool.js'

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        // 屏幕信息
        systemInfo: {},
        // 胶囊信息
        bounding: {}
    },
    mutations: {
        set_systemInfo (state, data) {
            state.systemInfo = data
            setLocalStorage('systemInfo', state.systemInfo)
        },
        set_bounding(state, data) {
            state.bounding = data
            setLocalStorage('systemInfo', state.bounding)
        }
    }
})

export default store
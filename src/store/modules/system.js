



const system = {
  namespaced: true,
  state: {
    // 屏幕信息
    system: {},
    // 胶囊信息
    bounding: {}
  },
  mutations: {
    setSystem(state, data) {
      state.system = data
      uni.setStorageSync('system', data )
    },
    setBounding(state, data) {
      state.bounding = data
      uni.setStorageSync('bounding', data )
    }
  },
  actions: {

  }

}


export default system
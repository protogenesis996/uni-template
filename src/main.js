import Vue from 'vue'
import App from './App'

import store from './store/index.js'
// import filters from './filters/index'
Vue.config.productionTip = false
Vue.prototype.$store = store

// Object.keys( filters ).forEach(filter => {
//   Vue.filter(filter, filters[filter])
// })

App.mpType = 'app'

const app = new Vue({
  ...App,
  store
})
app.$mount()

import 'source-serif-pro/source-serif-variable.css'
import App from './App.vue'
import Vue from 'vue'
import store from '@/store'

Vue.config.productionTip = false

new Vue({
  store,
  render: h => h(App)
}).$mount('#app')
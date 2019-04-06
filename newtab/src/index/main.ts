import 'source-serif-pro/source-serif-variable.css'
import App from './App.vue'
import Vue, { VNode } from 'vue'
import store from '@/store'

Vue.config.productionTip = false

new Vue({
  store,
  render: (h): VNode => h(App)
}).$mount('#app')

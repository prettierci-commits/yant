import '@/plugins/vuetify'
import '@mdi/font/css/materialdesignicons.css'
import 'source-serif-pro/source-serif-variable.css'
import App from './App.vue'
import Vue, { VNode } from 'vue'
import router from './router'
import store from '@/store'

Vue.config.productionTip = false

new Vue({
  store,
  router,
  render: (h): VNode => h(App)
}).$mount('#app')

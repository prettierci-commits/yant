import './plugins/vuetify'
import '@mdi/font/css/materialdesignicons.css'
import App from './App.vue'
import Vue from 'vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')

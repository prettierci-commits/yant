import '@/plugins/vuetify'
import '@mdi/font/css/materialdesignicons.css'
import 'source-serif-pro/source-serif-variable.css'
import App from './App.vue'
import Vue, { VNode } from 'vue'
import router from './router'
import { store, storeReady } from '@/store'

Vue.config.productionTip = false

;(async (): Promise<void> => {
  const app = new Vue({
    store,
    router,
    render: (h): VNode => h(App)
  })
  await storeReady
  app.$mount('#app')
})()

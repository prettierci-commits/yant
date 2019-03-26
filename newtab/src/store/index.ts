import Vue from 'vue'
import Vuex from 'vuex'
import persist from './persist'
import { getModule } from 'vuex-module-decorators'

import Clock from './Clock'
import Common from './Common'
import Motto from './Motto'
import Order from './Order'

Vue.use(Vuex)

const store = new Vuex.Store({
  strict: process.env.NODE_ENV !== 'production',

  modules: {
    clock: Clock,
    common: Common,
    motto: Motto,
    order: Order
  },

  plugins: [persist.plugin],

  state: {

  },
  mutations: {

  },
  actions: {

  }
})

const clockModule = getModule(Clock, store)
const commonModule = getModule(Common, store)
const mottoModule = getModule(Motto, store)
const orderModule = getModule(Order, store)

export * from './types'
export default store
export {
  clockModule,
  commonModule,
  mottoModule,
  orderModule
}

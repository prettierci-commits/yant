import Vue from 'vue'
import Vuex from 'vuex'
import { getModule } from 'vuex-module-decorators'

import createMutationsSharer from 'vuex-shared-mutations'
import persist from './persist'

import Common from './Common'
import Widgets from './Widgets'

Vue.use(Vuex)

const store = new Vuex.Store({
  strict: process.env.NODE_ENV !== 'production',

  modules: {
    common: Common,
    widgets: Widgets
  },

  plugins: [
    persist.plugin,
    createMutationsSharer({ predicate: (): boolean => true })
  ],

  state: {

  },
  mutations: {

  },
  actions: {

  }
})

const commonModule = getModule(Common, store)
const widgetsModule = getModule(Widgets, store)

export * from './types'
export default store
export {
  commonModule,
  widgetsModule
}

/* global chrome: false */

import Vue from 'vue'
import Vuex from 'vuex'
import { getModule } from 'vuex-module-decorators'

import createMutationsSharer from 'vuex-shared-mutations'
import { LTM, chromeStorageWrapper, executeWithDelay, localStorageWrapper, shallowMerge } from './LTM'

import Common from './Common'
import Widgets from './Widgets'

Vue.use(Vuex)

const ltm = new LTM({
  storage: chrome && chrome.storage && chrome.storage.sync
    ? chromeStorageWrapper<any, any>('YANT')
    : localStorageWrapper<any>('YANT'),
  execute: executeWithDelay(1000),
  merge: shallowMerge
})

const store = new Vuex.Store({
  strict: process.env.NODE_ENV !== 'production',

  state: {},

  modules: {
    common: Common,
    widgets: Widgets
  },

  plugins: [
    ltm.plugin,
    createMutationsSharer({ predicate: (): boolean => true })
  ]
})

const commonModule = getModule(Common, store)
const widgetsModule = getModule(Widgets, store)

export * from './types'
export * from './widgetDefaults'
export default store
export {
  commonModule,
  widgetsModule
}

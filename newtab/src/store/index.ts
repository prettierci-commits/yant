import Vue from 'vue'
import Vuex from 'vuex'
import persist from './persist'

import Clock from './Clock'
import Common from './Common'
import Motto from './Motto'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    clock: Clock,
    common: Common,
    motto: Motto
  },

  plugins: [persist.plugin],

  state: {

  },
  mutations: {

  },
  actions: {

  }
})

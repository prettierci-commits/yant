import Router, { RouteConfig } from 'vue-router'
import Vue from 'vue'

import RootView from '@/components/RootView.vue'

const Options = () => import(/* webpackChunkName: "options" */ '@/components/Options.vue')

const ClockOptions = () => import(/* webpackChunkName: "options" */ '@/components/clock/Options.vue')
const ClockPreview = () => import(/* webpackChunkName: "options" */ '@/components/clock/View.vue')
const CommonOptions = () => import(/* webpackChunkName: "options" */ '@/components/common/Options.vue')
const CommonPreview = () => import(/* webpackChunkName: "options" */ '@/components/common/View.vue')
const MottoOptions = () => import(/* webpackChunkName: "options" */ '@/components/motto/Options.vue')
const MottoPreview = () => import(/* webpackChunkName: "options" */ '@/components/motto/View.vue')
const OrderOptions = () => import(/* webpackChunkName: "options" */ '@/components/order/Options.vue')
const OrderPreview = () => import(/* webpackChunkName: "options" */ '@/components/order/View.vue')

Vue.use(Router)

const routes: RouteConfig[] = [{
  path: '/',
  name: 'newtab',
  component: RootView
}, {
  path: '/options',
  name: 'options',
  redirect: {
    name: 'options-common'
  },
  component: Options,
  children: [{
    path: '/options/common',
    name: 'options-common',
    components: {
      options: CommonOptions,
      preview: CommonPreview
    },
    meta: {
      drawer: true,
      menuName: 'Common',
      icon: 'mdi-domain'
    }
  }, {
    path: '/options/motto',
    name: 'options-motto',
    components: {
      options: MottoOptions,
      preview: MottoPreview
    },
    meta: {
      drawer: true,
      menuName: 'Motto',
      icon: 'mdi-text'
    }
  }, {
    path: '/options/clock',
    name: 'options-clock',
    components: {
      options: ClockOptions,
      preview: ClockPreview
    },
    meta: {
      drawer: true,
      menuName: 'Clock',
      icon: 'mdi-clock'
    }
  }, {
    path: '/options/order',
    name: 'options-order',
    components: {
      options: OrderOptions,
      preview: OrderPreview
    },
    meta: {
      drawer: true,
      menuName: 'Order',
      icon: 'mdi-reorder-horizontal'
    }
  }]
}]

export default new Router({
  routes
})
export { routes }

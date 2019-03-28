import Router, { RouteConfig } from 'vue-router'
import Vue from 'vue'

import RootView from '@/components/RootView.vue'

import Options from '@/components/Options.vue'

import ClockOptions from '@/components/clock/Options.vue'
import ClockPreview from '@/components/clock/View.vue'
import CommonOptions from '@/components/common/Options.vue'
import CommonPreview from '@/components/common/View.vue'
import MottoOptions from '@/components/motto/Options.vue'
import MottoPreview from '@/components/motto/View.vue'
import OrderOptions from '@/components/order/Options.vue'
import OrderPreview from '@/components/order/View.vue'
import StyleOptions from '@/components/style/Options.vue'
import StylePreview from '@/components/style/View.vue'

Vue.use(Router)

const routes: RouteConfig[] = [{
  path: '/',
  name: 'options',
  redirect: {
    name: 'options-common'
  },
  component: Options,
  children: [{
    path: 'common',
    name: 'options-common',
    components: {
      options: CommonOptions,
      preview: CommonPreview
    }
  }, {
    path: 'motto/:id',
    name: 'options-motto',
    components: {
      options: MottoOptions,
      preview: MottoPreview
    }
  }, {
    path: 'clock/:id',
    name: 'options-clock',
    components: {
      options: ClockOptions,
      preview: ClockPreview
    }
  }, {
    path: 'order',
    name: 'options-order',
    components: {
      options: OrderOptions,
      preview: OrderPreview
    }
  }, {
    path: 'style',
    name: 'options-style',
    components: {
      options: StyleOptions,
      preview: StylePreview
    }
  }]
}, {
  path: '*',
  redirect: {
    name: 'options'
  }
}]

export default new Router({
  mode: 'hash',
  routes
})
export { routes }

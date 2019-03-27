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
    },
    meta: {
      drawer: true,
      menuName: 'Common',
      icon: 'mdi-domain'
    }
  }, {
    path: 'motto',
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
    path: 'clock',
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
    path: 'order',
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
  }, {
    path: 'style',
    name: 'options-style',
    components: {
      options: StyleOptions,
      preview: StylePreview
    },
    meta: {
      drawer: true,
      menuName: 'Style (custom CSS)',
      icon: 'mdi-language-css3'
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

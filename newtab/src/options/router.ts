import Router, { RouteConfig } from 'vue-router'
import Vue from 'vue'

import RootView from '@/components/RootView.vue'

import Options from '@/components/Options.vue'

import ClockOptions from '@/components/clock/Options.vue'
import ClockPreview from '@/components/clock/View.vue'
import CommonOptions from '@/components/common/Options.vue'
import CommonPreview from '@/components/common/View.vue'
import DateOptions from '@/components/date/Options.vue'
import DatePreview from '@/components/date/View.vue'
import MottoOptions from '@/components/motto/Options.vue'
import MottoPreview from '@/components/motto/View.vue'
import SeparatorOptions from '@/components/separator/Options.vue'
import SeparatorPreview from '@/components/separator/View.vue'
import StyleOptions from '@/components/style/Options.vue'
import StylePreview from '@/components/style/View.vue'
import WidgetsOptions from '@/components/widgets/Options.vue'
import WidgetsPreview from '@/components/widgets/View.vue'

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
    path: 'clock/:id',
    name: 'options-clock',
    components: {
      options: ClockOptions,
      preview: ClockPreview
    }
  }, {
    path: 'date/:id',
    name: 'options-date',
    components: {
      options: DateOptions,
      preview: DatePreview
    }
  }, {
    path: 'motto/:id',
    name: 'options-motto',
    components: {
      options: MottoOptions,
      preview: MottoPreview
    }
  }, {
    path: 'separator/:id',
    name: 'options-separator',
    components: {
      options: SeparatorOptions,
      preview: SeparatorPreview
    }
  }, {
    path: 'widgets',
    name: 'options-widgets',
    components: {
      options: WidgetsOptions,
      preview: WidgetsPreview
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

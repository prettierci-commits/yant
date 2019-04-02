<template>
  <div
    :class="classes"
    :style="styleAttr"
    class="flex-container"
  >
    <div
      :is="component"
      v-for="({ component, id }, i) in widgetsDOM"
      :key="i"
      :widget-id="id"
      class="widget"
    />

    <slot />

    <CSS :value="customCSS" />
    <CSS :value="animationCSS" />
  </div>
</template>

<script lang="ts">
import CSS from './CSS.vue'
import { Component, Vue, Prop, Watch } from 'vue-property-decorator'
import { commonModule } from '@/store'
import { widgetMap } from '@/options/widgetMetadata'

import ClockView from '@/components/clock/View.vue'
import DateView from '@/components/date/View.vue'
import MottoView from '@/components/motto/View.vue'
import SeparatorView from '@/components/separator/View.vue'

@Component({
  components: {
    CSS,
    ClockView,
    DateView,
    MottoView,
    SeparatorView
  }
})
export default class RootView extends Vue {
  @Prop({ default: false })
  shrink!: boolean

  @Prop({ required: true })
  widgets!: {
    type: string
    id: number
  }[]

  get styleAttr () {
    return commonModule.styleAttr
  }
  get customCSS (): string {
    return commonModule.style
  }
  get animationCSS (): string {
    return commonModule.animation.css
  }

  get widgetsDOM () {
    return this.widgets.map(({ type, id }) => ({
      component: widgetMap.get(type)!.componentName,
      id
    }))
  }

  get classes () {
    return {
      shrink: this.shrink !== false,
      [commonModule.fadeIn ? 'fade-in' : 'show-immediatelly']: true
    }
  }
}
</script>

<style scoped>
.flex-container {
  align-items: center;
  display: flex;
  flex-direction: column;
  opacity: 0;
}
.flex-container:not(.shrink) {
  min-height: 100vh;
}

.flex-container > .widget {
  overflow: hidden;
}

.show-immediatelly {
  opacity: 1;
}
</style>

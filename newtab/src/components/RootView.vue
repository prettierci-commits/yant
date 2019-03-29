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
    />

    <slot />
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop, Watch } from 'vue-property-decorator'
import { commonModule } from '@/store'
import { widgetMap } from '@/options/widgetMetadata'

import ClockView from '@/components/clock/View.vue'
import DateView from '@/components/date/View.vue'
import MottoView from '@/components/motto/View.vue'
import SeparatorView from '@/components/separator/View.vue'

@Component({
  components: {
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

  styleElement = document.createElement('style')

  get styleAttrVars () {
    return {
      '--color-transition-delay': `${-Math.floor(Math.random() * 600)}s`
    }
  }
  get styleAttr () {
    return {
      ...commonModule.styleAttr,
      ...this.styleAttrVars
    }
  }

  get style (): string {
    return commonModule.style
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
      'newtab-colors': (
        !commonModule.styling.backgroundColor &&
        !commonModule.styling.color
      )
    }
  }

  @Watch('style')
  updateStyle () {
    this.styleElement.innerHTML = this.style
  }

  mounted () {
    this.updateStyle()
    document.body.appendChild(this.styleElement)
  }

  beforeDestroy () {
    this.styleElement!.parentNode!.removeChild(this.styleElement)
  }
}
</script>

<style scoped>
.flex-container {
  align-items: center;
  display: flex;
  flex-direction: column;
}
.flex-container:not(.shrink) {
  min-height: 100vh;
}
</style>

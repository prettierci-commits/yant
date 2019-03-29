<template>
  <div
    class="flex-container newtab"
    :class="classes"
    :style="containerStyle"
  >
    <div
      :is="component"
      v-for="({ component, id }, i) in widgetsDOM"
      :key="i"
      :widget-id="id"
    />
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator'
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

  get widgetsDOM () {
    return this.widgets.map(({ type, id }) => ({
      component: widgetMap.get(type)!.componentName,
      id
    }))
  }

  get classes () {
    return {
      shrink: this.shrink !== false
    }
  }

  get containerStyle () {
    return {
      '--color-transition-delay': `${-Math.floor(Math.random() * 600)}s`
    }
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

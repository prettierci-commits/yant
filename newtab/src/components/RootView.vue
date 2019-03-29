<template>
  <div
    class="flex-container newtab"
    :class="classes"
  >
    <div
      :is="component"
      v-for="({ component, id }, i) in widgets"
      :key="i"
      :widget-id="id"
    />
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator'
import { widgetMap } from '@/options/widgetMetadata'
import { widgetsModule } from '@/store'

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

  widgetsModule = widgetsModule

  get widgets () {
    return widgetsModule.active.map(({ type, id }) => ({
      component: widgetMap.get(type)!.componentName,
      id
    }))
  }

  get classes () {
    return {
      shrink: this.shrink !== false
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

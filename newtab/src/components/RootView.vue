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
import { widgetsModule } from '@/store'

import ClockView from '@/components/clock/View.vue'
import DateView from '@/components/date/View.vue'
import MottoView from '@/components/motto/View.vue'

const widgetComponentMap = new Map<string, string>([
  ['clock', 'ClockView'],
  ['date', 'DateView'],
  ['motto', 'MottoView']
])

@Component({
  components: {
    ClockView,
    DateView,
    MottoView
  }
})
export default class RootView extends Vue {
  @Prop({ default: false })
  shrink!: boolean

  widgetsModule = widgetsModule

  get widgets () {
    return widgetsModule.active.map(({ type, id }) => ({
      component: widgetComponentMap.get(type)!,
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
  display: flex;
  flex-direction: column;
  justify-content: space-around;
}
.flex-container:not(.shrink) {
  min-height: 100vh;
}
</style>

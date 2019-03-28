<template>
  <div
    class="clock"
    :style="styleAttr"
  >
    <span class="hours">{{ hours }}</span>

    <span
      class="separator between-minutes-and-seconds"
      :class="{ dim: config.dimSeparators }"
    >{{ config.separator }}</span>

    <span class="minutes">{{ minutes }}</span>

    <template v-if="config.showSeconds">
      <span
        class="separator between-minutes-and-seconds"
        :class="{ dim: config.dimSeparators }"
      >{{ config.separator }}</span>

      <span
        class="seconds"
        :class="{ dim: config.dimSeconds }"
      >{{ seconds }}</span>
    </template>
  </div>
</template>

<script lang="ts">
import formatDate from 'date-fns/format'
import { Component, Vue, Prop } from 'vue-property-decorator'
import { widgetsModule, IClockConfig } from '@/store'

@Component
export default class ClockView extends Vue {
  @Prop({ required: true })
  widgetId!: number

  clockInterval: number | undefined = undefined
  date: Date = new Date()

  mounted () {
    this.clockInterval = window.setInterval(this.updateClock, 1000)
  }
  beforeDestroy () {
    window.clearInterval(this.clockInterval)
  }

  get config (): IClockConfig {
    return widgetsModule.clocks[this.widgetId]
  }

  get styleAttr () {
    return widgetsModule.generateStyleAttr(this.config.styling)
  }

  get hours () {
    return this.date.getHours().toString().padStart(2, '0')
  }
  get minutes () {
    return this.date.getMinutes().toString().padStart(2, '0')
  }
  get seconds () {
    return this.date.getSeconds().toString().padStart(2, '0')
  }

  updateClock () {
    this.date = new Date()
  }
}
</script>

<style scoped>
.clock {
  font-variant-numeric: tabular-nums;
  text-align: center;
  width: 100%;
}
.dim {
  opacity: 0.5;
}
</style>

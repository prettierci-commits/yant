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
import Updater, { nextMinute, nextSecond } from '@/lib/Updater'
import formatDate from 'date-fns/format'
import { Component, Vue, Prop, Watch } from 'vue-property-decorator'
import { widgetsModule, IClockConfig } from '@/store'

@Component
export default class ClockView extends Vue {
  @Prop({ required: true })
  widgetId!: number

  updater!: Updater
  date: Date = new Date()

  created () {
    this.updater = new Updater(this.updateDate)
  }
  mounted () {
    this.resetTimeout()
  }
  beforeDestroy () {
    this.updater.stop()
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

  @Watch('config.showSeconds')
  resetTimeout () {
    this.updateDate()

    if (this.config.showSeconds) {
      this.updater.start(nextSecond)
    } else {
      this.updater.start(nextMinute)
    }
  }

  updateDate () {
    this.date = new Date()
  }
}
</script>

<style scoped>
.clock {
  font-variant-numeric: tabular-nums;
  text-align: center;
}
.dim {
  opacity: 0.5;
}
</style>

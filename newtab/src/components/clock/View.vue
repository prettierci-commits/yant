<template>
  <div
    class="clock"
    :style="styleAttr"
  >
    <div class="time">
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
    <div
      v-if="config.showDate"
      class="date"
    >
      <span class="full-date">{{ fullDate }}</span>
    </div>
    <div
      v-if="config.showWeek"
      class="week"
    >
      <span class="full-week">Week {{ week }}</span>
    </div>
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
  get fullDate () {
    return formatDate(this.date, 'dddd, MMMM D, YYYY')
  }
  get week () {
    return formatDate(this.date, 'W')
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
.time {
  font-size: 1em;
}
.date {
  font-size: 0.25em;
}
.week {
  font-size: 0.2em;
}
</style>

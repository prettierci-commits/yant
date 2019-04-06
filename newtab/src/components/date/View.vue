<template>
  <div
    class="date"
    :style="styleAttr"
  >
    {{ textDate }}
  </div>
</template>

<script lang="ts">
import Updater, { next, getNextDate } from '@/lib/Updater'
import formatDate from 'date-fns/format'
import { Component, Vue, Prop, Watch } from 'vue-property-decorator'
import { widgetsModule, DateConfig, DateUpdateRate } from '@/store'

@Component
export default class DateView extends Vue {
  @Prop({ required: true })
  widgetId!: number

  updater!: Updater
  date: number = Date.now()

  created () {
    this.updater = new Updater(this.updateDate)
  }
  mounted () {
    this.resetTimeout()
  }
  beforeDestroy () {
    this.updater.stop()
  }

  get config (): DateConfig {
    return widgetsModule.dates[this.widgetId]
  }

  get styleAttr () {
    return widgetsModule.generateStyleAttr(this.config.styling)
  }

  get textDate () {
    return formatDate(this.date, this.config.formatString)
  }

  @Watch('config.updateRate')
  resetTimeout () {
    this.updateDate(Date.now())

    let setNextDateAndReturnMsToWait: getNextDate
    switch (this.config.updateRate) {
      case DateUpdateRate.Days:
        setNextDateAndReturnMsToWait = next.day
        break
      case DateUpdateRate.Hours:
        setNextDateAndReturnMsToWait = next.hour
        break
      case DateUpdateRate.Minutes:
        setNextDateAndReturnMsToWait = next.minute
        break
      case DateUpdateRate.Seconds:
        setNextDateAndReturnMsToWait = next.second
        break
      case DateUpdateRate.Deciseconds:
        setNextDateAndReturnMsToWait = next.decisecond
        break
      case DateUpdateRate.Centiseconds:
        setNextDateAndReturnMsToWait = next.centisecond
        break
      case DateUpdateRate.Milliseconds:
        setNextDateAndReturnMsToWait = next.millisecond
        break
      default:
        setNextDateAndReturnMsToWait = next.day
    }

    this.updater.start(setNextDateAndReturnMsToWait)
  }

  updateDate (timestamp: number) {
    this.date = timestamp
  }
}
</script>

<style scoped>
.date {
  text-align: center;
}
</style>

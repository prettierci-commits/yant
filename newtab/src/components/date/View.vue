<template>
  <div
    class="widget date"
    :style="styleAttr"
  >
    {{ textDate }}
  </div>
</template>

<script lang="ts">
import formatDate from 'date-fns/format'
import { Component, Vue, Prop, Watch } from 'vue-property-decorator'
import { widgetsModule, IDateConfig, DateUpdateRate } from '@/store'

@Component
export default class DateView extends Vue {
  @Prop({ required: true })
  widgetId!: number

  timeout: number | undefined = undefined
  date: number = Date.now()

  mounted () {
    this.resetTimeout()
  }
  beforeDestroy () {
    window.clearTimeout(this.timeout)
  }

  get config (): IDateConfig {
    return widgetsModule.dates[this.widgetId]
  }

  get styleAttr () {
    return widgetsModule.generateStyleAttr(this.config.styling)
  }

  get textDate () {
    return formatDate(this.date, this.config.formatString)
  }

  setTimeout (date: Date, setNextDateAndReturnMsToWait: (date: Date) => number) {
    this.timeout = window.setTimeout(() => {
      this.date = +date
      this.setTimeout(date, setNextDateAndReturnMsToWait)
    }, setNextDateAndReturnMsToWait(date))
  }

  @Watch('config.updateRate')
  resetTimeout () {
    const date = new Date()
    let setNextDateAndReturnMsToWait: (date: Date) => number
    switch (this.config.updateRate) {
      case DateUpdateRate.Days:
        setNextDateAndReturnMsToWait = date => {
          const now = date.setTime(Date.now())
          date.setHours(24, 0, 0, 0)
          return +date - now
        }
        break
      case DateUpdateRate.Hours:
        setNextDateAndReturnMsToWait = date => {
          const now = date.setTime(Date.now())
          date.setMinutes(60, 0, 0)
          return +date - now
        }
        break
      case DateUpdateRate.Minutes:
        setNextDateAndReturnMsToWait = date => {
          const now = date.setTime(Date.now())
          date.setSeconds(60, 0)
          return +date - now
        }
        break
      case DateUpdateRate.Seconds:
        setNextDateAndReturnMsToWait = date => {
          const now = date.setTime(Date.now())
          date.setMilliseconds(1000)
          return +date - now
        }
        break
      case DateUpdateRate.Deciseconds:
        setNextDateAndReturnMsToWait = date => {
          const now = date.setTime(Date.now())
          date.setMilliseconds(Math.floor(date.getMilliseconds() / 100 + 1) * 100)
          return +date - now
        }
        break
      case DateUpdateRate.Centiseconds:
        setNextDateAndReturnMsToWait = date => {
          const now = date.setTime(Date.now())
          date.setMilliseconds(Math.floor(date.getMilliseconds() / 10 + 1) * 10)
          return +date - now
        }
        break
      case DateUpdateRate.Milliseconds:
        setNextDateAndReturnMsToWait = date => {
          const now = date.setTime(Date.now())
          date.setMilliseconds(date.getMilliseconds() + 1)
          return +date - now
        }
        break
      default:
        setNextDateAndReturnMsToWait = date => {
          const now = date.setTime(Date.now())
          date.setSeconds(60, 0)
          return +date - now
        }
    }

    window.clearTimeout(this.timeout)
    this.setTimeout(date, setNextDateAndReturnMsToWait)
  }
}
</script>

<style scoped>
.date {
  text-align: center;
}
</style>

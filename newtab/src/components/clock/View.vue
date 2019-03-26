<template>
  <div
    class="clock"
    :style="storeModule.styleAttr"
  >
    <div class="time">
      <span class="hours">{{ hours }}</span>
      <span class="sepparator">{{ sepparator }}</span>
      <span class="minutes">{{ minutes }}</span>
      <span class="sepparator">{{ sepparator }}</span>
      <span class="seconds">{{ seconds }}</span>
    </div>
    <div class="date">
      <span class="full-date">{{ fullDate }}</span>
    </div>
    <div class="week">
      <span class="full-week">Week {{ week }}</span>
    </div>
  </div>
</template>

<script lang="ts">
import formatDate from 'date-fns/format'
import { Component, Vue } from 'vue-property-decorator'
import { clockModule } from '@/store'

@Component
export default class ClockView extends Vue {
  storeModule = clockModule

  clockInterval: number | undefined = undefined
  date: Date = new Date()
  sepparator: string = ':'

  mounted () {
    this.clockInterval = window.setInterval(this.updateClock, 1000)
  }
  beforeDestroy () {
    window.clearInterval(this.clockInterval)
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
  text-align: center;
  width: 100%;
}
.seconds {
  opacity: 0.5;
}
.sepparator {
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

<template>
  <v-container grid-list-md>
    <v-layout
      row
      wrap
    >
      <v-flex xs12>
        <v-text-field
          v-model="formatString"
          label="Format"
        />
      </v-flex>

      <v-flex xs12>
        <Styling v-model="styling" />
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script lang="ts">
import Styling from '@/components/options/Styling.vue'
import formatDate from 'date-fns/format'
import { Component, Vue, Prop } from 'vue-property-decorator'
import { widgetsModule, IDateConfig, IStyling, DateUpdateRate } from '@/store'

@Component({
  components: {
    Styling
  }
})
export default class DateOptions extends Vue {
  @Prop({ required: true })
  widgetId!: number

  get config (): IDateConfig {
    return widgetsModule.dates[this.widgetId]
  }

  get styling (): IStyling {
    return this.config.styling
  }
  set styling (v: IStyling) {
    this.save('styling', v)
  }

  get formatString (): string {
    return this.config.formatString
  }
  set formatString (v: string) {
    this.save('formatString', v)
    this.save('updateRate', this.computeUpdateRate(v))
  }

  computeUpdateRate (format: string): DateUpdateRate {
    const d1 = new Date(0)
    const d2 = new Date(d1)

    function doDateStringsDiffer () {
      return formatDate(d1, format) !== formatDate(d2, format)
    }

    d2.setMilliseconds(9)
    if (doDateStringsDiffer()) {
      return DateUpdateRate.Milliseconds
    }

    d2.setMilliseconds(99)
    if (doDateStringsDiffer()) {
      return DateUpdateRate.Centiseconds
    }

    d2.setMilliseconds(999)
    if (doDateStringsDiffer()) {
      return DateUpdateRate.Deciseconds
    }

    d2.setSeconds(59)
    if (doDateStringsDiffer()) {
      return DateUpdateRate.Seconds
    }

    d2.setMinutes(59)
    if (doDateStringsDiffer()) {
      return DateUpdateRate.Minutes
    }

    d2.setHours(23)
    if (doDateStringsDiffer()) {
      return DateUpdateRate.Hours
    }

    return DateUpdateRate.Days
  }

  save (key: string, value: any): void {
    widgetsModule.setDate({
      id: this.widgetId,
      value: {
        ...this.config,
        [key]: value
      }
    })
  }
}
</script>

<style scoped>
</style>

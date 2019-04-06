<template>
  <v-container grid-list-md>
    <v-layout
      row
      wrap
    >
      <v-flex
        xs12
        sm6
        md3
      >
        <v-text-field
          v-model="separator"
          label="Separator"
        />
      </v-flex>
      <v-flex
        xs12
        sm6
        md3
      >
        <v-switch
          v-model="showSeconds"
          label="Seconds"
        />
      </v-flex>
      <v-flex
        xs12
        sm6
        md3
      >
        <v-switch
          v-model="dimSeconds"
          label="Dim seconds"
        />
      </v-flex>
      <v-flex
        xs12
        sm6
        md3
      >
        <v-switch
          v-model="dimSeparators"
          label="Dim separators"
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
import { Component, Vue, Prop } from 'vue-property-decorator'
import { widgetsModule, ClockConfig, StylingConfig } from '@/store'

@Component({
  components: {
    Styling
  }
})
export default class ClockOptions extends Vue {
  @Prop({ required: true })
  widgetId!: number

  get config (): ClockConfig {
    return widgetsModule.clocks[this.widgetId]
  }

  get styling (): StylingConfig {
    return this.config.styling
  }
  set styling (v: StylingConfig) {
    this.save('styling', v)
  }

  get separator (): string {
    return this.config.separator
  }
  set separator (v: string) {
    this.save('separator', v)
  }

  get showSeconds (): boolean {
    return this.config.showSeconds
  }
  set showSeconds (v: boolean) {
    this.save('showSeconds', v)
  }

  get dimSeconds (): boolean {
    return this.config.dimSeconds
  }
  set dimSeconds (v: boolean) {
    this.save('dimSeconds', v)
  }

  get dimSeparators (): boolean {
    return this.config.dimSeparators
  }
  set dimSeparators (v: boolean) {
    this.save('dimSeparators', v)
  }

  save (key: string, value: any): void {
    widgetsModule.setClock({
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

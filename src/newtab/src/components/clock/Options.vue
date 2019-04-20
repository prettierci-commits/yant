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
    return widgetsModule.configs[this.widgetId] as ClockConfig
  }
  setConfig (config: Partial<ClockConfig>): void {
    widgetsModule.setConfig({
      id: this.widgetId,
      config: {
        ...this.config,
        ...config
      }
    })
  }

  get styling (): StylingConfig {
    return this.config.styling
  }
  set styling (v: StylingConfig) {
    this.setConfig({ styling: v })
  }

  get separator (): string {
    return this.config.separator
  }
  set separator (v: string) {
    this.setConfig({ separator: v })
  }

  get showSeconds (): boolean {
    return this.config.showSeconds
  }
  set showSeconds (v: boolean) {
    this.setConfig({ showSeconds: v })
  }

  get dimSeconds (): boolean {
    return this.config.dimSeconds
  }
  set dimSeconds (v: boolean) {
    this.setConfig({ dimSeconds: v })
  }

  get dimSeparators (): boolean {
    return this.config.dimSeparators
  }
  set dimSeparators (v: boolean) {
    this.setConfig({ dimSeparators: v })
  }
}
</script>

<style scoped>
</style>

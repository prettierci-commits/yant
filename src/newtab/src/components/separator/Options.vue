<template>
  <v-container grid-list-md>
    <v-layout
      row
      wrap
    >
      <v-flex
        xs12
        sm6
      >
        <v-text-field
          v-model.number="flexGrow"
          :min="0"
          :step="1"
          label="Fill available space (flex grow)"
          type="number"
        />
      </v-flex>

      <v-flex
        xs12
        sm6
      >
        <v-text-field
          v-model.number="minHeight"
          :min="0"
          :step="1"
          label="Minimum height"
          type="number"
        />
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script lang="ts">
import Styling from '@/components/options/Styling.vue'
import { Component, Vue, Prop } from 'vue-property-decorator'
import { widgetsModule, SeparatorConfig, StylingConfig } from '@/store'

@Component({
  components: {
    Styling
  }
})
export default class SeparatorOptions extends Vue {
  @Prop({ required: true })
  widgetId!: number

  get config (): SeparatorConfig {
    return widgetsModule.configs[this.widgetId] as SeparatorConfig
  }
  setConfig (config: Partial<SeparatorConfig>): void {
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
  setStyling (styling: Partial<StylingConfig>): void {
    this.setConfig({
      styling: {
        ...this.styling,
        ...styling
      }
    })
  }

  get flexGrow (): number | undefined {
    return this.styling.flexGrow
  }
  set flexGrow (v: number | undefined) {
    this.setStyling({ flexGrow: v })
  }

  get minHeight (): number | undefined {
    return this.styling.minHeight
  }
  set minHeight (v: number | undefined) {
    this.setStyling({ minHeight: v })
  }
}
</script>

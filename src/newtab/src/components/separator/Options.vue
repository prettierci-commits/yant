<template>
  <v-container grid-list-md>
    <v-layout
      row
      wrap
    >
      <v-flex xs12>
        <v-text-field
          v-model="flexGrow"
          :min="0"
          :step="1"
          label="Fill available space (flex grow)"
          type="number"
        />
      </v-flex>

      <v-flex xs12>
        <Styling
          v-model="styling"
          nofont
          nopadding
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
    return widgetsModule.separators[this.widgetId]
  }

  get styling (): StylingConfig {
    return this.config.styling
  }
  set styling (v: StylingConfig) {
    this.save('styling', v)
  }

  get flexGrow (): number | undefined {
    return this.config.flexGrow
  }
  set flexGrow (v: number | undefined) {
    this.save('flexGrow', v || 0)
  }

  save (key: string, value: any): void {
    widgetsModule.setSeparator({
      id: this.widgetId,
      value: {
        ...this.config,
        [key]: value
      }
    })
  }
}
</script>

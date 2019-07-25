<template>
  <v-container grid-list-md>
    <v-layout
      row
      wrap
    >
      <v-flex xs12>
        <v-textarea
          v-model="text"
          auto-grow
          label="Text"
        />
      </v-flex>

      <v-flex xs12>
        <Styling v-model="styling" />
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script lang="ts">
import Styling from "@/components/options/Styling.vue";
import { Component, Vue, Prop } from "vue-property-decorator";
import { widgetsModule, MottoConfig, StylingConfig } from "@/store";

@Component({
  components: {
    Styling
  }
})
export default class MottoOptions extends Vue {
  @Prop({ required: true })
  widgetId!: number;

  get config(): MottoConfig {
    return widgetsModule.configs[this.widgetId] as MottoConfig;
  }
  setConfig(config: Partial<MottoConfig>): void {
    widgetsModule.setConfig({
      id: this.widgetId,
      config: {
        ...this.config,
        ...config
      }
    });
  }

  get styling(): StylingConfig {
    return this.config.styling;
  }
  set styling(styling: StylingConfig) {
    this.setConfig({ styling });
  }

  get text(): string {
    return this.config.text;
  }
  set text(text: string) {
    this.setConfig({ text });
  }
}
</script>

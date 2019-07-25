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
          v-model.number="amount"
          label="Amount"
          type="number"
        />
      </v-flex>

      <v-flex
        xs12
        sm6
      >
        <v-text-field
          v-model.number="speed"
          label="Speed"
          type="number"
          suffix="per hour"
        />
      </v-flex>

      <v-flex xs12>
        <v-text-field
          v-model="symbols"
          label="Symbols"
          clearable
        />
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";
import { SnowConfig, defaultWidgetConfigs, widgetsModule } from "@/store";

@Component
export default class SnowOptions extends Vue {
  @Prop({ required: true })
  widgetId!: number;

  get config(): SnowConfig {
    return widgetsModule.configs[this.widgetId] as SnowConfig;
  }
  setConfig(v: Partial<SnowConfig>): void {
    widgetsModule.setConfig({
      id: this.widgetId,
      config: {
        ...this.config,
        ...v
      }
    });
  }

  get amount(): number {
    return this.config.amount;
  }
  set amount(v: number) {
    this.setConfig({
      amount: v
    });
  }

  get speed(): number {
    return this.config.speed;
  }
  set speed(v: number) {
    this.setConfig({
      speed: v
    });
  }

  get symbols(): string {
    return this.config.symbols.join("");
  }
  set symbols(v: string) {
    this.setConfig({
      symbols: v && v.length ? v.split("") : defaultWidgetConfigs.snow.symbols
    });
  }
}
</script>

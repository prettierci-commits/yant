<template>
  <div
    :style="styleAttr"
    class="separator"
  />
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";
import { widgetsModule, SeparatorConfig } from "@/store";

@Component
export default class SeparatorView extends Vue {
  @Prop({ required: true })
  widgetId!: number;

  get config(): SeparatorConfig {
    return widgetsModule.configs[this.widgetId] as SeparatorConfig;
  }

  get styleAttr() {
    return widgetsModule.generateStyleAttr(this.config.styling);
  }
}
</script>

<style scoped>
.separator {
  width: 100%;
}
</style>

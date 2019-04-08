<template>
  <!-- eslint-disable vue/no-v-html -->
  <div
    :style="styleAttr"
    class="motto"
    v-html="config.text"
  />
  <!--eslint-enable-->
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator'
import { widgetsModule, MottoConfig } from '@/store'

@Component
export default class MottoView extends Vue {
  @Prop({ required: true })
  widgetId!: number

  get config (): MottoConfig {
    return widgetsModule.mottos[this.widgetId]
  }

  get styleAttr () {
    return widgetsModule.generateStyleAttr(this.config.styling)
  }
}
</script>

<style scoped>
.motto {
  text-align: center;
  white-space: pre-wrap;
}
</style>

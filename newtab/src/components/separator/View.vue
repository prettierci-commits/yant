<template>
  <div
    :style="styleAttr"
    class="widget separator"
  />
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator'
import { widgetsModule, ISeparatorConfig } from '@/store'

@Component
export default class SeparatorView extends Vue {
  @Prop({ required: true })
  widgetId!: number

  get config (): ISeparatorConfig {
    return widgetsModule.separators[this.widgetId]
  }

  get styleAttr () {
    return {
      ...widgetsModule.generateStyleAttr(this.config.styling),
      flexGrow: this.config.flexGrow
    }
  }
}
</script>

<style scoped>
.separator {
  width: 100%;
}
</style>

<template>
  <div :style="style">
    <slot />
  </div>
</template>

<script lang="ts">
import CommonModule, { getModule } from '@/store/Common'
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class CommonWrapper extends Vue {
  get storeModule (): CommonModule {
    return getModule(CommonModule, this.$store)
  }

  get style () {
    return {
      color: this.storeModule.font.color,
      fontSize: `${this.storeModule.font.size}px`,
      fontWeight: `${this.storeModule.font.weight}`,
      lineHeight: `${this.storeModule.font.lineHeight}`
    }
  }
}
</script>

<style scoped>
</style>

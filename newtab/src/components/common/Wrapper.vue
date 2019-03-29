<template>
  <div :style="storeModule.styleAttr">
    <slot />
  </div>
</template>

<script lang="ts">
import { commonModule } from '@/store'
import { Component, Vue, Watch } from 'vue-property-decorator'

@Component
export default class CommonWrapper extends Vue {
  storeModule = commonModule
  styleElement = document.createElement('style')

  get style (): string {
    return this.storeModule.style
  }

  @Watch('style')
  updateStyle () {
    this.styleElement.innerHTML = this.style
  }

  mounted () {
    this.updateStyle()
    document.body.appendChild(this.styleElement)
  }

  beforeDestroy () {
    this.styleElement!.parentNode!.removeChild(this.styleElement)
  }
}
</script>

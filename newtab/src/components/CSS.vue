<template>
  <div style="display: none !important;" />
</template>

<script lang="ts">
import { Component, Vue, Prop, Watch } from 'vue-property-decorator'

@Component
export default class CSS extends Vue {
  @Prop({ required: true })
  value!: string

  styleElement = document.createElement('style')

  @Watch('value')
  updateStyle () {
    this.styleElement.innerHTML = this.value
  }

  created () {
    this.styleElement.setAttribute('type', 'text/css')
  }

  mounted () {
    this.updateStyle()
    document.head.appendChild(this.styleElement)
  }

  beforeDestroy () {
    this.styleElement!.parentNode!.removeChild(this.styleElement)
  }
}
</script>

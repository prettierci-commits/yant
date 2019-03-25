<template>
  <div :style="storeModule.styleAttr">
    <slot />
  </div>
</template>

<script lang="ts">
import { commonModule } from '@/store'
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class CommonWrapper extends Vue {
  storeModule = commonModule
}
</script>

<style scoped>
</style>

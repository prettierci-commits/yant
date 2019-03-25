<template>
  <div
    :style="storeModule.styleAttr"
    class="motto"
    v-html="storeModule.text"
  />
</template>

<script lang="ts">
import { mottoModule } from '@/store'
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class MottoView extends Vue {
  storeModule = mottoModule
}
</script>

<style scoped>
.motto {
  text-align: center;
  white-space: pre-wrap;
  width: 100%;
}
</style>

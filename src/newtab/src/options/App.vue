<template>
  <div
    v-if="ready"
    id="app"
  >
    <router-view />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { storeReady } from '@/store'

@Component
export default class App extends Vue {
  ready = false

  async mounted () {
    console.time('ready')
    await storeReady
    this.ready = true
    console.timeEnd('ready')
  }
}
</script>

<style>
body {
  margin: 0px;
  padding: 0px;
}
</style>

<template>
  <div id="app">
    <RootView />
  </div>
</template>

<script lang="ts">
import RootView from '@/components/RootView.vue'
import { Component, Vue } from 'vue-property-decorator'

@Component({
  components: {
    RootView
  }
})
export default class App extends Vue {
}
</script>

<style>
body {
  margin: 0px;
  padding: 0px;
}
html {
  overflow-y: auto;
  overflow-x: hidden;
}
</style>

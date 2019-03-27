<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component
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

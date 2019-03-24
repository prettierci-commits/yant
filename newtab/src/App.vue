<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script lang="ts">
import RootView from '@/components/RootView.vue'
import { Component, Vue } from 'vue-property-decorator'

const Options = () => import(
  /* webpackChunkName: "options" */ '@/components/Options.vue'
)

@Component({
  components: {
    Options,
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

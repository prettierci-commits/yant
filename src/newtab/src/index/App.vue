<template>
  <div
    v-if="ready"
    id="app"
  >
    <RootView :widgets="widgetsModule.active">
      <a
        :href="optionsLink"
        class="options-button"
      >
        <SettingsIcon />
      </a>
    </RootView>
  </div>
</template>

<script lang="ts">
import RootView from '@/components/RootView.vue'
import { Component, Vue } from 'vue-property-decorator'
import { storeReady, widgetsModule } from '@/store'

import SettingsIcon from '@/assets/settings.svg'

@Component({
  components: {
    RootView,
    SettingsIcon
  }
})
export default class App extends Vue {
  widgetsModule = widgetsModule

  ready = false

  async mounted () {
    await storeReady
    this.ready = true
  }

  get optionsLink (): string {
    return `./options.html#${location.hash.slice(1)}`
  }
}
</script>

<style>
body {
  margin: 0px;
  padding: 0px;
}
</style>

<style scoped>
.options-button {
  color: inherit;
  cursor: pointer;
  height: 40px;
  margin: 0px;
  opacity: 0;
  padding: 40px;
  position: fixed;
  right: 0px;
  top: 0px;
  width: 40px;
  z-index: 5;
}
.options-button:hover {
  opacity: 1;
}

svg {
  fill: currentColor;
}
</style>

<template>
  <div id="app">
    <CommonWrapper>
      <RootView :widgets="widgetsModule.active" />

      <SettingsIcon
        class="options-button"
        @click="openOptions"
      />
    </CommonWrapper>
  </div>
</template>

<script lang="ts">
import RootView from '@/components/RootView.vue'
import { Component, Vue } from 'vue-property-decorator'
import { widgetsModule } from '@/store'

import CommonWrapper from '@/components/common/Wrapper.vue'
import SettingsIcon from '@/assets/settings.svg'

@Component({
  components: {
    CommonWrapper,
    RootView,
    SettingsIcon
  }
})
export default class App extends Vue {
  widgetsModule = widgetsModule

  openOptions () {
    window.location.href = './options.html'
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

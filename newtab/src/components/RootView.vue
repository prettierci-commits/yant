<template>
  <div :style="style">
    <div class="flex-container">
      <CommonWrapper>
        <Motto />
      </CommonWrapper>
      <CommonWrapper>
        <Clock />
      </CommonWrapper>
    </div>

    <div
      class="options-button mdi mdi-settings"
      @click="openOptions"
    />
  </div>
</template>

<script lang="ts">
import CommonModule, { getModule } from '@/store/Common'
import { Component, Vue } from 'vue-property-decorator'

import CommonWrapper from '@/components/common/Wrapper.vue'

import Clock from '@/components/clock/View.vue'
import Motto from '@/components/motto/View.vue'

@Component({
  components: {
    CommonWrapper,

    Clock,
    Motto
  }
})
export default class App extends Vue {
  get storeModule (): CommonModule {
    return getModule(CommonModule, this.$store)
  }

  get style () {
    return {
      backgroundColor: this.storeModule.background,
      color: this.storeModule.font.color
    }
  }

  openOptions () {
    this.$router.push({
      name: 'options'
    })
  }
}
</script>

<style scoped>
.flex-container {
  display: flex;
  flex-direction: column;
  font-family: Source Serif Pro Light;
  justify-content: space-around;
  min-height: 100vh;
}
.flex-container > * {
  margin: 10vh 0px;
}

.options-button {
  cursor: pointer;
  font-size: 40px;
  opacity: 0;
  padding: 20px;
  position: fixed;
  right: 0px;
  top: 0px;
  z-index: 5;
}
.options-button:hover {
  opacity: 1;
}
</style>

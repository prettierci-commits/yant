<template>
  <div>
    <CommonWrapper class="flex-container">
      <Motto />
      <Clock />

      <div
        class="options-button mdi mdi-settings"
        @click="openOptions"
      />
    </CommonWrapper>
  </div>
</template>

<script lang="ts">
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
  justify-content: space-around;
  min-height: 100vh;
}
.flex-container > * {
  margin: 10vh 0px;
}

.options-button {
  cursor: pointer;
  font-size: 40px;
  margin: 0px;
  opacity: 0;
  padding: 1ex;
  position: fixed;
  right: 0px;
  top: 0px;
  z-index: 5;
}
.options-button:hover {
  opacity: 1;
}
</style>

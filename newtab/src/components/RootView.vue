<template>
  <CommonWrapper :class="classes">
    <div
      :is="component"
      v-for="(component, i) in componentOrder"
      :key="i"
    />

    <div
      class="options-button mdi mdi-settings"
      @click="openOptions"
    />
  </CommonWrapper>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator'
import { orderModule } from '@/store'

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
export default class RootView extends Vue {
  @Prop({ default: false })
  shrink!: boolean

  @Prop({ default: false })
  noopts!: boolean

  get componentOrder () {
    return orderModule.componentOrder
  }

  get classes () {
    return {
      'flex-container': true,
      noopts: this.noopts !== false,
      shrink: this.shrink !== false
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
  justify-content: space-around;
}
.flex-container:not(.shrink) {
  min-height: 100vh;
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
.noopts > .options-button {
  display: none;
}
</style>

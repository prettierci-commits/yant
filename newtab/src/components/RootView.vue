<template>
  <div :class="classes">
    <div
      :is="component"
      v-for="(component, i) in componentOrder"
      :key="i"
    />
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator'
import { orderModule } from '@/store'

import Clock from '@/components/clock/View.vue'
import Motto from '@/components/motto/View.vue'

@Component({
  components: {
    Clock,
    Motto
  }
})
export default class RootView extends Vue {
  @Prop({ default: false })
  shrink!: boolean

  get componentOrder () {
    return orderModule.componentOrder
  }

  get classes () {
    return {
      'flex-container': true,
      shrink: this.shrink !== false
    }
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
</style>

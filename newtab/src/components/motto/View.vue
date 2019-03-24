<template>
  <div
    :style="style"
    class="motto"
    v-text="text"
  />
</template>

<script lang="ts">
import MottoModule, { getModule } from '@/store/Motto'
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class Motto extends Vue {
  get storeModule (): MottoModule {
    return getModule(MottoModule, this.$store)
  }

  get style () {
    return {
      fontSize: this.storeModule.fontScale != null
        ? `${this.storeModule.fontScale}em`
        : null
    }
  }

  get text (): string {
    return this.storeModule.text
  }
}
</script>

<style scoped>
.motto {
  text-align: center;
  white-space: pre-wrap;
  width: 100%;
}
</style>

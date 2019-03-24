<template>
  <v-container grid-list-md>
    <v-layout
      row
      wrap
    >
      <v-flex xs12>
        <v-text-field
          v-model="fontScale"
          clearable
          label="Font scale"
          min="0.1"
          step="0.1"
          type="number"
        />
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script lang="ts">
import ClockModule from '@/store/Clock'
import { Component, Vue } from 'vue-property-decorator'
import { getModule } from 'vuex-module-decorators'

@Component
export default class Motto extends Vue {
  get storeModule (): ClockModule {
    return getModule(ClockModule, this.$store)
  }

  get fontScale (): number {
    return this.storeModule.fontScale
  }
  set fontScale (value: number) {
    this.storeModule.setFontSize(value)
  }
}
</script>

<style scoped>
</style>

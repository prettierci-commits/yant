<template>
  <v-container grid-list-md>
    <v-layout
      row
      wrap
    >
      <v-flex xs12>
        <v-switch
          v-model="fadeIn"
          label="Fade in"
        />
      </v-flex>

      <v-flex xs12>
        <Styling
          v-model="styling"
          absolute
          animated-colors
          nosize
        />
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script lang="ts">
import Color from '@/components/options/Color.vue'
import Styling from '@/components/options/Styling.vue'
import { Component, Vue } from 'vue-property-decorator'
import { commonModule, StylingConfig } from '@/store'

@Component({
  components: {
    Color,
    Styling
  }
})
export default class CommonOptions extends Vue {
  storeModule = commonModule

  get styling (): StylingConfig {
    return this.storeModule.styling
  }
  set styling (v: StylingConfig) {
    this.storeModule.setStyling(v)
  }

  get fadeIn (): boolean {
    return this.storeModule.fadeIn
  }
  set fadeIn (v: boolean) {
    this.storeModule.setFadeIn(v)
  }
}
</script>

<style scoped>
</style>

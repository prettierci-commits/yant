<template>
  <v-container grid-list-md>
    <v-layout
      row
      wrap
    >
      <v-flex xs12>
        <FontOptions v-model="font" />
      </v-flex>
      <v-flex xs12>
        <Color
          v-model="background"
          label="Background"
        />
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script lang="ts">
import CommonModule, { getModule, IFont } from '@/store/Common'
import FontOptions from '@/components/options/Font.vue'
import Color from '@/components/options/Color.vue'
import { Component, Vue } from 'vue-property-decorator'

@Component({
  components: {
    Color,
    FontOptions
  }
})
export default class CommonOptions extends Vue {
  get storeModule (): CommonModule {
    return getModule(CommonModule, this.$store)
  }

  get font (): IFont {
    return this.storeModule.font
  }
  set font (v: IFont) {
    this.storeModule.setFont(v)
  }

  get background (): string {
    return this.storeModule.background
  }
  set background (v: string) {
    this.storeModule.setBackground(v)
  }
}
</script>

<style scoped>
</style>

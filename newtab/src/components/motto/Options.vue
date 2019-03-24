<template>
  <v-container grid-list-md>
    <v-layout
      row
      wrap
    >
      <v-flex xs12>
        <v-textarea
          v-model="text"
          auto-grow
          label="Text"
        />
      </v-flex>

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
import MottoModule, { getModule } from '@/store/Motto'
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class Motto extends Vue {
  get storeModule (): MottoModule {
    return getModule(MottoModule, this.$store)
  }

  get text (): string {
    return this.storeModule.text
  }
  set text (value: string) {
    this.storeModule.setText(value)
  }

  get fontScale (): number | null {
    return this.storeModule.fontScale
  }
  set fontScale (value: number | null) {
    this.storeModule.setFontSize(value)
  }
}
</script>

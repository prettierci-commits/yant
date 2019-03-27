<template>
  <v-container grid-list-md>
    <v-layout
      row
      wrap
    >
      <v-flex
        xs12
        sm6
        md4
        xl2
      >
        <v-text-field
          v-model="separator"
          label="Separator"
        />
      </v-flex>
      <v-flex
        xs12
        sm6
        md4
        xl2
      >
        <v-switch
          v-model="showDate"
          label="Date"
        />
      </v-flex>
      <v-flex
        xs12
        sm6
        md4
        xl2
      >
        <v-switch
          v-model="showWeek"
          label="Week"
        />
      </v-flex>
      <v-flex
        xs12
        sm6
        md4
        xl2
      >
        <v-switch
          v-model="showSeconds"
          label="Seconds"
        />
      </v-flex>
      <v-flex
        xs12
        sm6
        md4
        xl2
      >
        <v-switch
          v-model="dimSeconds"
          label="Dim seconds"
        />
      </v-flex>
      <v-flex
        xs12
        sm6
        md4
        xl2
      >
        <v-switch
          v-model="dimSeparators"
          label="Dim separators"
        />
      </v-flex>

      <v-flex xs12>
        <Styling v-model="styling" />
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script lang="ts">
import Styling from '@/components/options/Styling.vue'
import { Component, Vue } from 'vue-property-decorator'
import { clockModule, IStyling } from '@/store'

@Component({
  components: {
    Styling
  }
})
export default class ClockOptions extends Vue {
  storeModule = clockModule

  get styling (): IStyling {
    return this.storeModule.styling
  }
  set styling (v: IStyling) {
    this.storeModule.setStyling(v)
  }

  get separator (): string {
    return this.storeModule.separator
  }
  set separator (v: string) {
    this.storeModule.setSeparator(v)
  }

  get showDate (): boolean {
    return this.storeModule.showDate
  }
  set showDate (v: boolean) {
    this.storeModule.setShowDate(v)
  }

  get showWeek (): boolean {
    return this.storeModule.showWeek
  }
  set showWeek (v: boolean) {
    this.storeModule.setShowWeek(v)
  }

  get showSeconds (): boolean {
    return this.storeModule.showSeconds
  }
  set showSeconds (v: boolean) {
    this.storeModule.setShowSeconds(v)
  }

  get dimSeconds (): boolean {
    return this.storeModule.dimSeconds
  }
  set dimSeconds (v: boolean) {
    this.storeModule.setDimSeconds(v)
  }

  get dimSeparators (): boolean {
    return this.storeModule.dimSeparators
  }
  set dimSeparators (v: boolean) {
    this.storeModule.setDimSeparators(v)
  }
}
</script>

<style scoped>
</style>

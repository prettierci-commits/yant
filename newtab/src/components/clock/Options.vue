<template>
  <v-container grid-list-md>
    <v-layout
      row
      wrap
    >
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
export default class Motto extends Vue {
  storeModule = clockModule

  get styling (): IStyling {
    return this.storeModule.styling
  }
  set styling (v: IStyling) {
    this.storeModule.setStyling(v)
  }
}
</script>

<style scoped>
</style>

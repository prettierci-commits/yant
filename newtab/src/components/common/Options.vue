<template>
  <v-container grid-list-md>
    <v-layout
      row
      wrap
    >
      <v-flex xs12>
        <Styling
          v-model="styling"
          absolute
        />
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script lang="ts">
import Color from '@/components/options/Color.vue'
import Styling from '@/components/options/Styling.vue'
import { Component, Vue } from 'vue-property-decorator'
import { commonModule, IStyling } from '@/store'

@Component({
  components: {
    Color,
    Styling
  }
})
export default class CommonOptions extends Vue {
  storeModule = commonModule

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

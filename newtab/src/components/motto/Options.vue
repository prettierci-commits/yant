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
        <Styling v-model="styling" />
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script lang="ts">
import Styling from '@/components/options/Styling.vue'
import { Component, Vue } from 'vue-property-decorator'
import { mottoModule, IStyling } from '@/store'

@Component({
  components: {
    Styling
  }
})
export default class MottoOptions extends Vue {
  storeModule = mottoModule

  get text (): string {
    return this.storeModule.text
  }
  set text (v: string) {
    this.storeModule.setText(v)
  }

  get styling (): IStyling {
    return this.storeModule.styling
  }
  set styling (v: IStyling) {
    this.storeModule.setStyling(v)
  }
}
</script>

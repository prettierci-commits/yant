<template>
  <v-container grid-list-md>
    <v-layout
      row
      wrap
    >
      <v-flex xs12>
        <v-textarea
          v-model="style"
          auto-grow
          label="CSS"
          rows="10"
        />
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script lang="ts">
import { Component, Vue, Watch } from 'vue-property-decorator'
import { commonModule } from '@/store'

@Component
export default class StyleOptions extends Vue {
  get style (): string {
    return commonModule.style
  }
  set style (v: string) {
    commonModule.setStyle(v)
  }
}
</script>

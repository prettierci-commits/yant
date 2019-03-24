<template>
  <div class="main-container">
    <div
      v-for="(tag, i) in tags"
      :key="i"
      class="text-container"
    >
      <span
        :is="tag"
      >{{ testText }}</span>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class CommonView extends Vue {
  testText: string = 'Nechť již hříšné saxofony ďáblů rozezvučí síň úděsnými tóny waltzu, tanga a quickstepu.'
  tags: string[] = ['span', 'b', 'i', 's', 'u', 'sub', 'sup', 'samp']
}
</script>

<style scoped>
.main-container {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
}

.text-container {
  display: inline-block;
  margin: 1em;
  width: 12em;
}
</style>

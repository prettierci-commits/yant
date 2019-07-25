<template>
  <div class="main-container">
    <div
      v-for="(text, i) in texts"
      :key="i"
      class="text-container"
    >
      {{ text }}
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class CommonView extends Vue {
  texts: string[] = [
    "Nechť již hříšné saxofony ďáblů rozezvučí síň úděsnými tóny waltzu, tanga a quickstepu.",
    "Kŕdeľ šťastných ďatľov učí pri ústí Váhu mĺkveho koňa obhrýzať kôru a žrať čerstvé mäso.",
    "A quick movement of the enemy will jeopardize six gunboats.",
    "Xaver schreibt für Wikipedia zum Spaß quälend lang über Yoga, Soja und Öko."
  ];
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

<template>
  <RootView shrink />
</template>

<script lang="ts">
import RootView from "@/components/RootView.vue";
import { Component, Vue } from "vue-property-decorator";

@Component({
  components: {
    RootView
  }
})
export default class WidgetsView extends Vue {}
</script>

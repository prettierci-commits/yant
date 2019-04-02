<template>
  <div class="color-tile-list">
    <div class="heading-container">
      <div>Font</div>
      <div>Background</div>
    </div>

    <ColorFgBgTile
      v-for="(color, i) in value"
      :key="i"
      :value="value[i]"
      @input="v => $emit('input', [...value.slice(0, i), v, ...value.slice(i + 1)])"
    />
  </div>
</template>

<script lang="ts">
import ColorFgBgTile from './ColorFgBgTile.vue'
import vuetifyColors from 'vuetify/es5/util/colors'
import { Component, Vue, Prop } from 'vue-property-decorator'

@Component({
  components: {
    ColorFgBgTile
  }
})
export default class Color extends Vue {
  @Prop({ required: true })
  value!: string[]
}
</script>

<style scoped>
.color-tile-list {
  display: flex;
  flex-flow: row nowrap;
  height: 6em;
}
.color-tile-list > * {
  flex-grow: 1;
}

.heading-container {
  display: flex;
  flex-flow: column nowrap;
  flex-grow: 0;
  justify-content: space-around;
  margin-right: 1ex;
}
</style>

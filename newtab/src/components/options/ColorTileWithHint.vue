<template>
  <ColorTile
    v-model="color"
    title="Foreground"
  >
    <div
      v-show="color !== hint"
      :style="{ backgroundColor: hint }"
      class="hint"
      title="Recommended color"
      @click.stop="color = hint"
    />
    <slot />
  </ColorTile>
</template>

<script lang="ts">
import ColorTile from './ColorTile.vue'
import vuetifyColors from 'vuetify/es5/util/colors'
import { Component, Emit, Prop, Vue } from 'vue-property-decorator'

type value = string

@Component({
  components: {
    ColorTile
  }
})
export default class Color extends Vue {
  @Prop({ required: true })
  value!: value

  @Prop({ required: true })
  hint!: string

  get color (): string {
    return this.value
  }
  set color (v: string) {
    this.input(v)
  }

  @Emit()
  input (v: value): value {
    return v
  }
}
</script>

<style scoped>
.hint {
  border-radius: 0px 4px;

  position: absolute;
  top: 0px;
  right: 0px;

  width: 1em;
  max-width: 50%;
  height: 1em;
  max-height: 50%;
}
.open .hint {
  visibility: hidden;
}
</style>

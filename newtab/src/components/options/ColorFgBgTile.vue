<template>
  <div class="color-fg-bg-container">
    <ColorTile
      v-model="fg"
      title="Foreground"
    />
    <ColorTile
      v-model="bg"
      title="Background"
    />
  </div>
</template>

<script lang="ts">
import ColorTile from './ColorTile.vue'
import vuetifyColors from 'vuetify/es5/util/colors'
import { Component, Vue, Prop } from 'vue-property-decorator'

@Component({
  components: {
    ColorTile
  }
})
export default class Color extends Vue {
  @Prop({ required: true })
  value!: {
    fg: string
    bg: string
  }

  get fg (): string {
    return this.value.fg
  }
  set fg (v: string) {
    this.$emit('input', {
      ...this.value,
      fg: v
    })
  }

  get bg (): string {
    return this.value.bg
  }
  set bg (v: string) {
    this.$emit('input', {
      ...this.value,
      bg: v
    })
  }
}
</script>

<style scoped>
.color-fg-bg-container {
  display: flex;
  flex-flow: column nowrap;
}
.color-fg-bg-container > * {
  flex-grow: 1;
}
</style>

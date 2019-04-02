<template>
  <div class="color-fg-bg-container">
    <ColorTile
      v-model="fg"
      title="Foreground"
    >
      <div
        v-show="fg !== recommendedFg"
        :style="{ backgroundColor: recommendedFg }"
        class="fg-hint"
        title="Recommended color"
        @click.stop="fg = recommendedFg"
      />
    </ColorTile>
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

  get recommendedFg () {
    return this.isColorLight(this.bg)
      ? '#000000'
      : '#ffffff'
  }

  isColorLight (hexColor: string): boolean {
    const r = parseInt(hexColor.slice(1, 3), 16)
    const g = parseInt(hexColor.slice(3, 5), 16)
    const b = parseInt(hexColor.slice(5, 7), 16)

    const hsp = Math.sqrt(
      0.299 * (r * r) +
      0.587 * (g * g) +
      0.114 * (b * b)
    )

    return hsp > 127.5
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
.fg-hint {
  border-radius: 0px 4px;

  position: absolute;
  top: 0px;
  right: 0px;

  width: 1em;
  max-width: 50%;
  height: 1em;
  max-height: 50%;
}
.open .fg-hint {
  visibility: hidden;
}
.fg-hint.light {
  background-color: #000000;
}
.fg-hint.dark {
  background-color: #ffffff;
}
</style>

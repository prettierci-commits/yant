<template>
  <div
    ref="container"
    :class="classes"
    class="color-container"
  >
    <Sketch
      v-show="showPicker"
      :preset-colors="colors"
      :style="pickerStyle"
      :value="{ hex: value }"
      class="color-picker"
      disable-alpha
      @click.stop
      @input="v => $emit('input', v.hex)"
    />

    <div
      :style="tileStyle"
      class="color-tile"
      @click.stop="openPicker"
    >
      <slot />
    </div>

    <div
      v-show="showPicker"
      class="overlay"
      @click.stop="showPicker = false"
    />
  </div>
</template>

<script lang="ts">
import vuetifyColors from 'vuetify/es5/util/colors'
import { Component, Vue, Prop } from 'vue-property-decorator'
import { Sketch } from 'vue-color'

@Component({
  components: {
    Sketch
  }
})
export default class Color extends Vue {
  @Prop({ required: true })
  value!: string

  showPicker = false
  pickerWidth = 220 // seems constant
  pickerLeft = 0

  get pickerStyle () {
    return {
      left: `${this.pickerLeft}px`
    }
  }

  get tileStyle () {
    return {
      backgroundColor: this.value
    }
  }

  get classes () {
    return {
      open: this.showPicker
    }
  }

  get colors (): string[] {
    return [
      '#ffffff',
      '#cdcdcd',
      '#888888',
      '#303030',
      '#000000'
    ].concat(
      ...Object.values(vuetifyColors)
        .map(({ base }) => base ? [base] : [])
    )
  }

  openPicker () {
    const container = this.$refs.container as HTMLElement
    const margin = 40

    const bcr = container.getBoundingClientRect()

    let offset = bcr.width / 2 - this.pickerWidth / 2
    const leftOverflow = 0 - (bcr.left + offset - margin)
    const rightOverflow = (bcr.left + offset + this.pickerWidth + margin) - document.body.offsetWidth

    if (leftOverflow > 0 && rightOverflow <= 0) {
      offset += leftOverflow
    } else if (rightOverflow > 0 && leftOverflow <= 0) {
      offset -= rightOverflow
    }

    this.pickerLeft = offset
    this.showPicker = true
  }
}
</script>

<style scoped>
.color-container {
  height: 100%;
  position: relative;
  width: 100%;
}
.color-tile {
  position: absolute;
  top: 0px;
  left: 0px;
  bottom: 0px;
  right: 0px;

  margin: 4px;

  border-radius: 4px;
  cursor: pointer;
  z-index: 0;
}
.open .color-tile {
  margin: calc(-5% - 8px) 0px 0px 0px;
  z-index: 6;
}
.overlay {
  background: rgba(0, 0, 0, 0.5);
  bottom: 0px;
  left: 0px;
  position: fixed;
  right: 0px;
  top: 0px;
  z-index: 5;
}
.color-picker {
  bottom: 110%;
  color: #000;
  margin: 0 auto;
  position: absolute;
  z-index: 7;
}
</style>

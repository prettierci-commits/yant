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
      :style="style"
      class="color-tile"
      @click.stop="openPicker"
    />

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
  pickerStyle: {
    left?: string
    right?: string
  } = {}

  get style () {
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
    const root = container.parentElement!

    if (container.offsetLeft + container.offsetWidth / 2 < root.offsetWidth / 2) {
      this.pickerStyle = {
        left: '0px'
      }
    } else {
      this.pickerStyle = {
        right: '0px'
      }
    }

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
  border-radius: 4px;
  bottom: 0px;
  left: 0px;
  margin: 4px;
  position: absolute;
  right: 0px;
  top: 0px;
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

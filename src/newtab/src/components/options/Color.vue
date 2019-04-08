<template>
  <div
    class="color-picker"
    style="width: 200px;"
  >
    <div
      class="title pa-2 white--text"
    >
      <v-switch
        :disabled="clearable === false"
        :input-value="value != null"
        style="display: inline-block;"
        @change="v => $emit('input', v ? '#ffffff' : null)"
      />
      {{ label }}
    </div>

    <Sketch
      v-show="value != null"
      :disable-alpha="alpha === false"
      :preset-colors="colors"
      :value="{ hex: value }"
      @input="v => $emit('input', v.hex)"
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

  @Prop({ required: true })
  label!: string

  @Prop({ default: false })
  clearable!: boolean

  @Prop({ default: false })
  alpha!: boolean

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
}
</script>

<style scoped>
.color-picker {
  color: #000;
  margin: 0 auto;
}
</style>

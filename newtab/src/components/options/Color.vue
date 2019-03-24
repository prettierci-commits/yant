<template>
  <div>
    <div class="title text-sm-center pa-2">
      {{ label }}
    </div>
    <Sketch
      :value="{ hex: value }"
      class="color-picker"
      :preset-colors="colors"
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

  get colors (): string[] {
    return [].concat(
      ...Object.values(vuetifyColors).map(({ base }) => base ? [base] : []),
      '#000000',
      '#303030',
      '#888888',
      '#cdcdcd',
      '#ffffff'
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

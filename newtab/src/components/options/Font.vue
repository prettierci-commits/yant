<template>
  <v-container
    fluid
    grid-list-md
    pa-0
  >
    <v-layout
      row
      wrap
    >
      <v-flex
        xs12
        sm6
        md4
      >
        <v-text-field
          v-model.number="size"
          label="Font size"
          min="1"
          step="1"
          type="number"
        />
      </v-flex>
      <v-flex
        xs12
        sm6
        md4
      >
        <v-text-field
          v-model.number="lineHeight"
          label="Line height"
          min="0"
          step="0.1"
          type="number"
        />
      </v-flex>
      <v-flex
        xs12
        sm6
        md4
      >
        <v-text-field
          v-model.number="weight"
          label="Font weight"
          max="1000"
          min="100"
          step="100"
          type="number"
        />
      </v-flex>
      <v-flex xs12>
        <Color
          v-model="color"
          label="Font color"
        />
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script lang="ts">
import Color from './Color.vue'
import { Component, Vue, Prop } from 'vue-property-decorator'
import { IFont } from '@/store/Common' // @todo

@Component({
  components: {
    Color
  }
})
export default class Motto extends Vue {
  @Prop({ required: true })
  value!: IFont

  get size (): number {
    return this.value.size
  }
  set size (v: number) {
    this.$emit('input', {
      ...this.value,
      size: v
    })
  }

  get lineHeight (): number {
    return this.value.lineHeight
  }
  set lineHeight (v: number) {
    this.$emit('input', {
      ...this.value,
      lineHeight: v
    })
  }

  get weight (): number {
    return this.value.weight
  }
  set weight (v: number) {
    this.$emit('input', {
      ...this.value,
      weight: v
    })
  }

  get color (): string {
    return this.value.color
  }
  set color (v: string) {
    this.$emit('input', {
      ...this.value,
      color: v
    })
  }
}
</script>

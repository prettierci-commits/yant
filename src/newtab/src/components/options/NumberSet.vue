<template>
  <v-layout
    row
    wrap
  >
    <v-flex
      v-for="(value, i) in value"
      :key="i"
      v-bind="flexSizing"
    >
      <v-text-field
        :label="labels[i]"
        :max="max"
        :min="min"
        :step="step"
        :suffix="units[i]"
        :value="value"
        clearable
        type="number"
        @input="v => emitUpdate(i, parseFloat(v))"
      />
    </v-flex>
  </v-layout>
</template>

<script lang="ts">
import { Component, Emit, Prop, Vue } from 'vue-property-decorator'

type value = (null | number)[]

@Component
export default class NumberSet extends Vue {
  @Prop({ required: true })
  value!: value

  @Prop({ required: true })
  labels!: string[]

  @Prop({ default: () => [] })
  units!: string[]

  @Prop({ default: undefined })
  max!: number | undefined

  @Prop({ default: undefined })
  min!: number | undefined

  @Prop({ default: undefined })
  step!: number | undefined

  get flexSizing () {
    if (this.value.length <= 1) {
      return {
        xs12: true
      }
    } else if (this.value.length <= 2) {
      return {
        xs12: true,
        sm6: true
      }
    } else if (this.value.length <= 3) {
      return {
        xs12: true,
        sm6: true,
        md4: true
      }
    } else if (this.value.length <= 4) {
      return {
        xs12: true,
        sm6: true,
        md3: true
      }
    } else if (this.value.length <= 6) {
      return {
        xs12: true,
        sm6: true,
        md4: true,
        lg2: true
      }
    } else {
      return {
        xs12: true,
        sm6: true,
        md3: true,
        lg2: true,
        xl1: true
      }
    }
  }

  @Emit('input')
  emitUpdate (i: number, v: number): value {
    return [
      ...this.value.slice(0, i),
      isNaN(v) ? null : v,
      ...this.value.slice(i + 1)
    ]
  }
}
</script>

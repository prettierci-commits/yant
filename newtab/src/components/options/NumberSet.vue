<template>
  <v-container
    grid-list-md
    pa-0
  >
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
          :value="value"
          clearable
          type="number"
          @input="v => emitUpdate(i, parseFloat(v))"
        />
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator'

@Component
export default class NumberSet extends Vue {
  @Prop({ required: true })
  value!: number[]

  @Prop({ required: true })
  labels!: string[]

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

  emitUpdate (i: number, v: number) {
    this.$emit('input', [
      ...this.value.slice(0, i),
      isNaN(v) ? null : v,
      ...this.value.slice(i + 1)
    ])
  }
}
</script>

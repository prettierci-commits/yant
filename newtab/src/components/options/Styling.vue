<template>
  <v-container
    grid-list-md
    pa-0
  >
    <v-layout
      row
      wrap
    >
      <v-flex xs12>
        <v-container
          grid-list-md
          pa-0
        >
          <v-layout
            row
            wrap
          >
            <v-flex
              xs12
              lg6
            >
              <v-text-field
                v-model.number="fontFamily"
                label="Font family"
                clearable
              />
            </v-flex>

            <v-flex
              xs12
              sm4
              lg2
            >
              <v-text-field
                v-if="absolute !== false"
                v-model.number="fontSize"
                clearable
                label="Font size"
                min="1"
                step="1"
                type="number"
              />
              <v-text-field
                v-else
                v-model.number="fontScale"
                clearable
                label="Font scale"
                min="0.1"
                step="0.1"
                type="number"
              />
            </v-flex>

            <v-flex
              xs12
              sm4
              lg2
            >
              <v-text-field
                v-model.number="lineHeight"
                label="Line height"
                min="0"
                step="0.1"
                type="number"
                clearable
              />
            </v-flex>

            <v-flex
              xs12
              sm4
              lg2
            >
              <v-text-field
                v-model.number="fontWeight"
                label="Font weight"
                max="1000"
                min="100"
                step="100"
                type="number"
                clearable
              />
            </v-flex>
          </v-layout>
        </v-container>
      </v-flex>

      <v-flex xs12>
        <v-container
          grid-list-md
          pa-0
        >
          <v-layout
            row
            wrap
          >
            <v-flex
              xs12
              md6
            >
              <v-select
                v-model="fontVariantCaps"
                :items="items.fontVariantCaps"
                clearable
                label="Caps"
              />
            </v-flex>

            <v-flex
              xs12
              md6
            >
              <v-select
                v-model="fontStyle"
                :items="items.fontStyle"
                clearable
                label="Font style"
              />
            </v-flex>
          </v-layout>
        </v-container>
      </v-flex>

      <v-flex xs12>
        <v-container
          grid-list-md
          pa-0
        >
          <v-layout
            row
            wrap
          >
            <v-flex
              xs12
              md6
            >
              <Color
                v-model="color"
                alpha
                clearable
                label="Font color"
              />
            </v-flex>

            <v-flex
              xs12
              md6
            >
              <Color
                v-model="backgroundColor"
                alpha
                clearable
                label="Background"
              />
            </v-flex>
          </v-layout>
        </v-container>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script lang="ts">
import Color from './Color.vue'
import { Component, Vue, Prop } from 'vue-property-decorator'
import { IStyling } from '@/store'

@Component({
  components: {
    Color
  }
})
export default class Styling extends Vue {
  @Prop({ required: true })
  value!: IStyling

  @Prop({ default: false })
  absolute!: boolean

  items = {
    fontStyle: [{
      text: 'Normal',
      value: 'normal'
    }, {
      text: 'Italic',
      value: 'italic'
    }, {
      text: 'Oblique',
      value: 'oblique'
    }],
    fontVariantCaps: [{
      text: 'Normal',
      value: 'normal'
    }, {
      text: 'Small caps',
      value: 'small-caps'
    }, {
      text: 'All small caps',
      value: 'all-small-caps'
    }]
  }

  get fontStyle (): string | undefined {
    return this.value.fontStyle
  }
  set fontStyle (v: string | undefined) {
    this.emitStylingChange('fontStyle', v)
  }

  get fontVariantCaps (): string | undefined {
    return this.value.fontVariantCaps
  }
  set fontVariantCaps (v: string | undefined) {
    this.emitStylingChange('fontVariantCaps', v)
  }

  get fontFamily (): string | undefined {
    return this.value.fontFamily
  }
  set fontFamily (v: string | undefined) {
    this.emitStylingChange('fontFamily', v)
  }

  get fontSize (): number | undefined {
    return this.value.fontSize
  }
  set fontSize (v: number | undefined) {
    this.emitStylingChange('fontSize', v)
  }

  get fontScale (): number | undefined {
    return this.value.fontScale
  }
  set fontScale (v: number | undefined) {
    this.emitStylingChange('fontScale', v)
  }

  get lineHeight (): number | undefined {
    return this.value.lineHeight
  }
  set lineHeight (v: number | undefined) {
    this.emitStylingChange('lineHeight', v)
  }

  get fontWeight (): number | undefined {
    return this.value.fontWeight
  }
  set fontWeight (v: number | undefined) {
    this.emitStylingChange('fontWeight', v)
  }

  get color (): string | undefined {
    return this.value.color
  }
  set color (v: string | undefined) {
    this.emitStylingChange('color', v)
  }

  get backgroundColor (): string | undefined {
    return this.value.backgroundColor
  }
  set backgroundColor (v: string | undefined) {
    this.emitStylingChange('backgroundColor', v)
  }

  emitStylingChange (key: string, value: any) {
    this.$emit('input', {
      ...this.value,
      [key]: value
    })
  }
}
</script>

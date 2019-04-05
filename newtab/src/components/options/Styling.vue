<template>
  <v-container
    grid-list-md
    pa-0
  >
    <v-layout
      v-if="nosize === false || nopadding === false"
      row
      wrap
    >
      <v-flex
        xs12
        title
        pt-5
      >
        Dimensions
      </v-flex>
      <v-flex
        xs12
      >
        <NumberSet
          v-if="nosize === false && nopadding === false"
          v-model="dimensionsFull"
          :labels="['Width', 'Height', 'Top', 'Right', 'Bottom', 'Left']"
          :min="0"
          :step="1"
          :units="['px', 'px', 'px', 'px', 'px', 'px']"
        />
        <NumberSet
          v-if="nosize !== false && nopadding === false"
          v-model="dimensionsPadding"
          :labels="['Top', 'Right', 'Bottom', 'Left']"
          :min="0"
          :step="1"
          :units="['px', 'px', 'px', 'px']"
        />
        <NumberSet
          v-if="nosize === false && nopadding !== false"
          v-model="dimensionsSize"
          :labels="['Width', 'Height']"
          :min="0"
          :step="1"
          :units="['px', 'px']"
        />
      </v-flex>
    </v-layout>

    <template
      v-if="nofont === false"
      xs12
    >
      <v-layout
        row
        wrap
      >
        <v-flex
          xs12
          title
          pt-5
        >
          Font
        </v-flex>
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
            suffix="px"
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
    </template>

    <v-layout
      v-if="animatedColors === false"
      row
      wrap
    >
      <v-flex
        xs12
        title
        pt-5
      >
        Color
      </v-flex>
      <v-flex
        v-if="nofont === false"
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
        :md6="nofont === false"
      >
        <Color
          v-model="backgroundColor"
          alpha
          clearable
          label="Background"
        />
      </v-flex>
    </v-layout>

    <v-layout
      v-if="animatedColors !== false"
      row
      wrap
    >
      <v-flex
        xs12
        title
        pt-5
      >
        Colors
      </v-flex>

      <v-flex
        xs12
        sm6
      >
        <v-text-field
          v-model.number="animationDuration"
          :messages="[animationDurationMessage]"
          clearable
          label="Animation duration"
          min="1"
          step="1"
          suffix="s"
          type="number"
        />
      </v-flex>

      <v-flex
        xs12
        sm6
      >
        <DateTime
          v-model="animationStart"
          clearable
          label="Animation start"
        />
      </v-flex>

      <v-flex
        xs12
        pt-3
      >
        <ColorList
          v-model="animationColors"
          :labels="animationStepLabels"
        />
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script lang="ts">
import Color from './Color.vue'
import ColorList from './ColorList.vue'
import DateTime from '@/components/DateTime.vue'
import NumberSet from './NumberSet.vue'
import formatDate from 'date-fns/format'
import { Component, Vue, Prop } from 'vue-property-decorator'
import { IStyling, animationColors } from '@/store'

@Component({
  components: {
    Color,
    ColorList,
    DateTime,
    NumberSet
  }
})
export default class Styling extends Vue {
  @Prop({ required: true })
  value!: IStyling

  @Prop({ default: false })
  absolute!: boolean

  @Prop({ default: false })
  nofont!: boolean

  @Prop({ default: false })
  nosize!: boolean

  @Prop({ default: false })
  nopadding!: boolean

  @Prop({ default: false })
  animatedColors!: boolean

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

  get animationColors (): animationColors[] | undefined {
    return this.value.animationColors
  }
  set animationColors (v: animationColors[] | undefined) {
    this.emitStylingChange('animationColors', v)
  }

  get animationDuration (): number | null {
    return this.value.animationDuration != null
      ? this.value.animationDuration / 1000
      : null
  }
  set animationDuration (v: number | null) {
    this.emitStylingChange('animationDuration', v != null ? v * 1000 : undefined)
  }
  get animationDurationMessage () {
    if (!this.value.animationDuration) {
      return ''
    }

    const msg = []

    const d = Math.floor(this.value.animationDuration / 1000 / 60 / 60 / 24)
    if (d > 0) {
      msg.push(`${d}&nbsp;d`)
    }

    const h = Math.floor((this.value.animationDuration / 1000 / 60 / 60) % 24)
    if (h > 0) {
      msg.push(`${h}&nbsp;h`)
    }

    const m = Math.floor((this.value.animationDuration / 1000 / 60) % 60)
    if (m > 0) {
      msg.push(`${m}&nbsp;m`)
    }

    const s = Math.floor((this.value.animationDuration / 1000) % 60)
    if (s > 0) {
      msg.push(`${s}&nbsp;s`)
    }

    const ms = Math.floor(this.value.animationDuration % 1000)
    if (ms > 0) {
      msg.push(`${ms}&nbsp;ms`)
    }

    return msg.join(', ')
  }

  get animationStart (): number | undefined {
    return this.value.animationStart
  }
  set animationStart (v: number | undefined) {
    this.emitStylingChange('animationStart', v)
  }

  get animationStepLabels (): {
    text: string
    title: string
  }[] {
    const colors = this.value.animationColors || []
    const duration = this.value.animationDuration
    const start = this.value.animationStart

    if (duration != null && start != null) {
      const step = duration / colors.length
      return colors.map((_, i) => {
        const timestamp = Math.round(start + i * step)
        return {
          text: formatDate(
            timestamp,
            this.animationStepLabelFormat
          ),
          title: new Date(timestamp).toLocaleString()
        }
      })
    } else {
      return colors.map(() => ({
        text: '',
        title: ''
      }))
    }
  }
  get animationStepLabelFormat (): string {
    const duration = this.value.animationDuration
    if (duration == null) {
      return '[]' // generates empty string in date-fns format
    } else if (duration <= 60 * 1000) {
      return 'ss.SSS'
    } else if (duration <= 60 * 60 * 1000) {
      return 'HH:mm:ss.SSS'
    } else if (duration <= 24 * 60 * 60 * 1000) {
      return 'HH:mm:ss'
    } else if (duration <= 365 * 24 * 60 * 60 * 1000) {
      return 'MM/DD - HH:mm:ss'
    } else {
      return 'YYYY/MM/DD - HH:mm:ss.SSS'
    }
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

  get dimensionsFull (): (number | undefined)[] {
    return [
      ...this.dimensionsSize,
      ...this.dimensionsPadding
    ]
  }
  set dimensionsFull (v: (number | undefined)[]) {
    this.emitStylingChanges([
      { key: 'width', value: v[0] },
      { key: 'height', value: v[1] },
      { key: 'paddingTop', value: v[2] },
      { key: 'paddingRight', value: v[3] },
      { key: 'paddingBottom', value: v[4] },
      { key: 'paddingLeft', value: v[5] }
    ])
  }

  get dimensionsSize (): (number | undefined)[] {
    return [
      this.value.width,
      this.value.height
    ]
  }
  set dimensionsSize (v: (number | undefined)[]) {
    this.emitStylingChanges([
      { key: 'width', value: v[0] },
      { key: 'height', value: v[1] }
    ])
  }

  get dimensionsPadding (): (number | undefined)[] {
    return [
      this.value.paddingTop,
      this.value.paddingRight,
      this.value.paddingBottom,
      this.value.paddingLeft
    ]
  }
  set dimensionsPadding (v: (number | undefined)[]) {
    this.emitStylingChanges([
      { key: 'paddingTop', value: v[0] },
      { key: 'paddingRight', value: v[1] },
      { key: 'paddingBottom', value: v[2] },
      { key: 'paddingLeft', value: v[3] }
    ])
  }

  emitStylingChange (key: string, value: any) {
    this.$emit('input', {
      ...this.value,
      [key]: value
    })
  }
  emitStylingChanges (changes: { key: string, value: any }[]) {
    const styling: IStyling & { [key: string]: any } = {
      ...this.value
    }
    changes.forEach(({ key, value }) => {
      styling[key] = value
    })
    this.$emit('input', styling)
  }
}
</script>

export enum WidgetType {
  clock = 'clock',
  date = 'date',
  motto = 'motto',
  separator = 'separator'
}

export interface Widget {
  type: WidgetType
  id: number
}

export interface FontConfig {
  color: string
  lineHeight: number
  size: number
  weight: number
}

export interface AnimationColors {
  fg: string
  bg: string
}

export interface StylingConfig {
  backgroundColor?: string

  color?: string
  fontFamily?: string
  fontScale?: number
  fontSize?: number
  fontStyle?: string
  fontVariantCaps?: string
  fontWeight?: number
  lineHeight?: number

  width?: number
  height?: number
  paddingTop?: number
  paddingRight?: number
  paddingBottom?: number
  paddingLeft?: number

  animationColors?: AnimationColors[]
  animationDuration?: number
  animationStart?: number
}

export interface WidgetConfig {
  styling: StylingConfig
}

export interface ClockConfig extends WidgetConfig {
  separator: string
  showSeconds: boolean
  dimSeconds: boolean
  dimSeparators: boolean
}

export enum DateUpdateRate {
  Milliseconds = 0,
  Centiseconds = 1,
  Deciseconds = 2,
  Seconds = 3,
  Minutes = 4,
  Hours = 5,
  Days = 6
}

export interface DateConfig extends WidgetConfig {
  formatString: string
  updateRate: DateUpdateRate
}

export interface MottoConfig extends WidgetConfig {
  text: string
}

export interface SeparatorConfig extends WidgetConfig {
  flexGrow: number
}

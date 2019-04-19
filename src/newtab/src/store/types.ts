export enum WidgetType {
  clock = 'clock',
  date = 'date',
  motto = 'motto',
  separator = 'separator',
  snow = 'snow',
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

  borderTopLeftRadius?: number
  borderTopRightRadius?: number
  borderBottomRightRadius?: number
  borderBottomLeftRadius?: number

  animationColors?: AnimationColors[]
  animationDuration?: number
  animationStart?: number
}

export interface ClockConfig {
  styling: StylingConfig

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

export interface DateConfig {
  styling: StylingConfig

  formatString: string
  updateRate: DateUpdateRate
}

export interface MottoConfig {
  styling: StylingConfig

  text: string
}

export interface SeparatorConfig {
  styling: StylingConfig

  flexGrow: number
}

export interface SnowConfig {
  amount: number
  symbols: string[]
  speed: number
}

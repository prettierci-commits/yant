export interface IFont {
  color: string
  lineHeight: number
  size: number
  weight: number
}

export interface IStyling {
  backgroundColor?: string
  color?: string
  fontFamily?: string
  fontScale?: number
  fontSize?: number
  fontStyle?: string
  fontVariantCaps?: string
  fontWeight?: number
  lineHeight?: number
  margin?: number
  padding?: number
}

export interface IClockConfig {
  styling: IStyling
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

export interface IDateConfig {
  styling: IStyling
  formatString: string
  updateRate: DateUpdateRate
}

export interface IMottoConfig {
  styling: IStyling
  text: string
}

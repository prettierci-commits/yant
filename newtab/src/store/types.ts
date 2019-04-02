export interface IFont {
  color: string
  lineHeight: number
  size: number
  weight: number
}

export type keyframeColors = {
  fg: string
  bg: string
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

  width?: number
  height?: number
  paddingTop?: number
  paddingRight?: number
  paddingBottom?: number
  paddingLeft?: number

  keyframeColors?: keyframeColors[]
}

export interface IWidget {
  styling: IStyling
}

export interface IClockConfig extends IWidget {
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

export interface IDateConfig extends IWidget {
  formatString: string
  updateRate: DateUpdateRate
}

export interface IMottoConfig extends IWidget {
  text: string
}

export interface ISeparatorConfig extends IWidget {
  flexGrow: number
}

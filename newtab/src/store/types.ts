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
  showDate: boolean
  showWeek: boolean
  dimSeconds: boolean
  dimSeparators: boolean
}

export interface IMottoConfig {
  styling: IStyling
  text: string
}

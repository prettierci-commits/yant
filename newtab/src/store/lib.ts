import { IStyling } from './types'
export * from './types'

export function generateStyleAttr (styling: IStyling) {
  return {
    backgroundColor: styling.backgroundColor != null
      ? styling.backgroundColor
      : null,
    color: styling.color != null
      ? styling.color
      : null,
    fontFamily: styling.fontFamily != null
      ? styling.fontFamily
      : null,
    fontSize: styling.fontSize != null
      ? `${styling.fontSize}px`
      : styling.fontScale != null
        ? `${styling.fontScale}em`
        : null,
    fontStyle: styling.fontStyle != null
      ? `${styling.fontStyle}`
      : null,
    fontVariantCaps: styling.fontVariantCaps != null
      ? `${styling.fontVariantCaps}`
      : null,
    fontWeight: styling.fontWeight != null
      ? `${styling.fontWeight}`
      : null,
    lineHeight: styling.lineHeight != null
      ? `${styling.lineHeight}`
      : null
  }
}

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
      : null,

    width: styling.width != null
      ? `${styling.width}px`
      : null,
    height: styling.height != null
      ? `${styling.height}px`
      : null,
    paddingTop: styling.paddingTop != null
      ? `${styling.paddingTop}px`
      : null,
    paddingRight: styling.paddingRight != null
      ? `${styling.paddingRight}px`
      : null,
    paddingBottom: styling.paddingBottom != null
      ? `${styling.paddingBottom}px`
      : null,
    paddingLeft: styling.paddingLeft != null
      ? `${styling.paddingLeft}px`
      : null
  }
}

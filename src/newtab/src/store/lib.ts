import { StylingConfig } from './types'

export * from './types'

export interface StyleObject {
  [key: string]: string | null
}

export function generateStyleAttr (styling: StylingConfig): StyleObject {
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

    minHeight: styling.minHeight != null
      ? `${styling.minHeight}px`
      : null,
    flexGrow: styling.flexGrow != null
      ? `${styling.flexGrow}`
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
      : null,

    borderTopLeftRadius: styling.borderTopLeftRadius != null
      ? `${styling.borderTopLeftRadius}px`
      : null,
    borderTopRightRadius: styling.borderTopRightRadius != null
      ? `${styling.borderTopRightRadius}px`
      : null,
    borderBottomRightRadius: styling.borderBottomRightRadius != null
      ? `${styling.borderBottomRightRadius}px`
      : null,
    borderBottomLeftRadius: styling.borderBottomLeftRadius != null
      ? `${styling.borderBottomLeftRadius}px`
      : null
  }
}

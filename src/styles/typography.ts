import { CSSObject, css } from '@emotion/react'
import { pixel } from '@/utils'
import theme from './theme'

export type BodyFontSize = keyof typeof bodyLookup
export type HeaderFontSize = keyof typeof headerLookup
export type FontWeight = keyof typeof theme.typography.weight
export type LineHeight = keyof typeof theme.typography.line
export type Tracking = keyof typeof theme.typography.tracking
export type FontFamily = keyof typeof theme.typography.family

export interface TypographyProps<T extends 'body' | 'header' = 'body'> {
  size?: T extends 'body' ? BodyFontSize : HeaderFontSize
  weight?: FontWeight
  italic?: boolean
  tracking?: Tracking
  family?: FontFamily
}

/** body font size */
const bodyLookup = {
  base: theme.typography.size[200],
  xxs: theme.typography.size[50],
  xs: theme.typography.size[75],
  sm: theme.typography.size[100],
  md: theme.typography.size[200],
  lg: theme.typography.size[300],
  xl: theme.typography.size[400],
  xxl: theme.typography.size[500],
}

/** header font size */
const headerLookup = {
  base: theme.typography.size[500],
  min: theme.typography.size[200],
  xs: theme.typography.size[300],
  sm: theme.typography.size[400],
  md: theme.typography.size[500],
  lg: theme.typography.size[600],
  xl: theme.typography.size[700],
  xxl: theme.typography.size[800],
  xxxl: theme.typography.size[900],
  max: theme.typography.size[950],
}

const TRACKING: CSSObject = {
  letterSpacing: theme.typography.tracking.normal,

  ...Object.entries(theme.typography.tracking).reduce<CSSObject>((acc, [key, letterSpacing]) => {
    acc[theme.attr.custom('font', 'tracking').eq(key)] = { letterSpacing }
    return acc
  }, {}),
}

const LINE_HEIGHT: CSSObject = {
  lineHeight: theme.typography.line.base,

  ...Object.entries(theme.typography.line).reduce<CSSObject>((acc, [key, lineHeight]) => {
    acc[theme.attr.custom('font', 'line').eq(key)] = { lineHeight }
    return acc
  }, {}),
}

const FONT_STYLE: CSSObject = {
  fontStyle: 'normal',

  [theme.attr.custom<boolean>('font', 'italic').eq(true)]: {
    fontStyle: 'italic',
  },
}

const FONT_WEIGHT = Object.entries(theme.typography.weight).reduce<CSSObject>(
  (acc, [key, fontWeight]) => {
    acc[theme.attr.custom('font', 'weight').eq(key)] = { fontWeight }
    return acc
  },
  {},
)

const FONT_FAMILY: CSSObject = {
  fontFamily: theme.typography.family.sans,
  ...Object.entries(theme.typography.family).reduce<CSSObject>((acc, [key, fontFamily]) => {
    acc[theme.attr.custom('font', 'family').eq(key)] = { fontFamily }
    return acc
  }, {}),
}

export default {
  body: css(
    {
      fontSize: pixel(bodyLookup.base),
      fontWeight: theme.typography.weight.normal,

      ...Object.entries(bodyLookup).reduce<CSSObject>((acc, [size, fontSize]) => {
        acc[theme.attr.custom('font', 'size').eq(size)] = { fontSize: pixel(fontSize) }
        return acc
      }, {}),
    },
    FONT_WEIGHT,
    FONT_FAMILY,
    LINE_HEIGHT,
    FONT_STYLE,
    TRACKING,
  ),
  header: css(
    {
      fontSize: pixel(headerLookup.base),
      fontWeight: theme.typography.weight.strong,

      ...Object.entries(headerLookup).reduce<CSSObject>((acc, [key, fontSize]) => {
        acc[theme.attr.custom('font', 'size').eq(key)] = { fontSize: pixel(fontSize) }
        return acc
      }, {}),
    },
    FONT_WEIGHT,
    FONT_FAMILY,
    LINE_HEIGHT,
    FONT_STYLE,
    TRACKING,
  ),
}

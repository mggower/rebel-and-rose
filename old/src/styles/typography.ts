import { CSSObject, css } from '@emotion/react'
import { CustomCSS } from '@/types'
import { pixel } from '@/utils'
import theme from './theme'

export type BodyFontSize = keyof typeof bodyFontSize
export type HeaderFontSize = keyof typeof headerFontSize
export type FontWeight = keyof typeof theme.typography.weight
export type LineHeight = keyof typeof theme.typography.line
export type Tracking = keyof typeof theme.typography.tracking
export type FontFamily = keyof typeof theme.typography.family

export interface TypographyProps<T extends 'body' | 'header' = 'body'> {
  fontSize?: T extends 'body' ? BodyFontSize : HeaderFontSize
  weight?: FontWeight
  italic?: boolean
  tracking?: Tracking
  family?: FontFamily
  prose?: boolean
  uppercase?: boolean
}

/** body font size */
const bodyFontSize = {
  base: theme.typography.fontSize[200],
  xxs: theme.typography.fontSize[50],
  xs: theme.typography.fontSize[75],
  sm: theme.typography.fontSize[100],
  md: theme.typography.fontSize[200],
  lg: theme.typography.fontSize[300],
  xl: theme.typography.fontSize[400],
  xxl: theme.typography.fontSize[500],
}

/** header font size */
const headerFontSize = {
  base: theme.typography.fontSize[500],
  min: theme.typography.fontSize[200],
  xs: theme.typography.fontSize[300],
  sm: theme.typography.fontSize[400],
  md: theme.typography.fontSize[500],
  lg: theme.typography.fontSize[600],
  xl: theme.typography.fontSize[700],
  xxl: theme.typography.fontSize[800],
  xxxl: theme.typography.fontSize[900],
  max: theme.typography.fontSize[950],
}

const TRACKING: CSSObject = {
  letterSpacing: theme.typography.tracking.normal,

  ...Object.entries(theme.typography.tracking).reduce<CustomCSS>((acc, [key, letterSpacing]) => {
    acc[theme.attr.create('font', 'tracking').eq(key)] = { letterSpacing }
    return acc
  }, {}),
}

const LINE_HEIGHT: CSSObject = {
  lineHeight: theme.typography.line.base,

  ...Object.entries(theme.typography.line).reduce<CustomCSS>((acc, [key, lineHeight]) => {
    acc[theme.attr.create('font', 'line').eq(key)] = { lineHeight }
    return acc
  }, {}),
}

const FONT_STYLE: CSSObject = {
  fontStyle: 'normal',

  [theme.attr.create<boolean>('font', 'italic').eq(true)]: {
    fontStyle: 'italic',
  },
}

const FONT_WEIGHT = Object.entries(theme.typography.weight).reduce<CSSObject>(
  (acc, [key, fontWeight]) => {
    acc[theme.attr.create('font', 'weight').eq(key)] = { fontWeight }
    return acc
  },
  {},
)

const FONT_FAMILY: CSSObject = {
  fontFamily: theme.typography.family.sans,
  ...Object.entries(theme.typography.family).reduce<CustomCSS>((acc, [key, fontFamily]) => {
    acc[theme.attr.create('font', 'family').eq(key)] = { fontFamily }
    return acc
  }, {}),
}

export const applyTypographyProps = <T extends 'header' | 'body'>({
  weight,
  italic,
  fontSize,
  tracking,
  family,
  prose,
  uppercase,
}: TypographyProps<T>) => ({
  ['data-font-size']: fontSize,
  ['data-font-weight']: weight,
  ['data-font-italic']: italic,
  ['data-font-tracking']: tracking,
  ['data-font-family']: family,
  ['data-font-prose']: prose,
  ['data-font-uppercase']: uppercase,
})

export default {
  body: css(
    {
      fontSize: pixel(bodyFontSize.base),
      fontWeight: theme.typography.weight.normal,

      ...Object.entries(bodyFontSize).reduce<CustomCSS>((acc, [size, fontSize]) => {
        acc[theme.attr.create('font', 'size').eq(size)] = { fontSize: pixel(fontSize) }
        return acc
      }, {}),

      [theme.attr.create<boolean>('font', 'prose').eq(true)]: {
        maxWidth: '65ch',
      },
      [theme.attr.create<boolean>('font', 'uppercase').eq(true)]: {
        textTransform: 'uppercase',
      },
    },
    FONT_WEIGHT,
    FONT_FAMILY,
    LINE_HEIGHT,
    FONT_STYLE,
    TRACKING,
  ),
  header: css(
    {
      fontSize: pixel(headerFontSize.base),
      fontWeight: theme.typography.weight.strong,

      ...Object.entries(headerFontSize).reduce<CustomCSS>((acc, [key, fontSize]) => {
        acc[theme.attr.create('font', 'size').eq(key)] = { fontSize: pixel(fontSize) }
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

import { DataType, Properties } from 'csstype'
import { Primitive } from '@/types'
import { stringify } from '@/utils'

export const REM_BASE = 16
export const SPACING_BASE = 0.25

export type Pixel = `${number}px`
export type Rem = `${number}rem`
export type Em = `${number}em`

export const utils = {
  pixel: (value: number): Pixel => `${value}px`,
  rem: (value: number): Rem => `${value}rem`,
  em: (value: number): Em => `${value}em`,
  calc: {
    /**
     * @param factor rem value
     * @returns rem value in pixels
     */
    rem: (factor = 1) => REM_BASE * factor,
    /**
     *
     * @param percentage percentage viewport height
     * @returns vh value in pixels
     */
    vh: (percentage: number) => window.innerHeight * (percentage / 100),
    /**
     *
     * @param percentage percentage viewport height
     * @returns vh value in pixels
     */
    vw: (percentage: number) => window.innerWidth * (percentage / 100),
  },
}

export const spacingFormula = (index: number) => utils.rem(index * SPACING_BASE)

/**
 *
 * @param values spacing values in indexed format
 * @param values max 4 values
 * @returns box spacing values e.g. '1em 2em 3em 4em'
 */
const createBoxSpacing = (...values: number[]) => values.map(spacingFormula).slice(0, 4).join(' ')

/**
 *
 * @param vars css variables and values
 * @returns CSSProperties assigning variables to values
 */
const setCssVariables = (vars: Record<string, number | string>): React.CSSProperties => {
  const style: Record<string, string | number> = {}

  for (const name in vars) {
    style[`--${name}`] = vars[name]
  }

  return style satisfies React.CSSProperties
}

/**
 * @param color hex value
 * @param opacity value between 0-1
 * @returns 8-digit hex value with alpha
 */
const hexColorOpacity = (color: string, opacity: number) => {
  return color.concat(
    Math.round(opacity * 255)
      .toString(16)
      .padStart(2, '0'),
  )
}

/**
 *
 * @param borderStyle LineStyle
 * @param borderWidth LineWidth
 * @param borderColor
 * @param scope
 * @returns
 */
const createBorderStyle = (
  borderStyle: DataType.LineStyle,
  borderWidth: DataType.LineWidth<Pixel | Rem | Em>,
  borderColor: DataType.Color,
  scope?: 'top' | 'right' | 'bottom' | 'left' | 'x' | 'y' | null,
): Properties => {
  switch (scope) {
    case 'top':
      return {
        borderTopStyle: borderStyle,
        borderTopWidth: borderWidth,
        borderTopColor: borderColor,
      }
    case 'right':
      return {
        borderRightStyle: borderStyle,
        borderRightWidth: borderWidth,
        borderRightColor: borderColor,
      }
    case 'bottom':
      return {
        borderBottomStyle: borderStyle,
        borderBottomWidth: borderWidth,
        borderBottomColor: borderColor,
      }
    case 'left':
      return {
        borderLeftStyle: borderStyle,
        borderLeftWidth: borderWidth,
        borderLeftColor: borderColor,
      }
    case 'x':
      return {
        ...createBorderStyle(borderStyle, borderWidth, borderColor, 'left'),
        ...createBorderStyle(borderStyle, borderWidth, borderColor, 'right'),
      }
    case 'y':
      return {
        ...createBorderStyle(borderStyle, borderWidth, borderColor, 'top'),
        ...createBorderStyle(borderStyle, borderWidth, borderColor, 'bottom'),
      }
    default:
      return { borderStyle, borderWidth, borderColor }
  }
}

export const style = {
  box: createBoxSpacing,
  vars: setCssVariables,
  alpha: hexColorOpacity,
  border: createBorderStyle,
}

/**
 *
 * @param scope data attribute scope
 * @returns data attribute utility functions
 */
export const attributeSelector = <T extends Primitive = Primitive>(...scope: string[]) => {
  const attribute = ['data', ...scope].join('-')
  return {
    attribute,
    eq: (value: T) => `&[${attribute}="${stringify(value)}"]`,
    not: (value: T) => `&:not([${attribute}="${stringify(value)}"])`,
  }
}

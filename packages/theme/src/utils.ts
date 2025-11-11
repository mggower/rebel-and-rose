import type { DataType, Properties } from 'csstype'
import type React from 'react'
import type { Primitive } from './types'

export const REM_BASE = 16
export const SPACING_BASE = 0.25

export type Pixel = `${number}px`
export type Rem = `${number}rem`
export type Em = `${number}em`

export const pixel = (value: number): Pixel => `${value}px`
export const rem = (value: number): Rem => `${value}rem`
export const em = (value: number): Em => `${value}em`

const stringify = (value: Primitive): string => (typeof value === 'string' ? value : String(value))

export const utils = {
  pixel,
  rem,
  em,
  calc: {
    /**
     * @param factor rem value
     * @returns rem value in pixels
     */
    rem: (factor = 1) => REM_BASE * factor,
    /**
     * @param percentage viewport height percentage
     */
    vh: (percentage: number) =>
      typeof window !== 'undefined' ? window.innerHeight * (percentage / 100) : 0,
    /**
     * @param percentage viewport width percentage
     */
    vw: (percentage: number) =>
      typeof window !== 'undefined' ? window.innerWidth * (percentage / 100) : 0,
  },
}

export const spacing = (index: number) => rem(index * SPACING_BASE)

const createBoxSpacing = (...values: number[]) => values.map(spacing).slice(0, 4).join(' ')

const setCssVariables = (vars: Record<string, number | string>): React.CSSProperties => {
  const style: Record<string, string | number> = {}

  for (const name in vars) {
    style[`--${name}`] = vars[name]
  }

  return style satisfies React.CSSProperties
}

const hexColorOpacity = (color: string, opacity: number) => {
  return color.concat(
    Math.round(opacity * 255)
      .toString(16)
      .padStart(2, '0'),
  )
}

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

export const createAttributeSelector = <T extends Primitive = Primitive>(...scope: string[]) => {
  const attribute = ['data', ...scope].join('-')
  return {
    attribute,
    eq: (value: T) => `&[${attribute}="${stringify(value)}"]`,
    not: (value: T) => `&:not([${attribute}="${stringify(value)}"])`,
  }
}

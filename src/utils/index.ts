import { Primitive } from '@/types'

export const pixel = (value: number) => `${value}px`
export const rem = (value: number) => `${value}rem`
export const em = (value: number) => `${value}em`

export const cssVars = (vars: Record<string, number | string>): React.CSSProperties => {
  const style: Record<string, string | number> = {}

  for (const [name, value] of Object.entries(vars)) {
    style[`--${name}`] = value
  }

  return style as React.CSSProperties
}

export const calcHeightFromWindow = (percentage: number) => window.innerHeight * (percentage / 100)

export const isNumber = (value: unknown): value is number => typeof value === 'number'
export const isString = (value: unknown): value is string => typeof value === 'string'
export const isBoolean = (value: unknown): value is boolean => typeof value === 'boolean'

export const stringify = (value: Primitive): string => (isString(value) ? value : String(value))

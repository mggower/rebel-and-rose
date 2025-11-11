import { tokens, type ThemeTokens } from './tokens'
export type { Palette } from './palette'
export { palette } from './palette'
export { REM_BASE, SPACING_BASE, utils, spacing, style, createAttributeSelector } from './utils'
export type { Primitive } from './types'
export { breakpoints, screen, typography, shadow, rounded, zIndex, attr } from './tokens'

export type ThemeOverrides = {
  [Key in keyof ThemeTokens]?: ThemeTokens[Key] extends Record<string, unknown>
    ? ThemeOverridesFor<ThemeTokens[Key]>
    : ThemeTokens[Key]
}

type ThemeOverridesFor<T> = {
  [Key in keyof T]?: T[Key] extends Record<string, unknown> ? ThemeOverridesFor<T[Key]> : T[Key]
}

const isRecord = (value: unknown): value is Record<string, unknown> =>
  typeof value === 'object' && value !== null && !Array.isArray(value)

const mergeDeep = <T>(target: T, source: Record<string, unknown>): T => {
  if (!isRecord(target)) {
    return target
  }

  const clone: Record<PropertyKey, unknown> = { ...target }

  for (const [key, value] of Object.entries(source)) {
    const targetValue = clone[key]

    if (isRecord(targetValue) && isRecord(value)) {
      clone[key] = mergeDeep(targetValue, value)
    } else {
      clone[key] = value
    }
  }

  return clone as T
}

export const createTheme = (overrides?: ThemeOverrides): ThemeTokens => {
  if (!overrides) {
    return { ...tokens }
  }

  return mergeDeep(tokens, overrides as Record<string, unknown>)
}

export const theme: ThemeTokens = tokens

export default theme

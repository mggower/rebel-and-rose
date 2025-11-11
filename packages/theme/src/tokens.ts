import { palette } from './palette'
import { createAttributeSelector, spacing, style, utils } from './utils'

export const breakpoints = { sm: 640, md: 768, lg: 1024, xl: 1280, max: 1536 } as const

export const screen = {
  sm: `@media(min-width: ${utils.pixel(breakpoints.sm)})`,
  md: `@media(min-width: ${utils.pixel(breakpoints.md)})`,
  lg: `@media(min-width: ${utils.pixel(breakpoints.lg)})`,
  xl: `@media(min-width: ${utils.pixel(breakpoints.xl)})`,
  max: `@media(min-width: ${utils.pixel(breakpoints.max)})`,
} as const

export const typography = {
  fontSize: {
    50: 11,
    75: 12,
    100: 14,
    200: 16,
    300: 18,
    400: 20,
    500: 24,
    600: 28,
    700: 32,
    800: 36,
    900: 40,
    950: 48,
  } as const,
  family: {
    sans: 'myriad-pro, sans-serif',
    serif: 'itc-american-typewriter, serif',
    calder: 'calder-lc, serif',
    dark: 'calder-dark, serif',
    block: 'Nickson One, serif',
    cursive: 'Bandoeng, cursive',
  } as const,
  tracking: {
    tight: utils.em(-0.025),
    normal: utils.em(0),
    wide: utils.em(0.025),
    wider: utils.em(0.05),
    widest: utils.em(0.1),
    extreme: utils.em(0.3),
  } as const,
  line: { tight: 1.3, base: 1.5, max: 1.7 } as const,
  weight: { normal: 400, semibold: 600, strong: 700 } as const,
} as const

export const shadow = {
  xs: [
    `0 0 0 1px ${style.alpha(palette.ink.main, 0.02)}`,
    `1px 1px 1px -0.5px ${style.alpha(palette.ink.main, 0.02)}`,
    `3px 3px 3px -1.5px ${style.alpha(palette.ink.main, 0.02)}`,
    `6px 6px 6px -3px ${style.alpha(palette.ink.main, 0.02)}`,
    `12px 12px 12px -6px ${style.alpha(palette.ink.main, 0.02)}`,
    `24px 24px 24px -12px ${style.alpha(palette.ink.main, 0.02)}`,
  ].join(', '),
  sm: [
    `0 0 0 1px ${style.alpha(palette.ink.main, 0.06)}`,
    `1px 1px 1px -0.5px ${style.alpha(palette.ink.main, 0.06)}`,
    `3px 3px 3px -1.5px ${style.alpha(palette.ink.main, 0.06)}`,
    `6px 6px 6px -3px ${style.alpha(palette.ink.main, 0.06)}`,
    `12px 12px 12px -6px ${style.alpha(palette.ink.main, 0.06)}`,
    `24px 24px 24px -12px ${style.alpha(palette.ink.main, 0.06)}`,
  ].join(', '),
  md: [
    `0 0 0 1px ${style.alpha(palette.ink.main, 0.12)}`,
    `1px 1px 1px -0.5px ${style.alpha(palette.ink.main, 0.12)}`,
    `3px 3px 3px -1.5px ${style.alpha(palette.ink.main, 0.12)}`,
    `6px 6px 6px -3px ${style.alpha(palette.ink.main, 0.12)}`,
    `12px 12px 12px -6px ${style.alpha(palette.ink.main, 0.12)}`,
    `24px 24px 24px -12px ${style.alpha(palette.ink.main, 0.12)}`,
  ].join(', '),
  lg: [
    `0 0 0 1px ${style.alpha(palette.ink.main, 0.18)}`,
    `1px 1px 1px -0.5px ${style.alpha(palette.ink.main, 0.18)}`,
    `3px 3px 3px -1.5px ${style.alpha(palette.ink.main, 0.18)}`,
    `6px 6px 6px -3px ${style.alpha(palette.ink.main, 0.18)}`,
    `12px 12px 12px -6px ${style.alpha(palette.ink.main, 0.18)}`,
    `24px 24px 24px -12px ${style.alpha(palette.ink.main, 0.18)}`,
  ].join(', '),
  max: [
    `0 0 0 1px ${style.alpha(palette.ink.main, 0.24)}`,
    `1px 1px 1px -0.5px ${style.alpha(palette.ink.main, 0.24)}`,
    `3px 3px 3px -1.5px ${style.alpha(palette.ink.main, 0.24)}`,
    `6px 6px 6px -3px ${style.alpha(palette.ink.main, 0.24)}`,
    `12px 12px 12px -6px ${style.alpha(palette.ink.main, 0.24)}`,
    `24px 24px 24px -12px ${style.alpha(palette.ink.main, 0.24)}`,
  ].join(', '),
} as const

export const rounded = {
  none: 0,
  sm: utils.pixel(2),
  md: utils.pixel(6),
  lg: utils.pixel(8),
} as const

export const zIndex = {
  below: -20,
  base: 0,
  layer: 20,
  overlay: 40,
  popover: 60,
  modal: 80,
} as const

export const attr = {
  create: createAttributeSelector,
  active: createAttributeSelector<boolean>('active'),
  theme: createAttributeSelector<'light' | 'dark'>('theme'),
  color: createAttributeSelector<'primary' | 'secondary' | 'tertiary'>('color'),
  selected: createAttributeSelector<boolean>('selected'),
}

export const tokens = {
  palette,
  screen,
  breakpoints,
  shadow,
  rounded,
  spacing,
  typography,
  zIndex,
  attr,
  style,
  utils,
} as const

export type ThemeTokens = typeof tokens

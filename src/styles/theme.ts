import { em, pixel, rem, stringify } from '@/utils'
import { Primitive } from '@/types'
import palette from './palette'

const breakpoints = {
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  max: 1536,
}

const screen = {
  sm: `@media(min-width: ${pixel(breakpoints.sm)})`,
  md: `@media(min-width: ${pixel(breakpoints.md)})`,
  lg: `@media(min-width: ${pixel(breakpoints.lg)})`,
  xl: `@media(min-width: ${pixel(breakpoints.xl)})`,
  max: `@media(min-width: ${pixel(breakpoints.max)})`,
}

const typography = {
  size: {
    [50]: 11,
    [75]: 12,
    [100]: 14,
    [200]: 16,
    [300]: 18,
    [400]: 20,
    [500]: 24,
    [600]: 28,
    [700]: 32,
    [800]: 36,
    [900]: 40,
    [950]: 48,
  },
  family: {
    sans: 'myriad-pro, sans-serif',
    serif: 'itc-american-typewriter, serif',
    calder: 'calder-lc, serif',
    dark: 'calder-dark, serif',
    block: 'Nickson One, serif',
    cursive: 'Bandoeng, cursive',
  },
  tracking: {
    tight: em(-0.025),
    normal: em(0),
    wide: em(0.025),
    wider: em(0.05),
    widest: em(0.1),
    extreme: em(0.3),
  },
  line: {
    tight: 1.3,
    base: 1.5,
    max: 1.7,
  },
  weight: {
    normal: 400,
    semibold: 600,
    strong: 700,
  },
}

const shadow = {
  xs: [
    '0 0 0 1px rgba(0, 0, 0, 0.02)',
    '0 1px 1px -0.5px rgba(0, 0, 0, 0.02)',
    '0 3px 3px -1.5px rgba(0, 0, 0, 0.02)',
    '0 6px 6px -3px rgba(0, 0, 0, 0.02)',
    '0 12px 12px -6px rgba(0, 0, 0, 0.02)',
    '0 24px 24px -12px rgba(0, 0, 0, 0.02)',
  ].join(', '),
  sm: [
    '0 0 0 1px rgba(0, 0, 0, 0.06)',
    '0 1px 1px -0.5px rgba(0, 0, 0, 0.06)',
    '0 3px 3px -1.5px rgba(0, 0, 0, 0.06)',
    '0 6px 6px -3px rgba(0, 0, 0, 0.06)',
    '0 12px 12px -6px rgba(0, 0, 0, 0.06)',
    '0 24px 24px -12px rgba(0, 0, 0, 0.06)',
  ].join(', '),
  md: [
    '0 0 0 1px rgba(0, 0, 0, 0.12)',
    '0 1px 1px -0.5px rgba(0, 0, 0, 0.12)',
    '0 3px 3px -1.5px rgba(0, 0, 0, 0.12)',
    '0 6px 6px -3px rgba(0, 0, 0, 0.12)',
    '0 12px 12px -6px rgba(0, 0, 0, 0.12)',
    '0 24px 24px -12px rgba(0, 0, 0, 0.12)',
  ].join(', '),
  lg: [
    '0 0 0 1px rgba(0, 0, 0, 0.18)',
    '0 1px 1px -0.5px rgba(0, 0, 0, 0.18)',
    '0 3px 3px -1.5px rgba(0, 0, 0, 0.18)',
    '0 6px 6px -3px rgba(0, 0, 0, 0.18)',
    '0 12px 12px -6px rgba(0, 0, 0, 0.18)',
    '0 24px 24px -12px rgba(0, 0, 0, 0.18)',
  ].join(', '),
}

const rounded = {
  none: 0,
  sm: pixel(2),
  md: pixel(6),
  lg: pixel(8),
}

const spacing = {
  [0]: 0,
  [1]: rem(0.25),
  [2]: rem(0.5),
  [3]: rem(0.75),
  [4]: rem(1),
  [6]: rem(1.5),
  [8]: rem(2),
  [10]: rem(2.5),
  [12]: rem(3),
  [14]: rem(3.5),
  [16]: rem(4),
  [20]: rem(5),
  [24]: rem(6),
  [28]: rem(7),
  [32]: rem(8),
}

const padding = (...values: (keyof typeof spacing)[]) => {
  return values.map((value) => spacing[value]).join(' ')
}

const zIndex = {
  base: 0,
  layer: 20,
  overlay: 40,
  popover: 60,
  modal: 80,
}

const attributeSelector = <T extends Primitive = Primitive>(...scope: string[]) => {
  const attribute = ['data', ...scope].join('-')
  return {
    attribute,
    eq: (value: T) => `&[${attribute}="${stringify(value)}"]`,
    not: (value: T) => `&:not([${attribute}="${stringify(value)}"])`,
  }
}

const attr = {
  custom: attributeSelector,
  active: attributeSelector<boolean>('active'),
  theme: attributeSelector<'light' | 'dark'>('theme'),
  color: attributeSelector<'primary' | 'secondary' | 'tertiary'>('color'),
  selected: attributeSelector<boolean>('selected'),
}

export default {
  palette,
  breakpoints,
  screen,
  shadow,
  rounded,
  spacing,
  padding,
  typography,
  zIndex,
  attr,
}

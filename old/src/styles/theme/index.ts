import { utility, style, attributeSelector, spacingFormula } from './utils'
import palette from './palette'

const breakpoints = { sm: 640, md: 768, lg: 1024, xl: 1280, max: 1536 }

const screen = {
  sm: `@media(min-width: ${utility.pixel(breakpoints.sm)})`,
  md: `@media(min-width: ${utility.pixel(breakpoints.md)})`,
  lg: `@media(min-width: ${utility.pixel(breakpoints.lg)})`,
  xl: `@media(min-width: ${utility.pixel(breakpoints.xl)})`,
  max: `@media(min-width: ${utility.pixel(breakpoints.max)})`,
}

const typography = {
  fontSize: {
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
    tight: utility.em(-0.025),
    normal: utility.em(0),
    wide: utility.em(0.025),
    wider: utility.em(0.05),
    widest: utility.em(0.1),
    extreme: utility.em(0.3),
  },
  line: { tight: 1.3, base: 1.5, max: 1.7 },
  weight: { normal: 400, semibold: 600, strong: 700 },
}

// TODO use ink variations
const shadow = {
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
}

const rounded = { none: 0, sm: utility.pixel(2), md: utility.pixel(6), lg: utility.pixel(8) }

const zIndex = { below: -20, base: 0, layer: 20, overlay: 40, popover: 60, modal: 80 }

const attr = {
  create: attributeSelector,
  active: attributeSelector<boolean>('active'),
  theme: attributeSelector<'light' | 'dark'>('theme'),
  color: attributeSelector<'primary' | 'secondary' | 'tertiary'>('color'),
  selected: attributeSelector<boolean>('selected'),
}

const SPEED_VALUES = {
  [1]: 0.125,
  [2]: 0.25,
  [3]: 0.375,
  [4]: 0.5,
  [5]: 0.625,
  [6]: 0.75,
  [7]: 0.875,
  [8]: 1,
}

const velocity = {
  accelerate: (speed: keyof typeof SPEED_VALUES, base = 0) => SPEED_VALUES[speed] + base,
  decelerate: (speed: keyof typeof SPEED_VALUES, base = 0) => -(SPEED_VALUES[speed] + base),
}

export default {
  palette,
  screen,
  breakpoints,
  shadow,
  rounded,
  velocity,
  spacing: spacingFormula,
  typography,
  zIndex,
  attr,
  style,
  utility,
}

import { utils, style, attributeSelector, spacingFormula } from './utils'
import palette from './palette'

const breakpoints = { sm: 640, md: 768, lg: 1024, xl: 1280, max: 1536 }

const screen = {
  sm: `@media(min-width: ${utils.pixel(breakpoints.sm)})`,
  md: `@media(min-width: ${utils.pixel(breakpoints.md)})`,
  lg: `@media(min-width: ${utils.pixel(breakpoints.lg)})`,
  xl: `@media(min-width: ${utils.pixel(breakpoints.xl)})`,
  max: `@media(min-width: ${utils.pixel(breakpoints.max)})`,
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
    tight: utils.em(-0.025),
    normal: utils.em(0),
    wide: utils.em(0.025),
    wider: utils.em(0.05),
    widest: utils.em(0.1),
    extreme: utils.em(0.3),
  },
  line: { tight: 1.3, base: 1.5, max: 1.7 },
  weight: { normal: 400, semibold: 600, strong: 700 },
}

// TODO use ink variations
const shadow = {
  xs: [
    `0 0 0 1px ${style.alpha(palette.ink.main, 0.02)}`,
    `0 1px 1px -0.5px ${style.alpha(palette.ink.main, 0.02)}`,
    `0 3px 3px -1.5px ${style.alpha(palette.ink.main, 0.02)}`,
    `0 6px 6px -3px ${style.alpha(palette.ink.main, 0.02)}`,
    `0 12px 12px -6px ${style.alpha(palette.ink.main, 0.02)}`,
    `0 24px 24px -12px ${style.alpha(palette.ink.main, 0.02)}`,
  ].join(', '),
  sm: [
    `0 0 0 1px ${style.alpha(palette.ink.main, 0.06)}`,
    `0 1px 1px -0.5px ${style.alpha(palette.ink.main, 0.06)}`,
    `0 3px 3px -1.5px ${style.alpha(palette.ink.main, 0.06)}`,
    `0 6px 6px -3px ${style.alpha(palette.ink.main, 0.06)}`,
    `0 12px 12px -6px ${style.alpha(palette.ink.main, 0.06)}`,
    `0 24px 24px -12px ${style.alpha(palette.ink.main, 0.06)}`,
  ].join(', '),
  md: [
    `0 0 0 1px ${style.alpha(palette.ink.main, 0.12)}`,
    `0 1px 1px -0.5px ${style.alpha(palette.ink.main, 0.12)}`,
    `0 3px 3px -1.5px ${style.alpha(palette.ink.main, 0.12)}`,
    `0 6px 6px -3px ${style.alpha(palette.ink.main, 0.12)}`,
    `0 12px 12px -6px ${style.alpha(palette.ink.main, 0.12)}`,
    `0 24px 24px -12px ${style.alpha(palette.ink.main, 0.12)}`,
  ].join(', '),
  lg: [
    `0 0 0 1px ${style.alpha(palette.ink.main, 0.18)}`,
    `0 1px 1px -0.5px ${style.alpha(palette.ink.main, 0.18)}`,
    `0 3px 3px -1.5px ${style.alpha(palette.ink.main, 0.18)}`,
    `0 6px 6px -3px ${style.alpha(palette.ink.main, 0.18)}`,
    `0 12px 12px -6px ${style.alpha(palette.ink.main, 0.18)}`,
    `0 24px 24px -12px ${style.alpha(palette.ink.main, 0.18)}`,
  ].join(', '),
}

const rounded = { none: 0, sm: utils.pixel(2), md: utils.pixel(6), lg: utils.pixel(8) }

const zIndex = { below: -20, base: 0, layer: 20, overlay: 40, popover: 60, modal: 80 }

const attr = {
  create: attributeSelector,
  active: attributeSelector<boolean>('active'),
  theme: attributeSelector<'light' | 'dark'>('theme'),
  color: attributeSelector<'primary' | 'secondary' | 'tertiary'>('color'),
  selected: attributeSelector<boolean>('selected'),
}

export default {
  palette,
  screen,
  breakpoints,
  shadow,
  rounded,
  spacing: spacingFormula,
  typography,
  zIndex,
  attr,
  style,
  utils,
}

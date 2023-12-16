import { em, pixel } from '@/utils'

export enum Breakpoints {
  sm = 640,
  md = 768,
  lg = 1024,
  xl = 1280,
  max = 1536,
}

export default {
  screen: {
    sm: `@media(min-width: ${pixel(Breakpoints.sm)})`,
    md: `@media(min-width: ${pixel(Breakpoints.md)})`,
    lg: `@media(min-width: ${pixel(Breakpoints.lg)})`,
    xl: `@media(min-width: ${pixel(Breakpoints.xl)})`,
    max: `@media(min-width: ${pixel(Breakpoints.max)})`,
  },
  rounded: {
    none: 0,
    sm: pixel(2),
    md: pixel(6),
    lg: pixel(8),
  },
  fontSize: {
    xxs: pixel(11),
    xs: pixel(12),
    sm: pixel(14),
    md: pixel(16),
    lg: pixel(18),
    xl: pixel(20),
    xxl: pixel(24),
  },
  tracking: {
    tight: em(-0.025),
    normal: em(0),
    wide: em(0.025),
    wider: em(0.05),
    widest: em(0.1),
    extreme: em(0.3),
  },
  attr: (...scope: string[]) => {
    const attribute = ['data', ...scope].join('-')
    return {
      attribute,
      eq: (value: string | number | boolean) => `&[${attribute}="${value}"]`,
    }
  },
}

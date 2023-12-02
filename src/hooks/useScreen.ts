import { useMediaQuery } from 'usehooks-ts'

export enum Breakpoints {
  'sm' = 640,
  'md' = 768,
  'lg' = 1024,
  'xl' = 1280,
  '2xl' = 1536,
}

export type Breakpoint = keyof typeof Breakpoints

export const useMinScreen = (breakpoint: Breakpoint = 'lg') => {
  return useMediaQuery(`(min-width: ${Breakpoints[breakpoint]}px)`)
}

export const useMaxScreen = (breakpoint: Breakpoint = 'lg') => {
  return useMediaQuery(`(max-width: ${Breakpoints[breakpoint]}px)`)
}

import { Breakpoints } from '@/styles/theme'
import { useMediaQuery } from 'usehooks-ts'

export type Breakpoint = keyof typeof Breakpoints

export const useMinScreen = (screen: Breakpoint = 'lg') => {
  return useMediaQuery(`(min-width: ${Breakpoints[screen]}px)`)
}

export const useMaxScreen = (breakpoint: Breakpoint = 'lg') => {
  return useMediaQuery(`(max-width: ${Breakpoints[breakpoint]}px)`)
}

import { useMediaQuery } from 'usehooks-ts'
import theme from '@/styles/theme'

export type Breakpoint = keyof typeof theme.breakpoints

export const useMinScreen = (screen: Breakpoint = 'lg') => {
  return useMediaQuery(`(min-width: ${theme.breakpoints[screen]}px)`)
}

export const useMaxScreen = (screen: Breakpoint = 'lg') => {
  return useMediaQuery(`(max-width: ${theme.breakpoints[screen]}px)`)
}

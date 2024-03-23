import { useMediaQuery } from 'usehooks-ts'
import { useMemo } from 'react'
import theme from '@/styles/theme'

export type Breakpoint = keyof typeof theme.breakpoints

export const useMinScreen = (breakpoint: Breakpoint = 'md') => {
  return useMediaQuery(`(min-width: ${theme.breakpoints[breakpoint]}px)`)
}

export const useMaxScreen = (breakpoint: Breakpoint = 'md') => {
  return useMediaQuery(`(max-width: ${theme.breakpoints[breakpoint]}px)`)
}

export interface UseScreenOptions {
  /**
   * @default md
   */

  /**
   * @default min
   */
  query?: 'min' | 'max'
}

export const useScreen = <T>(
  factory: (state: boolean) => Exclude<T, void>,
  deps: React.DependencyList,
  breakpoint: Breakpoint = 'md',
): T => {
  const screen = useMediaQuery(`(min-width: ${theme.breakpoints[breakpoint]}px)`)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  return useMemo(() => factory(screen), [screen, ...deps])
}

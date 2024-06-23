'use client'
import { useMediaQuery } from 'usehooks-ts'

const BREAKPOINTS = {
  xs: '640px',
  sm: '768px',
  md: '1024px',
  lg: '1280px',
}

const useBreakpoints = (
  breakpoint: keyof typeof BREAKPOINTS = 'sm',
  direction: 'up' | 'down' = 'down',
) => {
  const key = direction === 'down' ? 'max-width' : 'min-width'
  return useMediaQuery(`(${key}: ${BREAKPOINTS[breakpoint]})`)
}

export default useBreakpoints

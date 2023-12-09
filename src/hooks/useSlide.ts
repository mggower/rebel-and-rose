/* eslint-disable @typescript-eslint/no-unused-vars */
import { useSpring } from '@react-spring/web'
import { BoxSizing, useBoxSizing } from './useBoxSizing'

export interface SlideProps {
  closed: boolean
  /**
   * @default 0
   */
  closedSize?: number
  /**
   * @default border-box
   */
  boxSizing?: BoxSizing
  /**
   * @default false
   */
  vertical?: boolean
  /**
   * @description callback fired when the animation comes to a still-stand.
   */
  onRest?(): void
  /**
   * @description callback fired when the animation starts.
   */
  onStart?(): void
  /**
   * @description callback fired when the animation changes.
   */
  onChange?(): void
}

export const useSlide = <T extends HTMLElement = HTMLElement>({
  closed,
  closedSize,
  boxSizing,
  vertical = false,
  ...callbacks
}: SlideProps) => {
  const [ref, size] = useBoxSizing<T>({
    boxSizing,
    handleWidth: !vertical,
    handleHeight: vertical,
  })

  // const

  const animation = useSpring({
    ...callbacks,
  })
}

import { UseResizeDetectorReturn } from 'react-resize-detector/build/types/types'
import { useResizeDetector } from 'react-resize-detector'
import { isNumber } from '@/utils'
import { useRef } from 'react'

export type BoxSizing = 'content-box' | 'border-box'

const BORDER_BOX = 'border-box'

export interface BoxSizingProps {
  /**
   * @default border-box
   */
  boxSizing?: BoxSizing
  /**
   * @default true
   */
  handleWidth?: boolean
  /**
   * @default true
   */
  handleHeight?: boolean
}

export interface BoxSize {
  width?: number
  height?: number
}

export type UseBoxSizingReturn<T extends HTMLElement> = [
  ref: UseResizeDetectorReturn<T>['ref'],
  size: BoxSize,
]

export const useBoxSizing = <T extends HTMLElement = HTMLElement>({
  boxSizing = BORDER_BOX,
  handleWidth = true,
  handleHeight = true,
}: BoxSizingProps): UseBoxSizingReturn<T> => {
  const size = useRef<BoxSize>({})

  const { ref } = useResizeDetector<T>({
    handleWidth,
    handleHeight,
    onResize: (width, height) => {
      const box: BoxSize = {}

      if (ref.current && boxSizing === BORDER_BOX) {
        const rect = ref.current.getBoundingClientRect()
        box.width = rect.width
        box.height = rect.height
      } else {
        box.width = width
        box.height = height
      }

      if (isNumber(box.width)) {
        size.current.width = Math.round(box.width)
      }
      if (isNumber(box.height)) {
        size.current.height = Math.round(box.height)
      }
    },
  })

  return [ref, size.current]
}

import { forwardRef, type HTMLAttributes } from 'react'
import typography, {
  HeaderFontSize,
  TypographyProps,
  applyTypographyProps,
} from '../styles/typography'

type HeadingElement = 'h1' | 'h2' | 'h3' | 'h4' | 'h5'

export interface HeadingProps
  extends TypographyProps<'header'>,
    HTMLAttributes<HTMLHeadingElement> {
  element?: HeadingElement
}

const lookup: Record<HeaderFontSize, HeadingElement> = {
  base: 'h3',
  min: 'h5',
  xs: 'h5',
  sm: 'h4',
  md: 'h3',
  lg: 'h2',
  xl: 'h1',
  xxl: 'h1',
  xxxl: 'h1',
  max: 'h1',
}

const elementGuard =
  (type: HeadingElement) =>
  (size: HeaderFontSize = 'base', element?: HeadingElement) =>
    element === type || (!element && lookup[size] === type)

const isH5 = elementGuard('h5')
const isH4 = elementGuard('h4')
const isH3 = elementGuard('h3')
const isH2 = elementGuard('h2')

export const Heading = forwardRef<HTMLHeadingElement, HeadingProps>(function Heading(
  { children, element, weight, italic, tracking, family, fontSize, uppercase, ...props },
  ref,
) {
  const attributes = applyTypographyProps({ fontSize, weight, italic, tracking, family, uppercase })

  if (isH5(fontSize, element)) {
    return (
      <h5 ref={ref} css={typography.header} {...props} {...attributes}>
        {children}
      </h5>
    )
  }
  if (isH4(fontSize, element)) {
    return (
      <h4 ref={ref} css={typography.header} {...props} {...attributes}>
        {children}
      </h4>
    )
  }
  if (isH3(fontSize, element)) {
    return (
      <h3 ref={ref} css={typography.header} {...props} {...attributes}>
        {children}
      </h3>
    )
  }
  if (isH2(fontSize, element)) {
    return (
      <h2 ref={ref} css={typography.header} {...props} {...attributes}>
        {children}
      </h2>
    )
  }
  return (
    <h1 ref={ref} css={typography.header} {...props} {...attributes}>
      {children}
    </h1>
  )
})

export default Heading

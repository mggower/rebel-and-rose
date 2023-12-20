import { TypographyProps, applyTypographyProps } from '@/styles/typography'
import { forwardRef } from 'react'

interface Props extends TypographyProps<'header'>, React.HTMLAttributes<HTMLHeadingElement> {}

const Heading = forwardRef<HTMLHeadingElement, Props>(function Header(
  { children, weight, italic, tracking, family, fontSize: size, ...props },
  ref,
) {
  const attributes = applyTypographyProps({ fontSize: size, weight, italic, tracking, family })

  switch (size) {
    case 'min':
    case 'xs':
      return (
        <h5 ref={ref} {...props} {...attributes}>
          {children}
        </h5>
      )
    case 'sm':
      return (
        <h4 ref={ref} {...props} {...attributes}>
          {children}
        </h4>
      )
    case 'lg':
      return (
        <h2 ref={ref} {...props} {...attributes}>
          {children}
        </h2>
      )
    case 'xl':
    case 'xxl':
    case 'xxxl':
    case 'max':
      return (
        <h1 ref={ref} {...props} {...attributes}>
          {children}
        </h1>
      )
    default:
      return (
        <h3 ref={ref} {...props} {...attributes}>
          {children}
        </h3>
      )
  }
})

export default Heading

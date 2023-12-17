import typography, { TypographyProps, applyTypographyProps } from '@/styles/typography'
import { forwardRef } from 'react'

interface Props extends React.HTMLAttributes<HTMLSpanElement>, TypographyProps {}

const Body = forwardRef<HTMLSpanElement, Props>(function Body(
  { children, size, weight, italic, tracking, family, ...props },
  ref,
) {
  return (
    <span
      ref={ref}
      {...props}
      {...applyTypographyProps({ size, weight, italic, tracking, family })}
      css={typography.body}>
      {children}
    </span>
  )
})

export default Body

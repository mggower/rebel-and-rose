import typography, { TypographyProps, applyTypographyProps } from '@/styles/typography'
import { forwardRef } from 'react'

interface Props extends React.HTMLAttributes<HTMLSpanElement>, TypographyProps {}

const Typography = forwardRef<HTMLSpanElement, Props>(function Body(
  { children, fontSize, weight, italic, tracking, family, prose, uppercase, ...props },
  ref,
) {
  return (
    <span
      ref={ref}
      {...props}
      {...applyTypographyProps({ fontSize, weight, italic, tracking, family, prose, uppercase })}
      css={typography.body}>
      {children}
    </span>
  )
})

export default Typography

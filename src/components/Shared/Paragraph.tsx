import typography, { TypographyProps, applyTypographyProps } from '@/styles/typography'
import { forwardRef } from 'react'

interface Props extends React.HTMLAttributes<HTMLSpanElement>, TypographyProps {}

const Paragraph = forwardRef<HTMLParagraphElement, Props>(function Body(
  { children, fontSize, weight, italic, tracking, family, prose, ...props },
  ref,
) {
  return (
    <p
      ref={ref}
      {...props}
      {...applyTypographyProps({ fontSize, weight, italic, tracking, family, prose })}
      css={typography.body}>
      {children}
    </p>
  )
})

export default Paragraph

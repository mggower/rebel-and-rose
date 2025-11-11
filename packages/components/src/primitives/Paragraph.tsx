import { forwardRef, type HTMLAttributes } from 'react'
import typography, { TypographyProps, applyTypographyProps } from '../styles/typography'

export interface ParagraphProps extends HTMLAttributes<HTMLParagraphElement>, TypographyProps {}

export const Paragraph = forwardRef<HTMLParagraphElement, ParagraphProps>(function Paragraph(
  { children, fontSize, weight, italic, tracking, family, prose, uppercase, ...props },
  ref,
) {
  return (
    <p
      ref={ref}
      {...props}
      {...applyTypographyProps({ fontSize, weight, italic, tracking, family, prose, uppercase })}
      css={typography.body}>
      {children}
    </p>
  )
})

export default Paragraph

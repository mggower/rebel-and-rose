import { forwardRef, type HTMLAttributes } from 'react'
import typographyStyles, { TypographyProps, applyTypographyProps } from '../styles/typography'

export interface TypographyComponentProps extends HTMLAttributes<HTMLSpanElement>, TypographyProps {}

export const Typography = forwardRef<HTMLSpanElement, TypographyComponentProps>(function Typography(
  { children, fontSize, weight, italic, tracking, family, prose, uppercase, ...props },
  ref,
) {
  return (
    <span
      ref={ref}
      {...props}
      {...applyTypographyProps({ fontSize, weight, italic, tracking, family, prose, uppercase })}
      css={typographyStyles.body}>
      {children}
    </span>
  )
})

export default Typography

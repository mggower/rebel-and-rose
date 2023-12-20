import styles, { ButtonStyleProps, applyButtonStyleProps } from '@/styles/buttons'
import { TypographyProps, applyTypographyProps } from '@/styles/typography'
import { forwardRef } from 'react'

interface Props
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    TypographyProps,
    ButtonStyleProps {}

const Button = forwardRef<HTMLButtonElement, Props>(function Button(
  { weight, active, family, italic, tracking, selected, fontSize, buttonTheme, children, ...props },
  ref,
) {
  return (
    <button
      ref={ref}
      css={styles.button}
      {...applyTypographyProps({ fontSize, weight, family, italic, tracking })}
      {...applyButtonStyleProps({ buttonTheme, selected, active })}
      {...props}>
      {children}
    </button>
  )
})

export default Button

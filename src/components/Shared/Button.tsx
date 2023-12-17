import styles, { ButtonStyleProps, applyButtonStyleProps } from '@/styles/button'
import { TypographyProps, applyTypographyProps } from '@/styles/typography'
import { forwardRef } from 'react'

interface Props
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    TypographyProps,
    ButtonStyleProps {}

const Button = forwardRef<HTMLButtonElement, Props>(function Button(
  { buttonTheme, active, selected, size, weight, family, italic, tracking, children, ...props },
  ref,
) {
  return (
    <button
      ref={ref}
      css={styles.button}
      {...applyTypographyProps({ size, weight, family, italic, tracking })}
      {...applyButtonStyleProps({ buttonTheme, selected, active })}
      {...props}>
      {children}
    </button>
  )
})

export default Button

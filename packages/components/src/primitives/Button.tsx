import {
  forwardRef,
  useImperativeHandle,
  useRef,
  type ButtonHTMLAttributes,
  type MouseEventHandler,
} from 'react'
import buttonStyles, { ButtonStyleProps, applyButtonStyleProps } from '../styles/buttons'
import { TypographyProps, applyTypographyProps } from '../styles/typography'

export interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    TypographyProps,
    ButtonStyleProps {}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(function Button(
  {
    weight,
    active,
    family,
    italic,
    tracking,
    selected,
    fontSize,
    children,
    uppercase,
    buttonTheme,
    buttonSize,
    onMouseUp: forwardedOnMouseUp,
    ...rest
  },
  ref,
) {
  const innerRef = useRef<HTMLButtonElement>(null)

  useImperativeHandle(ref, () => innerRef.current as HTMLButtonElement, [])

  const handleMouseUp: MouseEventHandler<HTMLButtonElement> = (event) => {
    innerRef.current?.blur()
    forwardedOnMouseUp?.(event)
  }

  return (
    <button
      ref={innerRef}
      css={buttonStyles.button}
      onMouseUp={handleMouseUp}
      {...applyTypographyProps({ fontSize, weight, family, italic, tracking, uppercase })}
      {...applyButtonStyleProps({ buttonTheme, selected, active, buttonSize })}
      {...rest}>
      {children}
    </button>
  )
})

export default Button

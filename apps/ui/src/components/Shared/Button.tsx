import styles, { ButtonStyleProps, applyButtonStyleProps } from '@/styles/buttons'
import { TypographyProps, applyTypographyProps } from '@/styles/typography'
import { FunctionComponent, useRef } from 'react'

interface Props
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    TypographyProps,
    ButtonStyleProps {}

const Button: FunctionComponent<Props> = ({
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
  onMouseUp: _onMouseUp,
  ...props
}) => {
  const ref = useRef<HTMLButtonElement>(null)
  const onMouseUp: React.MouseEventHandler<HTMLButtonElement> = (event) => {
    ref.current?.blur()
    _onMouseUp?.(event)
  }

  return (
    <button
      ref={ref}
      css={styles.button}
      onMouseUp={onMouseUp}
      {...applyTypographyProps({ fontSize, weight, family, italic, tracking, uppercase })}
      {...applyButtonStyleProps({ buttonTheme, selected, active })}
      {...props}>
      {children}
    </button>
  )
}

export default Button

import styles from './button.module.sass'

interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  /**
   * @default 'primary'
   */
  variant?: 'primary' | 'secondary' | 'tertiary'
  size?: 'normal' | 'small' | 'icon'
}

export default function Button({
  variant = 'primary',
  size = 'normal',
  children,
  ...props
}: ButtonProps) {
  return (
    <button className={`${styles.button} ${styles[variant]} ${styles[size]}`} {...props}>
      {children}
    </button>
  )
}

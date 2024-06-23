import styles from './button.module.sass'

interface LinkButtonProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  /**
   * @default 'primary'
   */
  variant?: 'primary' | 'secondary' | 'tertiary'
  size?: 'normal' | 'small' | 'icon'
}

export default function LinkButton({
  variant = 'primary',
  size = 'normal',
  target = '_blank',
  rel = 'noopener noreferrer',
  children,
  ...props
}: LinkButtonProps) {
  return (
    <a
      rel={rel}
      target={target}
      className={`${styles.button} ${styles[variant]} ${styles[size]}`}
      {...props}>
      {children}
    </a>
  )
}

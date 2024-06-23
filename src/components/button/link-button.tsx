import Link, { LinkProps } from 'next/link'
import styles from './button.module.sass'

interface LinkButtonProps extends LinkProps {
  /**
   * @default 'primary'
   */
  variant?: 'primary' | 'secondary' | 'tertiary'
  size?: 'normal' | 'small' | 'icon'
  children?: React.ReactNode
}

export default function LinkButton({
  variant = 'primary',
  size = 'normal',
  children,
  ...props
}: LinkButtonProps) {
  return (
    <Link className={`${styles.button} ${styles[variant]} ${styles[size]}`} {...props}>
      {children}
    </Link>
  )
}

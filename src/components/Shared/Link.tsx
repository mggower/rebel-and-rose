import { Link as RouterLink, LinkProps } from 'react-router-dom'
import { TypographyProps } from '@/styles/typography'
import { forwardRef } from 'react'
import styles, { LinkStyleProps } from '@/styles/link'

interface Props extends Omit<LinkProps, 'color'>, LinkStyleProps, TypographyProps<'body'> {
  external?: boolean
}

const Link = forwardRef<HTMLAnchorElement, Props>(function Link(
  {
    size,
    color,
    theme,
    weight,
    family,
    italic,
    children,
    tracking = 'wider',
    external = false,
    ...props
  },
  ref,
) {
  return (
    <RouterLink
      {...props}
      ref={ref}
      css={styles.link}
      data-font-size={size}
      data-link-color={color}
      data-link-theme={theme}
      data-font-italic={italic}
      data-font-family={family}
      data-font-weight={weight}
      data-font-tracking={tracking}
      target={external ? '_blank' : undefined}
      rel={external ? 'noreferrer' : undefined}>
      {children}
    </RouterLink>
  )
})

export default Link

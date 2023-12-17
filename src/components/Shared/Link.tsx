import { Link as RouterLink, LinkProps } from 'react-router-dom'
import { TypographyProps, applyTypographyProps } from '@/styles/typography'
import { forwardRef } from 'react'
import styles, { LinkStyleProps, applyLinkStyleProps } from '@/styles/link'

interface Props extends LinkProps, LinkStyleProps, TypographyProps {
  external?: boolean
  selected?: boolean
}

const Link = forwardRef<HTMLAnchorElement, Props>(function Link(
  {
    size,
    active,
    weight,
    family,
    italic,
    children,
    selected,
    uppercase,
    linkColor,
    linkTheme,
    tracking = 'wider',
    external = false,
    ...props
  },
  ref,
) {
  return (
    <RouterLink
      ref={ref}
      css={styles.link}
      target={external ? '_blank' : undefined}
      rel={external ? 'noreferrer' : undefined}
      {...applyLinkStyleProps({ linkColor, linkTheme, selected, active, uppercase })}
      {...applyTypographyProps({ size, weight, family, italic, tracking })}
      {...props}>
      {children}
    </RouterLink>
  )
})

export default Link

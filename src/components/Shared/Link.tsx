import { TypographyProps, applyTypographyProps } from '@/styles/typography'
import { Link as RouterLink, LinkProps } from 'react-router-dom'
import { forwardRef } from 'react'
import buttons, { ButtonStyleProps, applyButtonStyleProps } from '@/styles/buttons'
import links, { LinkStyleProps, applyLinkStyleProps } from '@/styles/links'

interface Props extends LinkProps, LinkStyleProps, TypographyProps, ButtonStyleProps {
  variant?: 'link' | 'button'
  external?: boolean
}

const Link = forwardRef<HTMLAnchorElement, Props>(function Link(
  {
    active,
    weight,
    family,
    italic,
    shadow,
    children,
    selected,
    uppercase,
    fontSize,
    linkColor,
    linkTheme,
    buttonTheme,
    variant = 'link',
    tracking = 'wider',
    external = false,
    ...props
  },
  ref,
) {
  const attributes = {
    ...(variant === 'link'
      ? applyLinkStyleProps({ linkColor, linkTheme, selected, active, uppercase })
      : applyButtonStyleProps({ buttonTheme, active, selected, shadow })),
    ...applyTypographyProps({ fontSize, weight, family, italic, tracking }),
  }

  return (
    <RouterLink
      ref={ref}
      {...props}
      {...attributes}
      target={external ? '_blank' : undefined}
      rel={external ? 'noreferrer' : undefined}
      css={variant === 'link' ? links.link : buttons.button}>
      {children}
    </RouterLink>
  )
})

export default Link

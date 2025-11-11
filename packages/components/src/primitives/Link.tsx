import { forwardRef } from 'react'
import { Link as RouterLink, type LinkProps } from 'react-router-dom'
import buttons, { ButtonStyleProps, applyButtonStyleProps } from '../styles/buttons'
import links, { LinkStyleProps, applyLinkStyleProps } from '../styles/links'
import { TypographyProps, applyTypographyProps } from '../styles/typography'

export interface RebelLinkProps
  extends LinkProps,
    LinkStyleProps,
    TypographyProps,
    ButtonStyleProps {
  variant?: 'link' | 'button'
  external?: boolean
}

export const Link = forwardRef<HTMLAnchorElement, RebelLinkProps>(function Link(
  {
    active,
    weight,
    family,
    italic,
    children,
    selected,
    uppercase,
    fontSize,
    linkColor,
    linkTheme,
    underline,
    buttonTheme,
    buttonSize,
    variant = 'link',
    tracking = 'wider',
    external = false,
    ...props
  },
  ref,
) {
  const attributes = {
    ...(variant === 'link'
      ? applyLinkStyleProps({ linkColor, linkTheme, selected, active, underline })
      : applyButtonStyleProps({ buttonTheme, active, selected, buttonSize })),
    ...applyTypographyProps({ fontSize, weight, family, italic, tracking, uppercase }),
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

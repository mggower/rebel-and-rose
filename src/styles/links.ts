import { CSSObject, css } from '@emotion/react'
import typography from './typography'
import theme from './theme'

export type LinkColor = 'primary' | 'secondary' | 'tertiary'
export type LinkTheme = 'light' | 'dark'

export interface LinkStyleProps {
  linkColor?: LinkColor
  linkTheme?: LinkTheme
  active?: boolean
  selected?: boolean
  uppercase?: boolean
}

interface ColorStyle {
  foreground: string
}

interface LinkStyle extends ColorStyle {
  hover: ColorStyle
  active: ColorStyle
  visited: ColorStyle
}

const lookup: Record<LinkTheme, Record<LinkColor, LinkStyle>> = {
  light: {
    primary: {
      foreground: theme.palette.earth[700],
      hover: { foreground: theme.palette.earth[400] },
      active: { foreground: theme.palette.earth[500] },
      visited: { foreground: theme.palette.earth[600] },
    },
    secondary: {
      foreground: theme.palette.ink[950],
      hover: { foreground: theme.palette.blush[500] },
      active: { foreground: theme.palette.blush[600] },
      visited: { foreground: theme.palette.blush[700] },
    },
    tertiary: {
      foreground: theme.palette.russet[500],
      hover: { foreground: theme.palette.russet[700] },
      active: { foreground: theme.palette.russet[800] },
      visited: { foreground: theme.palette.russet[600] },
    },
  },
  dark: {
    primary: {
      foreground: theme.palette.earth[200],
      hover: { foreground: theme.palette.earth[400] },
      active: { foreground: theme.palette.earth[500] },
      visited: { foreground: theme.palette.earth[300] },
    },
    secondary: {
      foreground: theme.palette.russet[300],
      hover: { foreground: theme.palette.russet[200] },
      active: { foreground: theme.palette.russet[300] },
      visited: { foreground: theme.palette.russet[400] },
    },
    tertiary: {
      foreground: theme.palette.ink['75'],
      hover: { foreground: theme.palette.ink[200] },
      active: { foreground: theme.palette.ink[300] },
      visited: { foreground: theme.palette.ink[100] },
    },
  },
}

const applyStyle = (linkColor: LinkColor, linkTheme: LinkTheme): CSSObject => {
  const { foreground, hover, active, visited } = lookup[linkTheme][linkColor]
  return {
    color: foreground,
    ['&:hover']: {
      color: hover.foreground,
    },
    ['&:active']: {
      color: active.foreground,
    },
    ['&:visited']: {
      color: visited.foreground,
    },
  }
}

const linkColorAttr = theme.attr.custom<LinkColor>('link', 'color')
const linkThemeAttr = theme.attr.custom<LinkTheme>('link', 'theme')

export const applyLinkStyleProps = ({
  linkColor,
  linkTheme,
  active = false,
  selected = false,
  uppercase = false,
}: LinkStyleProps) => ({
  ['data-link-color']: linkColor,
  ['data-link-theme']: linkTheme,
  ['data-uppercase']: uppercase,
  ['data-selected']: selected,
  ['data-active']: active,
})

export default {
  link: css(
    typography.body,
    {
      ...applyStyle('primary', 'light'),
      [linkThemeAttr.eq('dark')]: applyStyle('primary', 'dark'),

      [linkColorAttr.eq('secondary')]: {
        ...applyStyle('secondary', 'light'),
        [linkThemeAttr.eq('dark')]: applyStyle('secondary', 'dark'),
      },

      [linkColorAttr.eq('tertiary')]: {
        ...applyStyle('tertiary', 'light'),
        [linkThemeAttr.eq('dark')]: applyStyle('tertiary', 'dark'),
      },
    },
    {
      cursor: 'pointer',
      padding: '4px 8px',
      outlineOffset: '2px',
      textDecorationLine: 'none',
      outline: '2px solid transparent',
      borderRadius: theme.rounded.sm,

      [theme.attr.selected.eq(true)]: {
        textDecorationLine: 'underline',
      },

      [theme.attr.custom<boolean>('uppercase').not(false)]: {
        textTransform: 'uppercase',
      },

      [`&:focus, ${theme.attr.active.eq(true)}`]: {
        backgroundColor: theme.palette.ink[100],
        [linkThemeAttr.eq('dark')]: {
          backgroundColor: theme.palette.ink[800],
        },
      },

      ['&:disabled']: {
        cursor: 'not-allowed',
        pointerEvents: 'none',
        color: theme.palette.ink[300],
      },
    },
  ),
}

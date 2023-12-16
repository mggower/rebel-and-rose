import { CSSObject, css } from '@emotion/react'
import typography from './typography'
import palette from './palette'
import theme from './theme'

export type LinkColor = 'primary' | 'secondary' | 'tertiary'
export type LinkTheme = 'light' | 'dark'

export interface LinkStyleProps {
  color?: LinkColor
  theme?: LinkTheme
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
      foreground: palette.earth[700],
      hover: { foreground: palette.earth[400] },
      active: { foreground: palette.earth[500] },
      visited: { foreground: palette.earth[600] },
    },
    secondary: {
      foreground: palette.russet[500],
      hover: { foreground: palette.russet[700] },
      active: { foreground: palette.russet[800] },
      visited: { foreground: palette.russet[600] },
    },
    tertiary: {
      foreground: palette.ink[950],
      hover: { foreground: palette.ink[600] },
      active: { foreground: palette.ink[700] },
      visited: { foreground: palette.ink[800] },
    },
  },
  dark: {
    primary: {
      foreground: palette.earth[200],
      hover: { foreground: palette.earth[400] },
      active: { foreground: palette.earth[500] },
      visited: { foreground: palette.earth[300] },
    },
    secondary: {
      foreground: palette.russet[300],
      hover: { foreground: palette.russet[200] },
      active: { foreground: palette.russet[300] },
      visited: { foreground: palette.russet[400] },
    },
    tertiary: {
      foreground: palette.ink[50],
      hover: { foreground: palette.ink[200] },
      active: { foreground: palette.ink[300] },
      visited: { foreground: palette.ink[100] },
    },
  },
}

const applyStyle = (props: { color: LinkColor; theme: LinkTheme }): CSSObject => {
  const { foreground, hover, active, visited } = lookup[props.theme][props.color]
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

const linkColor = theme.attr.custom<LinkColor>('link', 'color')
const linkTheme = theme.attr.custom<LinkTheme>('link', 'theme')

export default {
  link: css(
    typography.body,
    {
      ...applyStyle({ color: 'primary', theme: 'light' }),
      [linkTheme.eq('dark')]: applyStyle({ color: 'primary', theme: 'dark' }),

      [linkColor.eq('secondary')]: {
        ...applyStyle({ color: 'secondary', theme: 'light' }),
        [linkTheme.eq('dark')]: applyStyle({ color: 'secondary', theme: 'dark' }),
      },

      [linkColor.eq('tertiary')]: {
        ...applyStyle({ color: 'tertiary', theme: 'light' }),
        [linkTheme.eq('dark')]: applyStyle({ color: 'tertiary', theme: 'dark' }),
      },
    },
    {
      cursor: 'pointer',
      padding: '4px 12px',
      outlineOffset: '2px',
      textDecorationLine: 'none',
      outline: '2px solid transparent',
      borderRadius: theme.rounded.sm,

      [theme.attr.custom<boolean>('uppercase').not(false)]: {
        textTransform: 'uppercase',
      },

      [`&:focus, ${theme.attr.active.eq(true)}`]: {
        backgroundColor: palette.ink[100],
        [linkTheme.eq('dark')]: {
          backgroundColor: palette.ink[800],
        },
      },

      ['&:disabled']: {
        cursor: 'not-allowed',
        pointerEvents: 'none',
        color: palette.ink[300],
      },
    },
  ),
}

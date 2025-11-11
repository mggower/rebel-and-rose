import { CSSObject, css } from '@emotion/react'
import theme from '@rebel/theme'
import typography from './typography'
import library from './library'

export type LinkColor = 'primary' | 'secondary' | 'tertiary'
export type LinkTheme = 'light' | 'dark'

export interface LinkStyleProps {
  linkColor?: LinkColor
  linkTheme?: LinkTheme
  active?: boolean
  selected?: boolean
  underline?: boolean
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
      foreground: theme.palette.earth.main,
      hover: { foreground: theme.palette.earth[400] },
      active: { foreground: theme.palette.earth[500] },
      visited: { foreground: theme.palette.earth[600] },
    },
    secondary: {
      foreground: theme.palette.ink.main,
      hover: { foreground: theme.palette.blush[500] },
      active: { foreground: theme.palette.blush[600] },
      visited: { foreground: theme.palette.blush[700] },
    },
    tertiary: {
      foreground: theme.palette.ink[800],
      hover: { foreground: theme.palette.ink[900] },
      active: { foreground: theme.palette.ink[950] },
      visited: { foreground: theme.palette.ink[700] },
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
      foreground: theme.palette.ink[75],
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
    '&:hover': {
      color: hover.foreground,
      textDecorationThickness: '2px',
      textDecorationLine: 'underline',
      textDecorationColor: hover.foreground,
      '&:active': {
        color: active.foreground,
      },
    },
    '&:active': {
      color: active.foreground,
    },
    '&:visited:not(:hover)': {
      color: visited.foreground,
    },
  }
}

const linkColorAttr = theme.attr.create<LinkColor>('link', 'color')
const linkThemeAttr = theme.attr.create<LinkTheme>('link', 'theme')

export const applyLinkStyleProps = ({
  linkColor,
  linkTheme,
  active = false,
  selected = false,
  underline = false,
}: LinkStyleProps) => ({
  ['data-link-color']: linkColor,
  ['data-link-theme']: linkTheme,
  ['data-underline']: underline,
  ['data-selected']: selected,
  ['data-active']: active,
})

export const linkStyles = css(
  typography.body,
  library.outline.none,
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
    padding: theme.style.box(1, 2),
    textDecorationLine: 'none',
    borderRadius: theme.rounded.sm,
    [theme.attr.selected.eq(true)]: {
      textDecorationLine: 'underline',
    },
    [theme.attr.create<boolean>('underline').eq(true)]: {
      textDecorationLine: 'underline',
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
)

export default {
  link: linkStyles,
}

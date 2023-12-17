import { CSSObject, css } from '@emotion/react'
import typography from './typography'
import theme from './theme'
import library from './library'

export type ButtonTheme = 'primary' | 'secondary' | 'tertiary'

export interface ButtonStyleProps {
  buttonTheme?: ButtonTheme
  active?: boolean
  selected?: boolean
}

interface ColorStyleBase {
  foreground: string
  background: string
  hover: Omit<ColorStyleBase, 'hover'>
}

interface ColorStyle extends ColorStyleBase {
  selected: ColorStyleBase
  active: Omit<ColorStyleBase, 'hover'>
}

const lookup: Record<ButtonTheme, ColorStyle> = {
  primary: {
    foreground: theme.palette.wheat[100],
    background: theme.palette.russet.main,
    hover: {
      foreground: theme.palette.wheat[100],
      background: theme.palette.russet[600],
    },
    selected: {
      foreground: theme.palette.wheat[100],
      background: theme.palette.russet[600],
      hover: {
        foreground: theme.palette.wheat[100],
        background: theme.palette.russet[700],
      },
    },
    active: {
      foreground: theme.palette.wheat[100],
      background: theme.palette.russet[800],
    },
  },
  secondary: {
    foreground: theme.palette.earth.main,
    background: theme.palette.wheat[100],
    hover: {
      foreground: theme.palette.earth.main,
      background: theme.palette.wheat[200],
    },
    selected: {
      foreground: theme.palette.earth.main,
      background: theme.palette.wheat[200],
      hover: {
        foreground: theme.palette.earth[800],
        background: theme.palette.wheat[300],
      },
    },
    active: {
      foreground: theme.palette.earth[800],
      background: theme.palette.wheat[400],
    },
  },
  tertiary: {
    foreground: theme.palette.ink.main,
    background: theme.palette.transparent,
    hover: {
      foreground: theme.palette.ink.main,
      background: theme.palette.ink[50],
    },
    selected: {
      foreground: theme.palette.ink.main,
      background: theme.palette.ink[50],
      hover: {
        foreground: theme.palette.ink.main,
        background: theme.palette.ink[100],
      },
    },
    active: {
      foreground: theme.palette.ink.main,
      background: theme.palette.ink[200],
    },
  },
}

const applyStyle = ({
  foreground,
  background,
  selected,
  active,
  hover,
}: ColorStyle): CSSObject => ({
  color: foreground,
  backgroundColor: background,

  ['&:hover']: {
    color: hover.foreground,
    backgroundColor: hover.background,
  },

  ['&:active']: {
    color: active.foreground,
    backgroundColor: active.background,
  },

  [theme.attr.selected.eq(true)]: {
    color: selected.foreground,
    backgroundColor: selected.background,
    ['&:hover']: {
      color: selected.hover.foreground,
      backgroundColor: selected.hover.background,
    },
  },
})

const buttonThemeAttr = theme.attr.custom<ButtonTheme>('button', 'theme')

export const applyButtonStyleProps = ({ buttonTheme, active, selected }: ButtonStyleProps) => ({
  ['data-button-theme']: buttonTheme,
  ['data-selected']: selected,
  ['data-active']: active,
})

export default {
  button: css(
    typography.body,
    library.hideOutline,
    {
      padding: '1rem',
      cursor: 'pointer',
      textDecorationLine: 'none',
      borderRadius: theme.rounded.sm,
      border: '2px solid transparent',

      [`&:focus, ${theme.attr.active.eq(true)}`]: {
        borderColor: theme.palette.ink[200],
      },
    },
    {
      ...applyStyle(lookup.primary),
      [buttonThemeAttr.eq('secondary')]: applyStyle(lookup.secondary),
      [buttonThemeAttr.eq('tertiary')]: applyStyle(lookup.tertiary),
    },
  ),
}

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
  focus: string
  selected: ColorStyleBase
  active: Omit<ColorStyleBase, 'hover'>
}

const lookup: Record<ButtonTheme, ColorStyle> = {
  primary: {
    focus: theme.palette.russet[600],
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
    focus: theme.palette.earth[500],
    foreground: theme.palette.wheat[100],
    background: theme.palette.earth[600],
    hover: {
      foreground: theme.palette.wheat[100],
      background: theme.palette.earth[500],
    },
    selected: {
      foreground: theme.palette.wheat[100],
      background: theme.palette.earth[500],
      hover: {
        foreground: theme.palette.wheat[100],
        background: theme.palette.earth[700],
      },
    },
    active: {
      foreground: theme.palette.wheat[100],
      background: theme.palette.earth[700],
    },
  },
  tertiary: {
    focus: theme.palette.ink[100],
    foreground: theme.palette.ink.main,
    background: theme.palette.wheat[100],
    hover: {
      foreground: theme.palette.ink.main,
      background: theme.palette.ink[100],
    },
    selected: {
      foreground: theme.palette.ink.main,
      background: theme.palette.wheat[300],
      hover: {
        foreground: theme.palette.ink.main,
        background: theme.palette.wheat[400],
      },
    },
    active: {
      foreground: theme.palette.ink.main,
      background: theme.palette.ink[400],
    },
  },
}

const applyStyle = ({
  foreground,
  background,
  selected,
  active,
  focus,
  hover,
}: ColorStyle): CSSObject => ({
  color: foreground,
  backgroundColor: background,

  ['&:hover']: {
    color: hover.foreground,
    backgroundColor: hover.background,
    ['&:active']: {
      color: active.foreground,
      backgroundColor: active.background,
    },
  },

  [`&:focus, ${theme.attr.active.eq(true)}`]: {
    backgroundColor: focus,
    borderColor: theme.palette.ink[200],
    boxShadow: theme.shadow.lg,
  },

  [theme.attr.selected.eq(true)]: {
    color: selected.foreground,
    backgroundColor: selected.background,
    textDecorationLine: 'underline',
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
    library.outline.none,
    library.shadow,
    {
      display: 'flex',
      cursor: 'pointer',
      placeItems: 'center',
      placeContent: 'center',
      textDecorationLine: 'none',
      border: '1px solid transparent',
      padding: theme.spacing(4),
      boxShadow: theme.shadow.sm,
      borderRadius: theme.rounded.sm,
    },
    {
      ...applyStyle(lookup.primary),
      [buttonThemeAttr.eq('secondary')]: applyStyle(lookup.secondary),
      [buttonThemeAttr.eq('tertiary')]: applyStyle(lookup.tertiary),
    },
  ),
}

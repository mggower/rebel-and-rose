import { CSSObject, css } from '@emotion/react'
import theme from '@rebel/theme'
import library from './library'
import typography from './typography'

export type ButtonTheme = 'primary' | 'secondary' | 'tertiary'
export type ButtonSize = 'normal' | 'narrow'

export interface ButtonStyleProps {
  buttonTheme?: ButtonTheme
  active?: boolean
  selected?: boolean
  buttonSize?: ButtonSize
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
    boxShadow: theme.shadow.md,
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

const buttonThemeAttr = theme.attr.create<ButtonTheme>('button', 'theme')
const buttonSizeAttr = theme.attr.create<ButtonSize>('button', 'size')

export const applyButtonStyleProps = ({
  buttonTheme,
  buttonSize,
  active,
  selected,
}: ButtonStyleProps) => ({
  ['data-button-size']: buttonSize,
  ['data-button-theme']: buttonTheme,
  ['data-selected']: selected,
  ['data-active']: active,
})

export const buttonStyles = css(
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
    boxShadow: theme.shadow.sm,
    borderRadius: theme.rounded.sm,
    padding: theme.spacing(4),
    [buttonSizeAttr.eq('narrow')]: {
      padding: theme.style.box(2, 4),
    },
  },
  {
    ...applyStyle(lookup.primary),
    [buttonThemeAttr.eq('secondary')]: applyStyle(lookup.secondary),
    [buttonThemeAttr.eq('tertiary')]: applyStyle(lookup.tertiary),
  },
)

export default {
  button: buttonStyles,
}

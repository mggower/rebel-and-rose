import { css } from '@emotion/react'
import palette from './palette'
import theme from './theme'

export default {
  contain: css({
    width: '100vw',
    [theme.screen.md]: {
      width: '80vw',
      maxWidth: '1200px',
    },
  }),
  shadow: css({
    boxShadow: theme.shadow.sm,
    [theme.attr.custom<boolean>('shadow', 'md').eq(true)]: {
      boxShadow: theme.shadow.md,
    },
    [theme.attr.custom<boolean>('shadow', 'lg').eq(true)]: {
      boxShadow: theme.shadow.lg,
    },
  }),
  button: css({
    padding: '1rem',
    textTransform: 'uppercase',
    color: palette.wheat[100],
    textDecorationLine: 'none',
    outline: '2px solid transparent',
    borderRadius: theme.rounded.sm,
    backgroundColor: palette.russet.main,
    outlineOffset: '2px',
    '&:hover, &:focus': {
      backgroundColor: palette.russet[600],
      '&:active': {
        backgroundColor: palette.russet[700],
      },
    },
  }),
  link: css({
    cursor: 'pointer',
    borderRadius: theme.rounded.sm,
    padding: '4px 12px',
    fontSize: theme.typography.size[100],
    textTransform: 'uppercase',
    letterSpacing: theme.typography.tracking.widest,
    color: palette.ink.main,
    textDecorationLine: 'none',
    outline: '2px solid transparent',
    outlineOffset: '2px',
    transitionProperty: 'all',
    transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)',
    transitionDuration: '150ms',
    '&:hover': {
      backgroundColor: palette.ink[100],
    },
    [`&:active, ${theme.attr.active.eq(true)}`]: {
      backgroundCOlor: palette.ink[300],
    },
    [theme.attr.selected.eq(true)]: {
      textDecorationLine: 'underline',
    },
    [theme.attr.color.eq('secondary')]: {
      color: palette.russet.main,
      [`&:active, ${theme.attr.active.eq(true)}`]: {
        color: palette.ink.main,
      },
    },
    [theme.attr.theme.eq('dark')]: {
      color: palette.wheat[100],
      '&:hover': {
        backgroundColor: `rgba(${palette.ink[600]}, 0.5)`,
      },
      [`&:active, ${theme.attr.active.eq(true)}`]: {
        color: palette.ink.main,
        backgroundColor: palette.earth[300],
      },
    },
  }),
}

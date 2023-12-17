import { css } from '@emotion/react'
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
  hideOutline: css({
    outline: '2px solid transparent',
    outlineOffset: '2px',
  }),
  button: css({
    padding: '1rem',
    textTransform: 'uppercase',
    color: theme.palette.wheat[100],
    textDecorationLine: 'none',
    outline: '2px solid transparent',
    borderRadius: theme.rounded.sm,
    backgroundColor: theme.palette.russet.main,
    outlineOffset: '2px',
    '&:hover, &:focus': {
      backgroundColor: theme.palette.russet[600],
      '&:active': {
        backgroundColor: theme.palette.russet[700],
      },
    },
  }),
}

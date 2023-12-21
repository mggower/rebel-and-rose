import { css } from '@emotion/react'
import theme from './theme'

const shadow = theme.attr.custom<'sm' | 'md' | 'lg' | 'none'>('shadow')

export default {
  contain: css({
    width: `calc(100vw - ${theme.spacing[18]})`,
    [theme.screen.md]: {
      width: '80vw',
      maxWidth: '1200px',
    },
  }),
  shadow: css({
    [shadow.not('none')]: {
      boxShadow: theme.shadow.sm,
    },
    [shadow.eq('md')]: {
      boxShadow: theme.shadow.md,
    },
    [shadow.eq('lg')]: {
      boxShadow: theme.shadow.lg,
    },
  }),
  outline: {
    none: css({
      outline: '2px solid transparent',
      outlineOffset: '2px',
    }),
  },
  rounded: {
    left: {
      none: css({
        borderTopLeftRadius: theme.rounded.none,
        borderBottomLeftRadius: theme.rounded.none,
      }),
    },
    right: {
      none: css({
        borderTopRightRadius: theme.rounded.none,
        borderBottomRightRadius: theme.rounded.none,
      }),
    },
  },
  flex: {
    column: css({
      display: 'flex',
      flexDirection: 'column',
    }),
    center: css({
      alignItems: 'center',
      justifyContent: 'center',
    }),
  },
}

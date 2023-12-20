import { css } from '@emotion/react'
import theme from './theme'

const shadow = theme.attr.custom<'sm' | 'md' | 'lg' | 'none'>('shadow')

export default {
  contain: css({
    width: `calc(100vw - ${theme.spacing[20]})`,
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
  outlineNone: css({
    outline: '2px solid transparent',
    outlineOffset: '2px',
  }),
  roundedLeftNone: css({
    borderTopLeftRadius: theme.rounded.none,
    borderBottomLeftRadius: theme.rounded.none,
  }),
  roundedRightNone: css({
    borderTopRightRadius: theme.rounded.none,
    borderBottomRightRadius: theme.rounded.none,
  }),
}

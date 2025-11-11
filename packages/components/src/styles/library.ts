import { css } from '@emotion/react'
import theme from '@rebel/theme'

const shadowAttr = theme.attr.create<'sm' | 'md' | 'lg' | 'none'>('shadow')

export const library = {
  contain: css({
    width: `calc(100vw - ${theme.spacing(18)})`,
    [theme.screen.md]: {
      width: '80vw',
      maxWidth: '1200px',
    },
  }),
  shadow: css({
    [shadowAttr.not('none')]: {
      boxShadow: theme.shadow.sm,
    },
    [shadowAttr.eq('md')]: {
      boxShadow: theme.shadow.md,
    },
    [shadowAttr.eq('lg')]: {
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
    end: css({
      alignItems: 'flex-end',
      justifyContent: 'flex-end',
    }),
    start: css({
      alignItems: 'flex-start',
      justifyContent: 'flex-start',
    }),
    itemsCenter: css({
      alignItems: 'center',
    }),
  },
  invisible: css({
    opacity: 0,
    width: '100%',
    height: '100%',
  }),
}

export default library

import library from '@/styles/library'
import theme from '@/styles/theme'
import { css } from '@emotion/react'

export default {
  layer: css(library.flex.column, library.flex.itemsCenter),
  content: {
    wrapper: css(library.contain, {
      [theme.screen.md]: {
        paddingRight: '32vw',
      },
    }),
    component: css(library.flex.column, {
      alignItems: 'flex-start',
      boxSizing: 'border-box',
      padding: theme.style.box(8, 4),
      gap: theme.spacing(8),
      [theme.screen.md]: {
        padding: theme.style.box(12, 8),
      },
    }),
    paragraph: css({
      color: theme.palette.ink.main,
      fontSize: theme.typography.fontSize[200],
      [theme.attr.theme.eq('dark')]: {
        color: theme.palette.wheat[100],
      },
    }),
    links: css({
      display: 'flex',
      alignItems: 'center',
      marginLeft: theme.spacing(-2),
    }),
  },
}

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
      boxSizing: 'border-box',
      padding: theme.style.box(8, 0),
      gap: theme.spacing(8),
      justifyContent: 'center',
      [theme.screen.md]: {
        justifyContent: 'flex-start',
        padding: theme.style.box(12, 4),
      },
    }),
    paragraph: css({
      color: theme.palette.ink.main,
      fontSize: theme.typography.fontSize[200],
      padding: theme.style.box(0, 4),
      [theme.attr.theme.eq('dark')]: {
        color: theme.palette.wheat[100],
      },
    }),
  },
}

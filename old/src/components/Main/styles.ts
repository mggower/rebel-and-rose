import library from '@/styles/library'
import theme from '@/styles/theme'
import { css } from '@emotion/react'

export default {
  content: css({
    display: 'flex',
    width: '100vw',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    margin: theme.style.box(2, 0),
    [theme.screen.md]: {
      margin: theme.style.box(4, 0),
    },
  }),
  splashHeader: css(library.flex.column, library.flex.center, {
    position: 'absolute',
    width: '100%',
    height: '100%',
    top: 0,
    left: 0,
  }),
}

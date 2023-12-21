import buttons from '@/styles/buttons'
import library from '@/styles/library'
import theme from '@/styles/theme'
import { css } from '@emotion/react'

const left = theme.attr.custom<boolean>('left')
const right = theme.attr.custom<boolean>('right')

const tabStyle = css({
  width: theme.spacing[8],
  height: theme.spacing[8],
  padding: theme.spacing[0],
  marginTop: theme.spacing[3],
  [theme.screen.md]: {
    width: theme.spacing[12],
    height: theme.spacing[12],
  },
})

const contentStyle = css(library.flex.column, library.shadow, {
  alignItems: 'center',
  justifyContent: 'flex-end',
  gap: theme.spacing[1],
  padding: theme.spacing[1],
  borderRadius: theme.rounded.sm,
  backgroundColor: theme.palette.earth[200],
  border: `1px solid ${theme.palette.earth[600]}`,
})

export default {
  wrapper: css({
    position: 'fixed',
    top: theme.spacing[4],
    [left.eq(true)]: {
      left: 0,
    },
    [right.eq(true)]: {
      right: 0,
    },
  }),
  container: css({
    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: 'flex-end',
    [right.not(true)]: {
      flexDirection: 'row-reverse',
    },
  }),
  tab: {
    left: css(tabStyle, { borderLeftWidth: theme.spacing[0] }, library.rounded.left.none),
    right: css(tabStyle, { borderRightWidth: theme.spacing[0] }, library.rounded.right.none),
  },
  content: {
    left: css(contentStyle, { borderLeftColor: 'transparent' }, library.rounded.left.none),
    right: css(contentStyle, { borderRightColor: 'transparent' }, library.rounded.right.none),
  },
  link: css(buttons.button, { marginRight: '1px' }),
}

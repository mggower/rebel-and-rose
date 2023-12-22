import { CSSObject, css } from '@emotion/react'
import texture from '@/assets/textures/boho-folk-A.jpg'
import buttons from '@/styles/buttons'
import library from '@/styles/library'
import theme from '@/styles/theme'

const left = theme.attr.custom<boolean>('left')
const right = theme.attr.custom<boolean>('right')

const tabBorderStyle: CSSObject = {
  [left.eq(true)]: {
    borderLeftWidth: theme.spacing[0],
    borderTopLeftRadius: theme.rounded.none,
    borderBottomLeftRadius: theme.rounded.none,
  },
  [right.eq(true)]: {
    borderRightWidth: theme.spacing[0],
    borderTopRightRadius: theme.rounded.none,
    borderBottomRightRadius: theme.rounded.none,
  },
}

export default {
  wrapper: css({
    position: 'fixed',
    top: theme.spacing[4],
    zIndex: theme.zIndex.popover,

    [theme.screen.md]: {
      top: theme.spacing[8],
    },

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
  tab: css(
    {
      width: theme.spacing[8],
      height: theme.spacing[8],
      padding: theme.spacing[0],

      [theme.screen.md]: {
        width: theme.spacing[12],
        height: theme.spacing[12],
      },
    },
    tabBorderStyle,
  ),
  content: css(
    library.flex.column,
    library.shadow,
    {
      alignItems: 'center',
      justifyContent: 'flex-end',
      gap: theme.spacing[1],
      padding: theme.box(2, 3),
      borderRadius: theme.rounded.sm,
      border: `1px solid ${theme.palette.earth[600]}`,
      backgroundColor: theme.palette.earth[200],
      backgroundImage: `url(${texture})`,
      backgroundSize: 'cover',

      [left.eq(true)]: {
        borderTopRightRadius: theme.rounded.none,
      },

      [right.eq(true)]: {
        borderTopLeftRadius: theme.rounded.none,
      },
    },
    tabBorderStyle,
  ),
  link: css(buttons.button, { marginRight: '1px' }),
}

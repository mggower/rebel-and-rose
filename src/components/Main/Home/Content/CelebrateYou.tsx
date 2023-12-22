import library from '@/styles/library'
import theme from '@/styles/theme'
import { css } from '@emotion/react'

const styles = {
  component: css(library.contain, library.flex.column, library.flex.center, {
    paddingLeft: theme.spacing[4],
    [theme.screen.md]: {
      paddingLeft: theme.spacing[12],
    },
    [theme.screen.lg]: {
      paddingLeft: theme.spacing[16],
    },
  }),
  caption: css({
    color: theme.palette.wheat[100],
    textTransform: 'uppercase',
  }),
}

export default function CelebrateYou() {
  return (
    <div css={styles.component}>
      <h5 className='font-calder uppercase tracking-widest text-wheat-100 sm:text-xl md:text-2xl lg:text-3xl'>
        celebrate what makes you
      </h5>
    </div>
  )
}

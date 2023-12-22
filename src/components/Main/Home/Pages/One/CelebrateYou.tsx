import Heading from '@/components/Shared/Heading'
import library from '@/styles/library'
import theme from '@/styles/theme'
import { css } from '@emotion/react'

const styles = {
  component: css(library.contain, library.flex.column, {
    paddingLeft: theme.spacing[4],
    [theme.screen.md]: {
      paddingLeft: theme.spacing[16],
    },
    [theme.screen.lg]: {
      paddingLeft: theme.spacing[20],
    },
  }),
  caption: css({
    textTransform: 'uppercase',
    color: theme.palette.wheat[100],
    fontSize: theme.typography.fontSize[200],
    [theme.screen.md]: {
      fontSize: theme.typography.fontSize[500],
    },
    [theme.screen.lg]: {
      fontSize: theme.typography.fontSize[600],
    },
  }),
}

export default function CelebrateYou() {
  return (
    <div css={styles.component}>
      <Heading family='calder' tracking='widest' css={styles.caption}>
        celebrate what makes you
      </Heading>
    </div>
  )
}

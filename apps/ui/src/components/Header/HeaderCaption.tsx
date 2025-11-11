import { css } from '@emotion/react'
import Heading from '../Shared/Heading'
import theme from '@/styles/theme'

interface Props {
  children: React.ReactNode
}

const styles = {
  component: css({
    display: 'none',
    [theme.screen.lg]: {
      display: 'grid',
      alignItems: 'center',
      justifyContent: 'center',
    },
  }),
  hr: css({
    height: '2px',
    border: 'none',
    boxShadow: theme.shadow.xs,
    borderBottom: `1px solid ${theme.palette.ink.main}`,
  }),
  caption: css({
    whiteSpace: 'nowrap',
    textTransform: 'uppercase',
    padding: theme.style.box(1, 2),
  }),
}

export default function HeaderCaption({ children }: Props) {
  return (
    <div css={styles.component}>
      <hr css={styles.hr} />

      <Heading tracking='extreme' weight='normal' fontSize='min' css={styles.caption}>
        {children}
      </Heading>

      <hr css={styles.hr} />
    </div>
  )
}

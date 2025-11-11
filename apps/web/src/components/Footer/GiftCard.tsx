import { css } from '@emotion/react'
import { Heading, library } from '@rebel/components'
import theme from '@rebel/theme'
import rebelAndRoseGold from '@/assets/logos/rebel-and-rose-gold-logo.png'
import boquetUrl from '@/assets/textures/tapestry-boquet-3.png'

const styles = {
  component: css({
    display: 'flex',
    justifyContent: 'center',
    [theme.screen.md]: {
      justifyContent: 'flex-end',
    },
  }),
  container: css({
    display: 'flex',
    justifyContent: 'flex-end',
    borderRadius: theme.rounded.lg,
    backgroundColor: theme.palette.ink[800],
    boxShadow: theme.shadow.max,
    padding: theme.spacing(2),
    position: 'relative',
    overflow: 'hidden',
    flexGrow: 1,
    maxWidth: '200px',
    [theme.screen.md]: {
      maxWidth: '400px',
    },
  }),
  florals: css({
    left: '-28%',
    top: '-30%',
    width: '140px',
    height: 'auto',
    position: 'absolute',
    transform: 'rotate(27deg)',
    [theme.screen.md]: {
      width: '300px',
    },
  }),
  logo: css({
    width: '100px',
    height: 'auto',
    filter: `drop-shadow(1px 1px 2px ${theme.palette.ink[600]})`,
    [theme.screen.md]: {
      width: '200px',
    },
  }),
  header: css({
    color: theme.palette.wheat[100],
    WebkitTextStrokeWidth: '1px',
    WebkitTextFillColor: theme.palette.ink[800],
    WebkitTextStrokeColor: theme.palette.wheat[200],
    fontSize: theme.typography.fontSize[100],
    [theme.screen.md]: {
      fontSize: theme.typography.fontSize[400],
    },
  }),
}

export default function GiftCard() {
  return (
    <div css={styles.component}>
      <div css={styles.container}>
        <img src={boquetUrl} css={styles.florals} alt='floral boquet' />
        <div css={[library.flex.column, library.flex.center]}>
          <img src={rebelAndRoseGold} alt='rebels and roses gold logo' css={styles.logo} />
          <Heading uppercase family='dark' tracking='extreme' css={styles.header}>
            Gift Card
          </Heading>
        </div>
      </div>
    </div>
  )
}

import { css } from '@emotion/react'
import Heading from '../Shared/Heading'
import library from '@/styles/library'
import assets from '@/utils/assets'
import theme from '@/styles/theme'

const styles = {
  component: css({
    display: 'flex',
    justifyContent: 'flex-end',
  }),
  container: css({
    maxWidth: '400px',
    display: 'flex',
    justifyContent: 'flex-end',
    borderRadius: theme.rounded.lg,
    backgroundColor: theme.palette.ink[800],
    boxShadow: theme.shadow.lg,
    padding: theme.spacing[2],
    position: 'relative',
    overflow: 'hidden',
    flexGrow: 1,
  }),
  florals: css({
    left: '-84px',
    top: '-30%',
    width: '240px',
    height: 'auto',
    position: 'absolute',
    transform: 'rotate(27deg)',
    [theme.screen.md]: {
      left: '-96px',
      top: '-28%',
      width: '300px',
    },
  }),
  logo: css({
    width: '200px',
    height: 'auto',
    filter: `drop-shadow(0 1px 2px ${theme.palette.ink[600]})`,
  }),
  header: css({
    color: theme.palette.wheat[100],
    WebkitTextFillColor: theme.palette.ink[800],
    WebkitTextStrokeWidth: '1px',
    WebkitTextStrokeColor: theme.palette.wheat[200],
  }),
}

export default function GiftCard() {
  return (
    <div css={styles.component}>
      <div css={styles.container}>
        <img src={assets.florals.boquet[3]} css={styles.florals} alt='floral boquet' />
        <div css={[library.flex.column, library.flex.center]}>
          <img
            src={assets.logos.rebelAndRoseGold}
            alt='rebels and roses gold logo'
            css={styles.logo}
          />
          <Heading uppercase fontSize='sm' family='dark' tracking='extreme' css={styles.header}>
            Gift Card
          </Heading>
        </div>
      </div>
    </div>
  )
}

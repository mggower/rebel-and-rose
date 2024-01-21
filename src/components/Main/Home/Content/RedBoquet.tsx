import { css } from '@emotion/react'
import assets from '@/utils/assets'
import theme from '@/styles/theme'

const styles = {
  component: css({
    display: 'flex',
    justifyContent: 'flex-end',
    transform: 'translateX(8vw)',
    [theme.screen.md]: {
      transform: 'translateX(-18vw)',
    },
  }),
  boquet: css({
    width: '48vw',
    height: 'auto',
    pointerEvents: 'none',
    transform: 'rotate(27deg)',
    [theme.screen.md]: {
      width: '24vw',
    },
  }),
}

export default function RedBoquet() {
  return (
    <div css={styles.component}>
      <img src={assets.florals.boquet[4]} alt='red floral boquet' css={styles.boquet} />
    </div>
  )
}

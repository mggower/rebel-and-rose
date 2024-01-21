import { css } from '@emotion/react'
import assets from '@/utils/assets'
import theme from '@/styles/theme'

const styles = {
  component: css({
    position: 'relative',
    transform: 'translateX(-16vw)',
    [theme.screen.md]: {
      transform: 'translateX(-12vw)',
    },
  }),
  boquet: css({
    width: '54vw',
    height: 'auto',
    pointerEvents: 'none',
    transform: 'rotate(35deg)',
    [theme.screen.md]: {
      width: '36vw',
    },
  }),
}

export default function Florals() {
  return (
    <div css={styles.component}>
      <img src={assets.florals.boquet[3]} alt='floral boquet' css={styles.boquet} />
    </div>
  )
}

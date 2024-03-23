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
    filter: `drop-shadow(3px 3px 6px ${theme.style.alpha(theme.palette.ink[800], 0.2)})`,
    [theme.screen.md]: {
      width: '36vw',
    },
  }),
}

export default function PinkBoquet() {
  return (
    <div css={styles.component}>
      <img src={assets.florals.boquet[3]} alt='pink floral boquet' css={styles.boquet} />
    </div>
  )
}

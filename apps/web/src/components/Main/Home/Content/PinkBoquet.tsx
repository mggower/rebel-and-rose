import tapestryBoquet3 from '@/assets/textures/tapestry-boquet-3.png'
import { css } from '@emotion/react'
import theme from '@rebel/theme'

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
      <img src={tapestryBoquet3} alt='pink floral boquet' css={styles.boquet} />
    </div>
  )
}

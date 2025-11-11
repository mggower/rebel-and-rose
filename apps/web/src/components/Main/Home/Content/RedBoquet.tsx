import redBoquet from '@/assets/textures/tapestry-boquet-4.png'
import { css } from '@emotion/react'
import theme from '@rebel/theme'

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
    filter: `drop-shadow(3px 3px 6px ${theme.style.alpha(theme.palette.ink[800], 0.2)})`,
    [theme.screen.md]: {
      width: '24vw',
    },
  }),
}

export default function RedBoquet() {
  return (
    <div css={styles.component}>
      <img src={redBoquet} alt='red floral boquet' css={styles.boquet} />
    </div>
  )
}

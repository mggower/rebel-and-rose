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
  image: css({
    pointerEvents: 'none',
    height: 'auto',
  }),
  leaves: css({
    width: '54vw',
    transform: 'rotate(35deg)',
    [theme.screen.md]: {
      width: '36vw',
    },
  }),
  flower1: css({
    position: 'absolute',
    top: '8vh',
    left: '16vw',
    width: '24vw',
    [theme.screen.md]: {
      top: '14vh',
      left: '10vw',
      width: '18vw',
    },
  }),
  flower2: css({
    position: 'absolute',
    transform: 'rotate(45deg)',
    left: '28vw',
    bottom: '9vh',
    width: '20vw',
    [theme.screen.md]: {
      bottom: '21vh',
      left: '18vw',
      width: '15vw',
    },
  }),
}

export default function Florals() {
  return (
    <div css={styles.component}>
      <img src={assets.florals.leaves[1]} alt='leaves' css={[styles.leaves, styles.image]} />
      <img src={assets.florals.flower[1]} alt='flower-1' css={[styles.flower1, styles.image]} />
      <img src={assets.florals.flower[2]} alt='flower-2' css={[styles.flower2, styles.image]} />
      {/* <div css={styles.leaves}></div> */}
      {/* <div css={styles.flower1}></div>
      <div css={styles.flower2}></div> */}
    </div>
  )
}

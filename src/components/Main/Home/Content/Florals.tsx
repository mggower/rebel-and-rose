import { css } from '@emotion/react'
import assets from '@/utils/assets'
import theme from '@/styles/theme'

const styles = {
  component: css({
    position: 'relative',
    transform: 'translateX(-24vw)',
  }),
  leaves: css({
    backgroundSize: 'contain',
    transform: 'rotate(35deg)',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundImage: `url(${assets.florals.leaves[1]})`,
    width: '72vw',
    height: '64vh',
    [theme.screen.md]: {
      width: '58vw',
    },
  }),
  flower1: css({
    position: 'absolute',
    top: '16vh',
    left: '24vw',
    height: '20vh',
    width: '32vw',
    [theme.screen.md]: {
      top: '12vh',
      left: '19vw',
      height: '20vh',
      width: '20vw',
    },
    backgroundSize: 'contain',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundImage: `url(${assets.florals.flower[1]})`,
  }),
  flower2: css({
    position: 'absolute',
    left: '32vw',
    bottom: '18vh',
    height: '14vh',
    width: '24vw',
    [theme.screen.md]: {
      bottom: '16vh',
      left: '25vw',
      height: '15vh',
      width: '15vw',
    },
    backgroundSize: 'contain',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundImage: `url(${assets.florals.flower[2]})`,
    transform: 'rotate(45deg)',
  }),
}

export default function Florals() {
  return (
    <div css={styles.component}>
      <div css={styles.leaves}></div>
      <div css={styles.flower1}></div>
      <div css={styles.flower2}></div>
    </div>
  )
}

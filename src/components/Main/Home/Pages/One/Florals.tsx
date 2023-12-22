import { css } from '@emotion/react'
import assets from '@/utils/assets'
import theme from '@/styles/theme'

const styles = {
  component: css({
    display: 'none',
    position: 'relative',
    transform: 'translateX(-20vw)',
    [theme.screen.md]: {
      display: 'block',
    },
  }),
  leaves: css({
    height: '65vh',
    width: '50vw',
    backgroundSize: 'contain',
    transform: 'rotate(35deg)',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundImage: `url(${assets.florals.leaves[1]})`,
  }),
  flower1: css({
    position: 'absolute',
    top: '12vh',
    left: '15vw',
    height: '20vh',
    width: '20vw',
    backgroundSize: 'contain',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundImage: `url(${assets.florals.flower[1]})`,
  }),
  flower2: css({
    position: 'absolute',
    bottom: '18vh',
    left: '22vw',
    height: '15vh',
    width: '15vw',
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

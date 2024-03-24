import { ParallaxLayer } from '@react-spring/parallax'
import { css } from '@emotion/react'
import text4 from '@/assets/textures/transparent-text-4.png'
import classes from '../styles'
import theme from '@/styles/theme'

const styles = {
  component: css({
    display: 'flex',
    justifyContent: 'flex-end',
    width: `calc(100vw - ${theme.spacing(18)})`,
    [theme.screen.md]: {
      width: `calc(100vw - ${theme.spacing(32)})`,
    },
  }),
  texture: css({
    width: '60vw',
    height: '70vh',
    overflow: 'hidden',
    backgroundImage: `url(${text4})`,
    backgroundSize: 'contain',
    backgroundPosition: 'center right',
    backgroundRepeat: 'no-repeat',
    opacity: 0.125,
    [theme.screen.md]: {
      width: '40vw',
      opacity: 0.25,
    },
  }),
}

export default function Texture() {
  return (
    <ParallaxLayer offset={2.9} factor={1} speed={theme.velocity.accelerate(3)}>
      <div css={classes.layer}>
        <div css={styles.component}>
          <div css={styles.texture}></div>
        </div>
      </div>
    </ParallaxLayer>
  )
}

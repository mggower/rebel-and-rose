import { ParallaxLayer } from '@react-spring/parallax'
import { css } from '@emotion/react'
import assets from '@/utils/assets'
import classes from '../styles'
import theme from '@/styles/theme'
import { accelerate } from '@/utils/parallax'

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
    width: '40vw',
    height: '70vh',
    overflow: 'hidden',
    backgroundImage: `url(${assets.scrapbook.text[4]})`,
    backgroundSize: 'contain',
    backgroundPosition: 'center right',
    backgroundRepeat: 'no-repeat',
    opacity: 0.125,
    [theme.screen.md]: {
      opacity: 0.25,
    },
  }),
}

export default function Texture() {
  return (
    <ParallaxLayer offset={2.9} factor={1} speed={accelerate(3)}>
      <div css={classes.layer}>
        <div css={styles.component}>
          <div css={styles.texture}></div>
        </div>
      </div>
    </ParallaxLayer>
  )
}

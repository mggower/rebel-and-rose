import { css } from '@emotion/react'
import Scrapbook from '@/components/Shared/Scrapbook'
import SplashImage from '@/components/Shared/SplashImage'
import breezeBW from '@/assets/images/image-5.jpg'
import wanted from '@/assets/textures/wanted.png'
import wildWomen from '@/assets/textures/wild-women.png'
import library from '@/styles/library'
import theme from '@/styles/theme'
import styles from '../styles'
import Footer from '@/components/Footer'

const classes = {
  scrapbook: css(library.flex.column, library.flex.center, {
    position: 'absolute',
    bottom: 0,
    right: 0,
    '& > img': {
      height: 'auto',
      width: theme.spacing(32),
      transform: `translate(${theme.spacing(4)}, ${theme.spacing(6)})`,
      [theme.screen.md]: {
        width: theme.spacing(72),
        transform: `translate(${theme.utility.vw(5)}, ${theme.spacing(12)})`,
      },
    },
  }),
}

export default function Salon() {
  return (
    <div css={styles.content}>
      <SplashImage src={breezeBW} alt='breeze image'>
        <div css={styles.splashHeader}>
          <Scrapbook variant='two'>Salon</Scrapbook>
        </div>
        <div css={classes.scrapbook}>
          <img src={wildWomen} alt='wild women' />
          <img src={wanted} alt='wanted' />
        </div>
      </SplashImage>

      <div style={{ height: 1200 }} />

      <Footer />
    </div>
  )
}

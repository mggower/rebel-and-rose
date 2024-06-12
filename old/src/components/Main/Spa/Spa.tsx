import { css } from '@emotion/react'
import Scrapbook from '@/components/Shared/Scrapbook'
import SplashImage from '@/components/Shared/SplashImage'
import Footer from '@/components/Footer'
import library from '@/styles/library'
import theme from '@/styles/theme'
import styles from '../styles'
import serum from '@/assets/images/image-6.jpg'

const _classes = {
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

export default function Spa() {
  return (
    <div css={styles.content}>
      <SplashImage src={serum} alt='spa skin treatment'>
        <div css={styles.splashHeader}>
          <Scrapbook variant='one'>Spa</Scrapbook>
        </div>
      </SplashImage>

      <div style={{ height: 1200 }} />

      <Footer />
    </div>
  )
}

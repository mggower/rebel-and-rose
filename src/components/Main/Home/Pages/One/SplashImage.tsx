import library from '@/styles/library'
import { css } from '@emotion/react'
import assets from '@/utils/assets'
import theme from '@/styles/theme'

const styles = {
  component: css(library.contain, library.shadow, {
    borderRadius: theme.rounded.sm,
    backgroundImage: `url(${assets.images.breezeWarm})`,
    backgroundSize: 'cover',
    height: '32vh',
    [theme.screen.md]: {
      height: '70vh',
    },
  }),
}

export default function SplashImage() {
  return (
    <div css={styles.component}>
      <img src={assets.images.breezeWarm} alt='breeze warm' css={library.invisible} />
    </div>
  )
}

import { css } from '@emotion/react'
import texture from '@/assets/textures/boho-folk-E.jpg'
import library from '@/styles/library'
import theme from '@/styles/theme'

const styles = {
  component: css({
    zIndex: theme.zIndex.overlay,
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    backgroundColor: theme.palette.transparent,
  }),
  banner: css(library.shadow, library.contain, {
    height: theme.spacing[4],
    borderRadius: theme.rounded.sm,
    backgroundImage: `url(${texture})`,
    backgroundSize: 'auto 300px',
    backgroundRepeat: 'repeat',
    [theme.screen.md]: {
      height: theme.spacing[8],
    },
  }),
}

export default function Banner() {
  return (
    <div css={styles.component}>
      <div css={styles.banner} />
    </div>
  )
}

import { SPLASH_HEIGHT } from '@/utils/constants'
import { css } from '@emotion/react'
import theme from '@/styles/theme'
import library from '@/styles/library'

const styles = {
  component: css(library.contain, library.shadow, {
    position: 'relative',
    backgroundSize: 'cover',
    backgroundPosition: 'left top',
    borderRadius: theme.rounded.sm,
    backgroundImage: theme.style.var('image'),
    height: theme.utility.vh(SPLASH_HEIGHT.MOBILE),
    [theme.screen.md]: {
      height: theme.utility.vh(SPLASH_HEIGHT.DESKTOP),
    },
  }),
  image: css(library.invisible, { position: 'absolute' }),
}

export default function SplashImage({
  src,
  alt,
  children,
}: React.PropsWithChildren<{ src: string; alt: string }>) {
  return (
    <div css={styles.component} style={theme.utility.applyVars({ image: theme.style.url(src) })}>
      <img src={src} alt={alt} css={library.invisible} />
      {children}
    </div>
  )
}

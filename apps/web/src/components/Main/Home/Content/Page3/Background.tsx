import { ParallaxLayer } from '@react-spring/parallax'
import { css } from '@emotion/react'
import theme from '@rebel/theme'

const styles = {
  component: css({
    backgroundColor: theme.style.alpha(theme.palette.blush[100], 0.6),
  }),
}

export default function Background() {
  return <ParallaxLayer offset={3} factor={0.8} css={styles.component} />
}

import { ParallaxLayer } from '@react-spring/parallax'
import { css } from '@emotion/react'
import theme from '@/styles/theme'

const styles = {
  component: css({
    backgroundColor: `${theme.palette.blush[100]}6F`,
  }),
}

export default function Background() {
  return <ParallaxLayer offset={3} factor={0.8} css={styles.component} />
}

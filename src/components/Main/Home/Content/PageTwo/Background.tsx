import { ParallaxLayer } from '@react-spring/parallax'
import { css } from '@emotion/react'
import theme from '@/styles/theme'

const styles = {
  component: css({
    backgroundColor: `${theme.palette.earth[800]}8F`,
  }),
}

export default function Background() {
  return <ParallaxLayer offset={2} factor={0.9} css={styles.component} />
}

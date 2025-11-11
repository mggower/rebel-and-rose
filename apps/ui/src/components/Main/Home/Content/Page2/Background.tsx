import { ParallaxLayer } from '@react-spring/parallax'
import { css } from '@emotion/react'
import theme from '@rebel/theme'

const styles = {
  component: css({
    backgroundColor: `${theme.palette.earth[800]}8F`,
  }),
}

export default function Background() {
  return <ParallaxLayer offset={2} factor={1} css={styles.component} />
}

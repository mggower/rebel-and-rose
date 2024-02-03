/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-empty-interface */
import { css } from '@emotion/react'
import theme from '@/styles/theme'
import { ParallaxLayer } from '@react-spring/parallax'
import assets from '@/utils/assets'

const styles = {
  background: css({
    backgroundColor: theme.palette.russet.main,
  }),
  texture: css({
    backgroundImage: `url(${assets.scrapbook.text[1]})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'repeat-y',
    width: '100vw',
    height: '100%',
    opacity: 0.125,
  }),
}

export default function Decorations() {
  return (
    <>
      <ParallaxLayer offset={3.8} factor={0.8} css={styles.background} />
      <ParallaxLayer offset={3.8} factor={0.8}>
        <div css={styles.texture}></div>
      </ParallaxLayer>
    </>
  )
}

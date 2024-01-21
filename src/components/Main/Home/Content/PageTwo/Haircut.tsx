import { IParallaxLayer, ParallaxLayer } from '@react-spring/parallax'
import { calcHeightFromWindow } from '@/utils'
import { useEffect, useRef } from 'react'
import { accelerate } from '@/utils/parallax'
import { css } from '@emotion/react'
import library from '@/styles/library'
import assets from '@/utils/assets'
import theme from '@/styles/theme'

const styles = {
  component: css({
    display: 'flex',
    justifyContent: 'flex-end',
    opacity: 0.1,
    [theme.screen.md]: {
      opacity: 1,
    },
  }),
  image: css({
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundImage: `url(${assets.images.hairCut})`,
    boxShadow: theme.shadow.sm,
    borderRadius: theme.rounded.sm,
    width: '40vw',
    height: '60vw',
    [theme.screen.md]: {
      width: '24vw',
      height: '54vh',
    },
  }),
}

export default function Haircut() {
  const layer = useRef<IParallaxLayer>(null)

  useEffect(() => {
    layer.current?.setHeight(calcHeightFromWindow(48))
  }, [])

  return (
    <ParallaxLayer ref={layer} offset={2.1} speed={accelerate(3)}>
      <div css={styles.component}>
        <div css={styles.image}>
          <img src={assets.images.hairCut} alt='hair cut' css={library.invisible} />
        </div>
      </div>
    </ParallaxLayer>
  )
}
import { IParallaxLayer, ParallaxLayer } from '@react-spring/parallax'
import { calcHeightFromWindow } from '@/utils'
import { useEffect, useRef } from 'react'
import { useMinScreen } from '@/hooks'
import { css } from '@emotion/react'
import text3 from '@/assets/textures/transparent-text-3.png'
import theme from '@rebel/theme'

const styles = {
  component: css({
    display: 'flex',
    justifyContent: 'flex-start',
  }),
  texture: css({
    opacity: 0.125,
    backgroundImage: `url(${text3})`,
    backgroundSize: 'contain',
    backgroundPosition: 'center',
    height: '50vh',
    width: '82vw',
    [theme.screen.md]: {
      opacity: 0.25,
      width: '36vw',
    },
  }),
}

export default function Texture() {
  const desktop = useMinScreen('md')
  const layer = useRef<IParallaxLayer>(null)

  useEffect(() => {
    if (layer.current) {
      layer.current.setHeight(calcHeightFromWindow(50))
    }
  }, [])

  return (
    <ParallaxLayer ref={layer} offset={desktop ? 1.6 : 1.8}>
      <div css={styles.component}>
        <div css={styles.texture}></div>
      </div>
    </ParallaxLayer>
  )
}

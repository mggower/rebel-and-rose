import { IParallaxLayer, ParallaxLayer } from '@react-spring/parallax'
import { calcHeightFromWindow } from '@/utils'
import { useEffect, useRef } from 'react'
import { useBoxSizing } from '@/hooks/useBoxSizing'
import { accelerate } from '@/utils/parallax'
import { css } from '@emotion/react'
import assets from '@/utils/assets'
import library from '@/styles/library'
import theme from '@/styles/theme'
import classes from '../styles'

const styles = {
  component: css(library.contain, {
    opacity: 0.1,
    [theme.screen.md]: {
      paddingLeft: '4vw',
      opacity: 1,
    },
  }),
  image: css(library.shadow, {
    width: '40vw',
    height: '48vh',
    overflow: 'hidden',
    borderRadius: theme.rounded.sm,
    backgroundImage: `url(${assets.images.womanInGarden})`,
    backgroundPositionX: '75%',
    backgroundSize: 'cover',
    [theme.screen.md]: {
      width: '28vw',
      height: '48vh',
    },
  }),
}

export default function Garden() {
  const layer = useRef<IParallaxLayer>(null)
  const [ref, { height = calcHeightFromWindow(48) }] = useBoxSizing({ handleWidth: false })

  useEffect(() => {
    if (layer.current) {
      layer.current.setHeight(height)
    }
  }, [height])

  return (
    <ParallaxLayer ref={layer} offset={1} speed={accelerate(4)}>
      <div css={classes.layer}>
        <div ref={ref} css={styles.component}>
          <div css={styles.image}>
            <img src={assets.images.womanInGarden} css={library.invisible} alt='woman in garden' />
          </div>
        </div>
      </div>
    </ParallaxLayer>
  )
}

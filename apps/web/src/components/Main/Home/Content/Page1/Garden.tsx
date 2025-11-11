import { IParallaxLayer, ParallaxLayer } from '@react-spring/parallax'
import { calcHeightFromWindow } from '@/utils'
import { useEffect, useRef } from 'react'
import { useBoxSizing } from '@/hooks/useBoxSizing'
import { accelerate } from '@/utils/parallax'
import { css } from '@emotion/react'
import { library } from '@rebel/components'
import theme from '@rebel/theme'
import womanInGarden from '@/assets/images/image-2.jpg'
import classes from '../styles'

const styles = {
  component: css(library.contain, {
    opacity: 0.33,
    display: 'flex',
    justifyContent: 'flex-end',
    [theme.screen.md]: {
      justifyContent: 'flex-start',
      paddingLeft: '4vw',
      opacity: 1,
    },
  }),
  image: css(library.shadow, {
    width: '40vw',
    height: '48vh',
    overflow: 'hidden',
    borderRadius: theme.rounded.sm,
    backgroundImage: `url(${womanInGarden})`,
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
            <img src={womanInGarden} css={library.invisible} alt='woman in garden' />
          </div>
        </div>
      </div>
    </ParallaxLayer>
  )
}

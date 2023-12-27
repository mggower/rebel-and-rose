import { IParallaxLayer, ParallaxLayer } from '@react-spring/parallax'
import { useBoxSizing } from '@/hooks/useBoxSizing'
import { decelerate } from '@/utils/parallax'
import { useEffect, useRef } from 'react'
import { css } from '@emotion/react'
import library from '@/styles/library'
import classes from '../styles'
import assets from '@/utils/assets'
import theme from '@/styles/theme'

interface Props {
  offset: number
}

const styles = {
  component: css(library.contain, library.flex.column, library.flex.center, {
    padding: theme.box(4, 0),
    [theme.screen.md]: {
      '& > img': {
        width: '90%',
        height: 'auto',
      },
    },
  }),
}

export default function UniquelyBeautiful({ offset }: Props) {
  const layer = useRef<IParallaxLayer>(null)
  const [ref, { height = 200 }] = useBoxSizing({ handleWidth: false })

  useEffect(() => {
    if (layer.current) {
      layer.current.setHeight(height)
    }
  }, [height])

  return (
    <ParallaxLayer ref={layer} offset={offset} speed={decelerate(2)}>
      <div css={classes.layer}>
        <div css={styles.component}>
          <img ref={ref} src={assets.logos.uniquelyBeautiful} alt='uniquely beautiful' />
        </div>
      </div>
    </ParallaxLayer>
  )
}

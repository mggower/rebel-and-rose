import { IParallaxLayer, ParallaxLayer, ParallaxLayerProps } from '@react-spring/parallax'
import { useEffect, useRef } from 'react'
import { useBoxSizing } from '@/hooks/useBoxSizing'
import { css } from '@emotion/react'
import uniquelyBeautiful from '@/assets/logos/uniquely-beautiful.png'
import { library } from '@rebel/components'
import theme from '@rebel/theme'
import classes from '../styles'

const styles = {
  component: css(library.contain, library.flex.column, library.flex.center, {
    padding: theme.style.box(4, 0),
    [theme.screen.md]: {
      '& > img': {
        width: '90%',
        height: 'auto',
      },
    },
  }),
  banner: css({
    filter: `drop-shadow(3px 3px 6px var(--shadow, ${theme.palette.ink[600]}3F))`,
    [theme.screen.md]: {
      '--shadow': `${theme.palette.wheat[100]}3F`,
    },
  }),
}

export default function UniquelyBeautiful(props: ParallaxLayerProps) {
  const layer = useRef<IParallaxLayer>(null)
  const [ref, { height = 200 }] = useBoxSizing({ handleWidth: false })

  useEffect(() => {
    if (layer.current) {
      layer.current.setHeight(height)
    }
  }, [height])

  return (
    <ParallaxLayer ref={layer} {...props}>
      <div css={classes.layer}>
        <div css={styles.component}>
          <img ref={ref} css={styles.banner} src={uniquelyBeautiful} alt='uniquely beautiful' />
        </div>
      </div>
    </ParallaxLayer>
  )
}

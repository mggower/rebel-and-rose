import { IParallaxLayer, ParallaxLayer } from '@react-spring/parallax'
import { useEffect, useRef } from 'react'
import { calcRem } from '@/utils'
import { css } from '@emotion/react'
import bohoFolkB from '@/assets/textures/boho-folk-B.jpg'
import bohoFolkD from '@/assets/textures/boho-folk-D.jpg'
import bohoFolkF from '@/assets/textures/boho-folk-F.jpg'
import theme from '@/styles/theme'

interface Props {
  space: number
}

const styles = {
  wrapper: css({
    display: 'flex',
    justifyContent: 'flex-end',
  }),
  component: css({
    display: 'grid',
    height: theme.spacing(4),
    gridTemplateColumns: '1fr 2fr 3fr',
    width: '75vw',
    [theme.screen.md]: {
      width: '40vw',
    },
  }),
  one: css({
    backgroundImage: `url(${bohoFolkF})`,
    backgroundSize: 'cover',
  }),
  two: css({
    backgroundImage: `url(${bohoFolkB})`,
    backgroundSize: 'cover',
  }),
  three: css({
    backgroundImage: `url(${bohoFolkD})`,
    backgroundSize: 'cover',
  }),
}

export default function Border({ space }: Props) {
  const layer = useRef<IParallaxLayer>(null)
  const offset = (space * 2 - calcRem(0.5)) / space

  useEffect(() => {
    if (layer.current) {
      layer.current.setHeight(calcRem(1))
    }
  }, [])

  return (
    <ParallaxLayer ref={layer} offset={offset}>
      <div css={styles.wrapper}>
        <div css={styles.component}>
          <div css={styles.one}></div>
          <div css={styles.two}></div>
          <div css={styles.three}></div>
        </div>
      </div>
    </ParallaxLayer>
  )
}

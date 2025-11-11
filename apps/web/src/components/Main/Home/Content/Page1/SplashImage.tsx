import { ParallaxLayer, ParallaxLayerProps } from '@react-spring/parallax'
import { calcHeightFromWindow, calcRem } from '@/utils'
import { accelerate, decelerate } from '@/utils/parallax'
import { useScreen } from '@/hooks'
import { css } from '@emotion/react'
import UniquelyBeautiful from './UniquelyBeautiful'
import CelebrateYou from './CelebrateYou'
import splash1 from '@/assets/images/image-7.jpg'
import { library } from '@rebel/components'
import theme from '@rebel/theme'
import classes from '../styles'

interface Props {
  space: number
}

const DESKTOP_HEIGHT = 72
const MOBILE_HEIGHT = 32

const styles = {
  component: css(library.contain, library.shadow, {
    borderRadius: theme.rounded.sm,
    backgroundImage: `url(${splash1})`,
    backgroundSize: 'cover',
    backgroundPosition: 'left top',
    height: `${MOBILE_HEIGHT}vh`,
    [theme.screen.md]: {
      height: `${DESKTOP_HEIGHT}vh`,
    },
  }),
}

export default function SplashImage({ space }: Props) {
  const [celebrate, beautiful] = useScreen<[ParallaxLayerProps, ParallaxLayerProps]>(
    (desktop) => {
      if (desktop) {
        const midpoint = calcHeightFromWindow(DESKTOP_HEIGHT) / 2
        return [
          { offset: (midpoint - calcRem(2)) / space, speed: accelerate(4) },
          { offset: (midpoint + calcRem(2)) / space, speed: decelerate(2) },
        ]
      } else {
        const height = calcHeightFromWindow(MOBILE_HEIGHT)
        return [
          { offset: (height + calcRem(2)) / space, speed: accelerate(2) },
          { offset: (height + calcRem(3.5)) / space, speed: accelerate(1) },
        ]
      }
    },
    [space],
  )

  return (
    <>
      <ParallaxLayer>
        <div css={classes.layer}>
          <div css={styles.component}>
            <img src={splash1} alt='breeze warm' css={library.invisible} />
          </div>
        </div>
      </ParallaxLayer>

      <CelebrateYou {...celebrate} />

      <UniquelyBeautiful {...beautiful} />
    </>
  )
}

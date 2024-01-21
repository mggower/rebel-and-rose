import { calcHeightFromWindow, calcRem } from '@/utils'
import { ParallaxLayer, ParallaxLayerProps } from '@react-spring/parallax'
import { useScreen } from '@/hooks'
import { css } from '@emotion/react'
import UniquelyBeautiful from './UniquelyBeautiful'
import CelebrateYou from './CelebrateYou'
import library from '@/styles/library'
import classes from '../styles'
import assets from '@/utils/assets'
import theme from '@/styles/theme'
import { accelerate, decelerate } from '@/utils/parallax'

interface Props {
  space: number
}

const DESKTOP_HEIGHT = 72
const MOBILE_HEIGHT = 32

const styles = {
  component: css(library.contain, library.shadow, {
    borderRadius: theme.rounded.sm,
    backgroundImage: `url(${assets.images.breezeWarm})`,
    backgroundSize: 'cover',
    backgroundPosition: 'left top',
    height: `${MOBILE_HEIGHT}vh`,
    [theme.screen.md]: {
      height: `${DESKTOP_HEIGHT}vh`,
    },
  }),
}

export default function SplashImage({ space }: Props) {
  const [celebrate, beautiful] = useScreen<
    [celebrate: ParallaxLayerProps, beautiful: ParallaxLayerProps]
  >(
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
            <img src={assets.images.breezeWarm} alt='breeze warm' css={library.invisible} />
          </div>
        </div>
      </ParallaxLayer>

      <CelebrateYou {...celebrate} />

      <UniquelyBeautiful {...beautiful} />
    </>
  )
}

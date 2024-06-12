import { ParallaxLayer, ParallaxLayerProps } from '@react-spring/parallax'
import { SPLASH_HEIGHT } from '@/utils/constants'
import { useScreen } from '@/hooks'
import UniquelyBeautiful from './UniquelyBeautiful'
import CelebrateYou from './CelebrateYou'
import SplashImage from '@/components/Shared/SplashImage'
import classes from '../styles'
import breezeWarm from '@/assets/images/image-7.jpg'
import theme from '@/styles/theme'

interface Props {
  space: number
}

export default function HomeSplashImage({ space }: Props) {
  const [celebrate, beautiful] = useScreen<[ParallaxLayerProps, ParallaxLayerProps]>(
    (desktop) => {
      if (desktop) {
        const midpoint = theme.utility.calc.vh(SPLASH_HEIGHT.DESKTOP) / 2
        return [
          {
            offset: (midpoint - theme.utility.calc.rem(2)) / space,
            speed: theme.velocity.accelerate(4),
          },
          {
            offset: (midpoint + theme.utility.calc.rem(2)) / space,
            speed: theme.velocity.decelerate(2),
          },
        ]
      } else {
        const height = theme.utility.calc.vh(SPLASH_HEIGHT.MOBILE)
        return [
          {
            offset: (height + theme.utility.calc.rem(2)) / space,
            speed: theme.velocity.accelerate(2),
          },
          {
            offset: (height + theme.utility.calc.rem(3.5)) / space,
            speed: theme.velocity.accelerate(1),
          },
        ]
      }
    },
    [space],
  )

  return (
    <>
      <ParallaxLayer>
        <div css={classes.layer}>
          <SplashImage src={breezeWarm} alt='breeze warm' />
        </div>
      </ParallaxLayer>

      <CelebrateYou {...celebrate} />

      <UniquelyBeautiful {...beautiful} />
    </>
  )
}

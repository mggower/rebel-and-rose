import { calcHeightFromWindow, calcRem } from '@/utils'
import { ParallaxLayer } from '@react-spring/parallax'
import { useMinScreen } from '@/hooks'
import { css } from '@emotion/react'
import UniquelyBeautiful from './UniquelyBeautiful'
import CelebrateYou from './CelebrateYou'
import library from '@/styles/library'
import classes from '../styles'
import assets from '@/utils/assets'
import theme from '@/styles/theme'

interface Props {
  space: number
}

const DESKTOP_HEIGHT = 72
const MOBILE_HEIGHT = 50

const styles = {
  component: css(library.contain, library.shadow, {
    borderRadius: theme.rounded.sm,
    backgroundImage: `url(${assets.images.breezeWarm})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center 75%',
    height: `${MOBILE_HEIGHT}vh`,
    [theme.screen.md]: {
      height: `${DESKTOP_HEIGHT}vh`,
    },
  }),
}

export default function SplashImage({ space }: Props) {
  const desktop = useMinScreen('md')

  const height = desktop
    ? calcHeightFromWindow(DESKTOP_HEIGHT)
    : calcHeightFromWindow(MOBILE_HEIGHT)

  const midpoint = height / 2

  return (
    <>
      <ParallaxLayer>
        <div css={classes.layer}>
          <div css={styles.component}>
            <img src={assets.images.breezeWarm} alt='breeze warm' css={library.invisible} />
          </div>
        </div>
      </ParallaxLayer>

      <CelebrateYou offset={(midpoint - (desktop ? calcRem(2) : 0)) / space} />

      <UniquelyBeautiful offset={(midpoint + calcRem(desktop ? 2 : 1)) / space} />
    </>
  )
}

import PageOne from './Pages/One'
import { Parallax, IParallax, ParallaxLayer } from '@react-spring/parallax'
import { calcHeightFromWindow, calcRem } from '@/utils'
import { accelerate, decelerate } from '@/utils/parallax'
import { useResizeDetector } from 'react-resize-detector'
import { useMinScreen } from '@/hooks'
import { useRef } from 'react'
import { css } from '@emotion/react'
import Footer from '@/components/Footer'
import theme from '@/styles/theme'
import library from '@/styles/library'

const styles = {
  component: css(library.flex.column, library.flex.itemsCenter, {
    height: '100%',
    width: '100vw',
    '&::before': {
      content: '" "',
      position: 'absolute',
      background: `linear-gradient(${theme.palette.wheat[100]} 5%, transparent)`,
      height: theme.spacing[4],
      zIndex: theme.zIndex.layer,
      width: '100vw',
      left: 0,
      top: 0,
    },
  }),
  parallax: css({
    padding: theme.box(2, 0),
    [theme.screen.md]: {
      padding: theme.box(4, 0),
    },
  }),
  layer: css(library.flex.column, library.flex.itemsCenter),
}

export default function Home() {
  const md = useMinScreen('md')
  const parallax = useRef<IParallax>(null)

  const { ref, height: space = window.innerHeight - 200 } = useResizeDetector({
    handleWidth: false,
  })
  const { ref: beautyRef, height: beautyHeight = 200 } = useResizeDetector({
    handleWidth: false,
  })

  const splashHeight = calcHeightFromWindow(md ? 70 : 32)
  const splashMidpoint = splashHeight / 2

  const height = {
    splash: splashHeight,
    celebrate: calcRem(2),
    beauty: beautyHeight,
    garden: calcHeightFromWindow(48),
  }

  const factor = (key: keyof typeof height) => height[key] / space

  const offset = {
    splash: 0,
    celebrate: (splashMidpoint - height.celebrate * (md ? 2 : 0)) / space,
    beauty: (splashMidpoint + calcRem(2)) / space,
    garden: (space - Math.floor((space - splashHeight) / 2)) / space,
    story: (height.splash + calcRem(2)) / space,
    florals: (height.splash + Math.floor(height.garden * 0.2)) / space,
  }

  return (
    <div ref={ref} css={styles.component}>
      <Parallax ref={parallax} pages={3} css={styles.parallax}>
        <ParallaxLayer offset={offset.splash} factor={factor('splash')}>
          <div css={styles.layer}>
            <PageOne.Splash />
          </div>
        </ParallaxLayer>

        <ParallaxLayer offset={offset.celebrate} speed={accelerate(4)} factor={factor('celebrate')}>
          <div css={styles.layer}>
            <PageOne.CelebrateYou />
          </div>
        </ParallaxLayer>

        <ParallaxLayer offset={offset.garden} speed={accelerate(2)} factor={factor('garden')}>
          <div css={styles.layer}>
            <PageOne.Garden />
          </div>
        </ParallaxLayer>

        <ParallaxLayer offset={offset.beauty} speed={decelerate(2)} factor={factor('beauty')}>
          <div css={styles.layer}>
            <PageOne.UniquelyBeautiful ref={beautyRef} />
          </div>
        </ParallaxLayer>

        <ParallaxLayer offset={offset.story}>
          <div css={styles.layer}>
            <PageOne.OurStory />
          </div>
        </ParallaxLayer>

        <ParallaxLayer offset={offset.florals} speed={decelerate(1)}>
          <PageOne.Florals />
        </ParallaxLayer>

        <ParallaxLayer offset={2.5}>
          <div className='flex h-full flex-col justify-end'>
            <Footer />
          </div>
        </ParallaxLayer>
      </Parallax>
    </div>
  )
}

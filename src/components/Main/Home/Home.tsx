import { CelebrateYou, Garden, OurStory, Splash, UniquelyBeautiful } from './Content'
import { Parallax, IParallax, ParallaxLayer } from '@react-spring/parallax'
import { useEffect, useRef, useState } from 'react'
import { calcHeightFromWindow } from '@/utils'
import { ONE_REM } from '@/utils/constants'
import Footer from '@/components/Footer'
import { useMinScreen } from '@/hooks'

const TWO_REM = ONE_REM * 2

enum Speed {
  MINUS = -0.25,
  NEUTRAL = 0,
  QUARTER = 0.25,
  HALF = 0.5,
  FULL = 1,
}

export default function Home() {
  const md = useMinScreen('md')
  const parallax = useRef<IParallax>(null)
  const beautyRef = useRef<HTMLImageElement>(null)

  const [space, setSpace] = useState(window.innerHeight - 200)
  const [beautyHeight, setBeautyHeight] = useState(200)

  const splashHeight = calcHeightFromWindow(md ? 70 : 60)
  const splashMidpoint = splashHeight / 2

  const height = {
    splash: splashHeight,
    celebrate: TWO_REM,
    beauty: beautyHeight,
    garden: calcHeightFromWindow(48),
  }

  const factor = (key: keyof typeof height) => height[key] / space

  const offset = {
    splash: 0,
    celebrate: (splashMidpoint - height.celebrate * (md ? 2 : 0)) / space,
    beauty: (splashMidpoint + TWO_REM) / space,
    garden: (space - Math.floor((space - splashHeight) / 2)) / space,
    story: (height.splash + (md ? height.garden * 0.33 : ONE_REM * 3)) / space,
  }

  useEffect(() => {
    if (parallax.current) {
      setSpace(parallax.current.space)
    }
    if (beautyRef.current) {
      setBeautyHeight(beautyRef.current.getBoundingClientRect()?.height)
    }
  }, [])

  return (
    <div className='mt-8 flex h-full w-screen flex-col items-center'>
      <Parallax ref={parallax} pages={3} className='pt-2 md:pt-4'>
        <ParallaxLayer offset={offset.splash} speed={Speed.NEUTRAL} factor={factor('splash')}>
          <Splash />
        </ParallaxLayer>

        <ParallaxLayer offset={offset.celebrate} speed={Speed.HALF} factor={factor('celebrate')}>
          <CelebrateYou />
        </ParallaxLayer>

        <ParallaxLayer offset={offset.garden} speed={Speed.QUARTER} factor={factor('garden')}>
          {md && <Garden />}
        </ParallaxLayer>

        <ParallaxLayer offset={offset.beauty} speed={Speed.MINUS} factor={factor('beauty')}>
          <UniquelyBeautiful ref={beautyRef} />
        </ParallaxLayer>

        <ParallaxLayer offset={offset.story} className='bg-wheat-100'>
          <OurStory />
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

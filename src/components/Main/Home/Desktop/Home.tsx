import { CelebrateYou, Garden, OurStory, Splash, UniquelyBeautiful } from '../Content'
import { Parallax, IParallax, ParallaxLayer } from '@react-spring/parallax'
import { useEffect, useRef, useState } from 'react'
import { calcHeightFromWindow } from '@/utils'
import { ONE_REM } from '@/utils/constants'
import Footer from '@/components/Footer'

const H5_LINEHEIGHT = 36
const TWO_REM = ONE_REM * 2

export default function Home() {
  const parallax = useRef<IParallax>(null)
  const beautyRef = useRef<HTMLImageElement>(null)

  const [space, setSpace] = useState(window.innerHeight - 200)
  const [beautyHeight, setBeautyHeight] = useState(200)

  const splashHeight = calcHeightFromWindow(70)
  const splashMidpoint = splashHeight / 2

  const height = {
    splash: splashHeight,
    celebrate: H5_LINEHEIGHT,
    beauty: beautyHeight,
    garden: calcHeightFromWindow(48),
  }

  const offset = {
    splash: 0,
    celebrate: (splashMidpoint - H5_LINEHEIGHT - TWO_REM) / space,
    beauty: splashMidpoint / space,
    garden: (space - Math.floor((space - splashHeight) / 2)) / space,
    story: (height.splash + height.garden * 0.33) / space,
  }

  const factor = {
    splash: height.splash / space,
    celebrate: height.celebrate / space,
    beauty: height.beauty / space,
    garden: height.garden / space,
  }

  const speed = {
    splash: 0,
    celebrate: 0.5,
    garden: 0.2,
    beauty: -0.25,
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
      <Parallax ref={parallax} pages={3} className='pt-4'>
        <ParallaxLayer offset={offset.splash} speed={speed.splash} factor={factor.splash}>
          <Splash />
        </ParallaxLayer>

        <ParallaxLayer offset={offset.celebrate} speed={speed.celebrate} factor={factor.celebrate}>
          <CelebrateYou />
        </ParallaxLayer>

        <ParallaxLayer offset={offset.garden} speed={speed.garden} factor={factor.garden}>
          <Garden />
        </ParallaxLayer>

        <ParallaxLayer offset={offset.beauty} speed={speed.beauty} factor={factor.beauty}>
          <UniquelyBeautiful ref={beautyRef} />
        </ParallaxLayer>

        <ParallaxLayer offset={offset.story}>
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

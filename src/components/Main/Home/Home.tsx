import { Parallax, IParallax, ParallaxLayer } from '@react-spring/parallax'
import { useEffect, useRef, useState } from 'react'
import { calcHeightFromWindow } from '@/utils'
import { ONE_REM } from '@/utils/constants'
import Footer from '@/components/Footer'
import assets from '@/utils/assets'
import OurStory from './OurStory'

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
          <div className='flex flex-col items-center'>
            <div className='contain-content bg-image-7 h-[70vh] bg-cover shadow' />
          </div>
        </ParallaxLayer>

        <ParallaxLayer offset={offset.celebrate} speed={speed.celebrate} factor={factor.celebrate}>
          <div className='flex flex-col items-center'>
            <div className='contain-content flex flex-col justify-center pl-16'>
              <h5 className='font-calder text-3xl uppercase tracking-widest text-wheat-100'>
                celebrate what makes you
              </h5>
            </div>
          </div>
        </ParallaxLayer>

        <ParallaxLayer offset={offset.garden} speed={speed.garden} factor={factor.garden}>
          <div className='flex flex-col items-center'>
            <div className='contain-content pl-16'>
              <div
                className='bg-image-2 h-[48vh] w-[36vh] overflow-hidden bg-cover shadow'
                style={{ backgroundPositionX: '75%' }}>
                <img
                  src={assets.images.womanInGarden}
                  className='h-[48vh] w-[36vh] opacity-0'
                  alt='woman in garden'
                />
              </div>
            </div>
          </div>
        </ParallaxLayer>

        <ParallaxLayer offset={offset.beauty} speed={speed.beauty} factor={factor.beauty}>
          <div className='flex flex-col items-center'>
            <div className='contain-content flex flex-col justify-center px-4'>
              <img ref={beautyRef} src={assets.logos.uniquelyBeautiful} alt='uniquely beautiful' />
            </div>
          </div>
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

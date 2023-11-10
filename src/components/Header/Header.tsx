import { useEffect, useRef, useState } from 'react'
import { useScrollPosition } from '@/hooks'
import { useNavigate } from 'react-router-dom'
import { pixel } from '@/utils'
import SocialMediaLinks from './SocialMedia'
import NavigationMenu from './Navigation'
import LogoBanner from '@/assets/logos/banner.svg?react'
import BookNow from './BookNow'
import routes from '@/utils/routes'

function Header() {
  const ref = useRef<HTMLHeadingElement>(null)
  const navigate = useNavigate()
  const position = useScrollPosition((position) => Math.ceil(position / 10))

  const [top, setTop] = useState(200)

  useEffect(() => {
    setTop(ref.current?.getBoundingClientRect().height ?? 200)
  }, [])

  return (
    <>
      <header
        ref={ref}
        className='bg-offwhite sticky top-0 z-20 flex w-full items-center justify-between p-8'>
        <SocialMediaLinks />

        <div
          className='flex items-center justify-center gap-12'
          onClick={() => navigate(routes.home)}>
          <h5 className='whitespace-nowrap border-y border-ink px-0.5 py-1 text-xs font-light uppercase tracking-wider'>
            in historic
          </h5>
          <LogoBanner className='h-28 w-auto fill-ink' />
          <h5 className='whitespace-nowrap border-y border-ink px-0.5 py-1 text-xs font-light uppercase tracking-wider'>
            concord, ma
          </h5>
        </div>

        <NavigationMenu />
      </header>

      <div
        className='fixed z-20 flex w-full justify-center bg-transparent'
        style={{ top: pixel(top) }}>
        <div
          className='contain-content bg-banner-texture-e h-8 bg-[length:auto_300px] bg-repeat shadow'
          style={{ backgroundPosition: `0 ${pixel(position)}` }}
        />
      </div>

      <BookNow top={top} />
    </>
  )
}

export default Header

import { useEffect, useRef, useState } from 'react'
import { useScrollPosition } from '@/hooks'
import { useNavigate } from 'react-router-dom'
import { pixel } from '@/utils'
import SocialMediaLinks from './SocialMedia'
import NavigationMenu from './Navigation'
import LogoBanner from '@/assets/logos/banner.svg?react'
import BookNow from './BookNow'
import routes from '@/utils/routes'
import assets from '@/utils/assets'
export default function Header() {
  const ref = useRef<HTMLHeadingElement>(null)
  const navigate = useNavigate()
  const position = useScrollPosition((position) => Math.ceil(position / 10))

  const [top, setTop] = useState(200)

  useEffect(() => {
    console.log(assets.images.lipGloss)
  }, [])
  useEffect(() => {
    setTop(ref.current?.getBoundingClientRect().height ?? 200)
  }, [])

  return (
    <>
      <header
        ref={ref}
        className='sticky top-0 z-20 grid w-full grid-cols-4 items-center justify-between bg-offwhite p-8'>
        <SocialMediaLinks />

        <div
          className='col-span-2 flex items-center justify-center gap-12'
          onClick={() => navigate(routes.home)}>
          <h5 className='tracking-extreme whitespace-nowrap border-y border-ink px-0.5 py-1 text-sm font-light uppercase'>
            in historic
          </h5>
          <LogoBanner className='h-28 w-auto fill-ink' />
          <h5 className='tracking-extreme whitespace-nowrap border-y border-ink px-0.5 py-1 text-sm font-light uppercase'>
            concord, ma
          </h5>
        </div>

        <div className='flex items-center justify-end'>
          <NavigationMenu />
        </div>
      </header>

      <div
        className='fixed z-20 flex w-full justify-center bg-transparent'
        style={{ top: pixel(top) }}>
        <div
          className='contain-content bg-boho-folk-e h-8 bg-[length:auto_300px] bg-repeat shadow'
          style={{ backgroundPosition: `0 ${pixel(position)}` }}
        />
      </div>

      <BookNow top={top} />
    </>
  )
}

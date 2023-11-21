import { useEffect, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { pixel } from '@/utils'
import SocialMediaLinks from './SocialMedia'
import NavigationMenu from './Navigation'
import LogoBanner from '@/assets/logos/banner.svg?react'
import BookNow from './BookNow'
import routes from '@/utils/routes'

export default function Header() {
  const ref = useRef<HTMLHeadingElement>(null)
  const navigate = useNavigate()
  const [top, setTop] = useState(200)

  useEffect(() => {
    setTop(ref.current?.getBoundingClientRect().height ?? 200)
  }, [])

  return (
    <>
      <header
        ref={ref}
        className='sticky top-0 z-20 grid w-full grid-cols-4 items-center justify-between bg-wheat-100 p-8'>
        <SocialMediaLinks />

        <div
          className='col-span-2 flex items-center justify-center gap-12'
          onClick={() => navigate(routes.home)}>
          <h5 className='whitespace-nowrap border-y border-ink px-0.5 py-1 text-sm font-light uppercase tracking-extreme'>
            in historic
          </h5>
          <LogoBanner className='h-28 w-auto fill-ink' />
          <h5 className='whitespace-nowrap border-y border-ink px-0.5 py-1 text-sm font-light uppercase tracking-extreme'>
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
        <div className='contain-content h-8 bg-boho-folk-e bg-[length:auto_300px] bg-repeat shadow' />
      </div>

      <BookNow top={top} />
    </>
  )
}

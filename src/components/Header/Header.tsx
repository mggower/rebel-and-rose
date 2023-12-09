/* eslint-disable @typescript-eslint/no-unused-vars */
import { useMinScreen } from '@/hooks'
import { useNavigate } from 'react-router-dom'
import { forwardRef } from 'react'
import SocialMediaLinks from '../SocialMedia'
import NavigationMenu from './Navigation'
import LogoBanner from '@/assets/logos/banner.svg?react'
import routes from '@/utils/routes'

const Header = forwardRef<HTMLHeadingElement>(function Header(_, ref) {
  const navigate = useNavigate()
  const desktop = useMinScreen()

  return (
    <header
      ref={ref}
      className='sticky top-0 z-20 flex w-full items-center justify-center bg-wheat-100'>
      {desktop ? (
        <div className='flex grow items-center justify-center gap-16 py-8'>
          <h5 className='whitespace-nowrap border-y border-ink px-0.5 py-1 text-sm font-light uppercase tracking-extreme'>
            in historic
          </h5>
          <LogoBanner
            className='h-24 w-auto fill-ink xl:h-28'
            onClick={() => navigate(routes.home)}
          />
          <h5 className='whitespace-nowrap border-y border-ink px-0.5 py-1 text-sm font-light uppercase tracking-extreme'>
            concord, ma
          </h5>
        </div>
      ) : (
        <div className='flex flex-col items-center pb-2'>
          <LogoBanner
            className='h-12 w-auto fill-ink md:h-14'
            onClick={() => navigate(routes.home)}
          />
        </div>
      )}
    </header>
  )
})
export default Header

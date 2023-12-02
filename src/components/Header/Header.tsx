import { useMinScreen } from '@/hooks'
import { useNavigate } from 'react-router-dom'
import { forwardRef } from 'react'
import SocialMediaLinks from './SocialMedia'
import NavigationMenu from './Navigation'
import LogoBanner from '@/assets/logos/banner.svg?react'
import routes from '@/utils/routes'

const Header = forwardRef<HTMLHeadingElement>(function Header(_, ref) {
  const navigate = useNavigate()
  const desktop = useMinScreen()

  return (
    <header
      ref={ref}
      className='sticky top-0 z-20 grid w-full grid-cols-[1fr_4fr_1fr] items-start justify-between bg-wheat-100 p-4 md:items-center lg:p-8'>
      <SocialMediaLinks />

      <div className='flex w-full items-center justify-center'>
        {desktop ? (
          <div className='flex grow items-center justify-evenly'>
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
      </div>

      <div className='flex items-center justify-end'>
        <NavigationMenu />
      </div>
    </header>
  )
})
export default Header

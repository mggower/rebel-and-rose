import { ADDRESS, BOOKER_URL, SCHEDULE } from '@/utils/constants'
import { Link, useLocation } from 'react-router-dom'
import { Fragment } from 'react'
import Pendant from '@/assets/logos/pendant.svg?react'
import routes from '@/utils/routes'

function Footer() {
  const { pathname } = useLocation()

  return (
    <footer className='flex w-full place-items-center justify-center bg-ink-800 p-8 text-wheat-100'>
      <div className='contain-content flex grow items-center justify-between'>
        <Pendant className='h-40 w-auto fill-wheat-100' />

        <div className='mt-4 grid w-[40vw] max-w-3xl grid-cols-2 items-start justify-start self-start border-r border-r-wheat-100 text-sm uppercase tracking-wide'>
          <section className='flex flex-col border-r border-r-wheat-100 px-0 pb-4 pt-4 tracking-widest'>
            <span className='my-1 font-semibold tracking-widest'>Contact Us:</span>
            {ADDRESS.map((line) => (
              <span key={line} className='text-sm tracking-wide'>
                {line}
              </span>
            ))}
          </section>

          <section className='grid grid-cols-[fit-content(100%)_1fr] gap-x-2 px-8 pb-4 pt-4'>
            {SCHEDULE.map(([day, hours]) => (
              <Fragment key={day}>
                <span className='text-sm tracking-wide'>{day}</span>
                <span className='text-sm tracking-wide'>{hours}</span>
              </Fragment>
            ))}
          </section>

          <section className='col-span-2 border-t border-t-wheat-100 py-4 pl-0 pr-8 text-left text-xs tracking-widest text-ink-200'>
            Rebel & Rose Beauty House ©️ 2023
          </section>
        </div>

        <nav className='my-1 flex flex-col self-start px-4 py-2'>
          {routes.list.map(({ route, label }) => (
            <Link
              to={route}
              key={label}
              className='link px-1.5 py-0.5'
              data-theme='dark'
              data-selected={routes.match(route, pathname)}>
              {label}
            </Link>
          ))}

          <a
            target='_blank'
            rel='noreferrer'
            className='link mt-4 px-1.5 py-0.5'
            data-theme='dark'
            href={BOOKER_URL}>
            Book Now
          </a>
        </nav>
      </div>
    </footer>
  )
}

export default Footer

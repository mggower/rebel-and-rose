import { Link } from 'react-router-dom'
import routes from '@/utils/routes'

export default function OurStory() {
  return (
    <div className='flex flex-col items-center md:items-end'>
      <div className='mx-10 flex flex-col items-start gap-8 md:w-7/12'>
        <h5 className='font-dark text-base uppercase tracking-wider md:text-xl'>
          Welcome to Rebel & Rose
        </h5>

        <p className='max-w-prose indent-2 font-serif tracking-wide md:text-lg'>
          We are a full service hair studio and spa featuring luxury services for all of your beauty
          needs. We strive to create an atmosphere where all are welcome and encouraged to celebrate
          what makes them uniquely beautiful.
        </p>

        <Link
          to={routes.about}
          className='link translate-x-[-0.75rem] font-serif text-sm md:text-base'>
          Our Story
        </Link>
      </div>
    </div>
  )
}

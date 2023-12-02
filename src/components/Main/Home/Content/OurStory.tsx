import { Link } from 'react-router-dom'
import routes from '@/utils/routes'

export default function OurStory() {
  return (
    <div className='flex flex-col items-end'>
      <div className='flex w-7/12 flex-col items-start gap-8'>
        <h5 className='font-dark text-2xl uppercase tracking-wider'>Welcome to Rebel & Rose</h5>

        <p className='max-w-prose font-serif text-lg tracking-wide'>
          We are a full service hair studio and spa featuring luxury services for all of your beauty
          neReds. We strive to create an atmosphere where all are welcome and encouraged to
          celebrate what makes them uniquely beautiful.
        </p>

        <Link to={routes.about} className='link translate-x-[-0.75rem] font-serif text-base'>
          Our Story
        </Link>
      </div>
    </div>
  )
}

import { BOOKER_URL } from '@/utils/constants'
import { pixel } from '@/utils'

export default function BookNow({ top }: { top: number }) {
  return (
    <a
      target='_blank'
      rel='noreferrer'
      href={BOOKER_URL}
      style={{ transform: `translateY(calc(${pixel(top)} + 2rem))` }}
      className='vertical-text fixed left-0 top-0 z-20 rounded-sm bg-russet p-4 text-sm uppercase text-offwhite no-underline outline-none hover:bg-russet-700 focus:bg-russet-700 hover:active:bg-russet-900 focus:active:bg-russet-900'>
      Book Now
    </a>
  )
}
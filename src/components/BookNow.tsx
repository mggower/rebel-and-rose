import { useMaxScreen } from '@/hooks'
import { BOOKER_URL } from '@/utils/constants'
import { pixel } from '@/utils'
import { book } from '@/utils/icons'
import Icon from './Shared/Icon'

interface Props {
  top: number
}

export default function BookNow({ top }: Props) {
  const mobile = useMaxScreen('md')

  const transform = `translateY(${pixel(top)})`

  return (
    <a
      target='_blank'
      rel='noreferrer'
      href={BOOKER_URL}
      style={{ transform }}
      className='button vertical-text fixed left-0 top-10 z-20 items-center justify-center rounded-bl-none rounded-tl-none py-3 pl-2 pr-1 shadow md:top-12 lg:p-4'>
      {mobile ? <Icon icon={book} className='text-wheat-100' /> : <>Book Now</>}
    </a>
  )
}

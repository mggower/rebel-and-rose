import { createCssVariable, pixel } from '@/utils'
import { BOOKER_URL } from '@/utils/constants'
import styles from './BookNow.module.scss'

function BookNow({ top }: { top: number }) {
  return (
    <a
      href={BOOKER_URL}
      className={styles.booker}
      style={createCssVariable(['top', pixel(top)])}
      target='_blank'
      rel='noreferrer'>
      Book Now
    </a>
  )
}

export default BookNow

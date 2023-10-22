import { BOOKER_URL } from '@/utils/constants'
import styles from './BookNow.module.scss'

function BookNow() {
  return (
    <a className={styles.booker} href={BOOKER_URL} target='_blank' rel='noreferrer'>
      Book Now
    </a>
  )
}

export default BookNow

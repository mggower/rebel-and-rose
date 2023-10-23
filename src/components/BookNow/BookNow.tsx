import { BOOKER_URL } from '@/utils/constants'
import styles from './BookNow.module.scss'
import { FloatingPortal } from '@floating-ui/react'

function BookNow() {
  return (
    <FloatingPortal>
      <a className={styles.booker} href={BOOKER_URL} target='_blank' rel='noreferrer'>
        Book Now
      </a>
    </FloatingPortal>
  )
}

export default BookNow

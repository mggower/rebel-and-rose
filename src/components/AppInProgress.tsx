import { BOOKER_URL, FACEBOOK_URL, INSTAGRAM_URL } from '@/utils/constants'
import { facebook, instagram } from '@/utils/icons'
import BannerLogo from '@/assets/logos/banner.svg?react'
import Icon from './Icon'
import styles from './AppInProgress.module.scss'

function AppInProgress() {
  return (
    <div className={styles.app}>
      <BannerLogo style={{ width: '60vw', height: 'auto' }} />
      <a
        target='_blank'
        rel='noreferrer'
        href={BOOKER_URL}
        className={styles.booknow}
        style={{ marginTop: '1rem' }}>
        Book Now
      </a>

      <p>Website Coming Soon</p>
      <div className={styles.social}>
        <a href={FACEBOOK_URL} target='_blank' rel='noreferrer'>
          <Icon icon={facebook} />
        </a>
        <a href={INSTAGRAM_URL} target='_blank' rel='noreferrer'>
          <Icon icon={instagram} />
        </a>
      </div>
    </div>
  )
}

export default AppInProgress

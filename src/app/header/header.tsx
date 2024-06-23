'use client'
import {
  faBars as barsIcon,
  faPlus as plusIcon,
  faBook as bookIcon,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome'
import AnchorButton from '@/components/button/anchor-button'
import Button from '@/components/button/button'
import Image from 'next/image'
import useBreakpoints from '@/hooks/useBreakpoints'
import logoBanner from '@/assets/logos/banner.svg'
import styles from './header.module.sass'
import routes from '@/utils/routes'

export default function Header() {
  const mobile = useBreakpoints()

  return (
    <div className={styles.headerContainer}>
      <header className={styles.header}>
        <div className={styles.left}>
          {mobile ? (
            <AnchorButton size='icon' href={routes.bookingUrl}>
              <Icon icon={bookIcon} />
            </AnchorButton>
          ) : (
            <AnchorButton href={routes.bookingUrl}>Book Now</AnchorButton>
          )}

          <Button variant='tertiary' size='icon'>
            <Icon icon={plusIcon} />
          </Button>
        </div>

        <div className={styles.center}>
          <div className={styles.captionContainer}>
            <h5 className={styles.caption}>In historic</h5>
          </div>

          <Image
            priority
            src={logoBanner}
            className={styles.logo}
            height={mobile ? 64 : 96}
            alt='Rebel and Rose logo'
          />

          <div className={styles.captionContainer}>
            <h5 className={styles.caption}>Concord, MA</h5>
          </div>
        </div>

        <div className={styles.right}>
          {mobile ? (
            <Button variant='tertiary' size='icon'>
              <Icon icon={barsIcon} />
            </Button>
          ) : (
            <Button variant='tertiary'>Menu</Button>
          )}
        </div>
      </header>

      <div className={styles.bannerContainer}>
        <div className={styles.banner} />
      </div>
    </div>
  )
}

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
import headerLogo from '@/assets/logos/header-logo.png'
import styles from './header.module.sass'
import routes from '@/utils/routes'

export default function Header() {
  const mobile = useBreakpoints()

  return (
    <div className={styles.headerContainer}>
      <header className={styles.header}>
        <Image priority src={headerLogo} height={mobile ? 64 : 144} alt='Rebel and Rose logo' />

        <div className={styles.nav}>
          {mobile ? (
            <AnchorButton size='icon' href={routes.bookingUrl}>
              <Icon icon={bookIcon} />
            </AnchorButton>
          ) : (
            <AnchorButton href={routes.bookingUrl}>Book Now</AnchorButton>
          )}

          {mobile ? (
            <Button variant='tertiary' size='icon'>
              <Icon icon={plusIcon} />
            </Button>
          ) : (
            <Button variant='tertiary'>Follow us</Button>
          )}

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

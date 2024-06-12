import Image from 'next/image'
import styles from './header.module.sass'
import logoBanner from '@/assets/logos/banner.svg'
import fonts from '@/fonts'

export default function Header() {
  return (
    <div className={styles.headerContainer}>
      <header className={styles.header}>
        <div className={styles.left}>
          <button>+</button>
          <button>Book Now</button>
        </div>

        <div className={styles.center}>
          <div className={styles.captionContainer}>
            <h5 className={styles.caption}>in historic</h5>
          </div>

          <Image
            priority
            height={96}
            src={logoBanner}
            className={styles.logo}
            alt='Rebel and Rose logo'
          />

          <div className={styles.captionContainer}>
            <h5 className={styles.caption}>concord, ma</h5>
          </div>
        </div>

        <button className={styles.right}>|||</button>
      </header>

      <div className={styles.bannerContainer}>
        <div className={styles.banner} />
      </div>
    </div>
  )
}

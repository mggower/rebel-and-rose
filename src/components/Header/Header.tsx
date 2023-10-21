import Icon, { bars, plus, facebook, instagram, tiktok } from '@/components/Icon'
import styles from './Header.module.scss'

function Header() {
  return (
    <header>
      <div className={styles.icons}>
        <Icon icon={plus} />
        <Icon icon={facebook} />
        <Icon icon={instagram} />
        <Icon icon={tiktok} />
      </div>

      <div className={styles.banner}>
        <h5>in historic</h5>
        <div className={styles.logo}>
          <h1>Rebel & Rose</h1>
          <div>
            <h3>Beauty House</h3>
          </div>
        </div>
        <h5>concord, ma</h5>
      </div>

      <nav>
        <Icon icon={bars} size='xl' />
      </nav>
    </header>
  )
}

export default Header

import SocialMediaLinks from './SocialMedia'
import NavigationMenu from './Navigation'
import styles from './Header.module.scss'

function Header() {
  return (
    <header>
      <SocialMediaLinks />

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

      <NavigationMenu />
    </header>
  )
}

export default Header

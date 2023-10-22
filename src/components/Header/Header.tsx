import { useNavigate } from 'react-router-dom'
import SocialMediaLinks from './SocialMedia'
import NavigationMenu from './Navigation'
import styles from './Header.module.scss'
import routes from '@/utils/routes'

function Header() {
  const navigate = useNavigate()
  return (
    <header>
      <div className={styles.primary}>
        <SocialMediaLinks />

        <div className={styles.banner} onClick={() => navigate(routes.home)}>
          <h5>in historic</h5>
          <h1>Rebel & Rose</h1>
          <h5>concord, ma</h5>
        </div>

        <NavigationMenu />
      </div>

      <h3>Beauty House</h3>

      <div className={styles.texture} />
    </header>
  )
}

export default Header

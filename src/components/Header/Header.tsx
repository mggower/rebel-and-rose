import { useScrollPosition } from '@/hooks'
import { createCssVariable } from '@/utils'
import { useNavigate } from 'react-router-dom'
import SocialMediaLinks from './SocialMedia'
import NavigationMenu from './Navigation'
import LogoBanner from '@/assets/logos/banner.svg?react'
import styles from './Header.module.scss'
import routes from '@/utils/routes'

function Header() {
  const navigate = useNavigate()
  const position = useScrollPosition((position) => Math.ceil(position / 10))

  return (
    <header>
      <div className={styles.primary}>
        <SocialMediaLinks />

        <div className={styles.banner} onClick={() => navigate(routes.home)}>
          <h5>in historic</h5>
          <LogoBanner className={styles.logo} />
          <h5>concord, ma</h5>
        </div>

        <NavigationMenu />
      </div>

      <div className={styles.texture} style={createCssVariable('pos', `${position}px`)} />
    </header>
  )
}

export default Header

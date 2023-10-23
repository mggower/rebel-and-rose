import { useNavigate } from 'react-router-dom'
import SocialMediaLinks from './SocialMedia'
import NavigationMenu from './Navigation'
import LogoBanner from '@/assets/logos/banner.svg?react'
import styles from './Header.module.scss'
import routes from '@/utils/routes'
import { useEffect, useState } from 'react'

function addCssVars(...vars: [name: string, value: string | number][]) {
  return vars.reduce(
    (acc, [name, value]) => {
      acc[name] = value
      return acc
    },
    {} as Record<string, string | number>,
  ) as React.CSSProperties
}

function Header() {
  const navigate = useNavigate()
  const [position, setPosition] = useState(0)

  useEffect(() => {
    function scrollEvent() {
      setPosition(Math.ceil(window.scrollY / 10))
    }

    window.addEventListener('scroll', scrollEvent)

    return () => {
      window.removeEventListener('scroll', scrollEvent)
    }
  }, [])

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

      <div className={styles.texture} style={addCssVars(['--pos', `${position}px`])} />
    </header>
  )
}

export default Header

import { useScrollPosition } from '@/hooks'
import { createCssVariable, pixel } from '@/utils'
import { useNavigate } from 'react-router-dom'
import { useEffect, useRef, useState } from 'react'
import SocialMediaLinks from './SocialMedia'
import NavigationMenu from './Navigation'
import LogoBanner from '@/assets/logos/banner.svg?react'
import BookNow from './BookNow'
import styles from './Header.module.scss'
import routes from '@/utils/routes'

function Header() {
  const ref = useRef<HTMLHeadingElement>(null)
  const navigate = useNavigate()
  const position = useScrollPosition((position) => Math.ceil(position / 10))

  const [top, setTop] = useState(200)

  useEffect(() => {
    setTop(ref.current?.getBoundingClientRect().height ?? 200)
  }, [])

  return (
    <>
      <header ref={ref}>
        <div className={styles.primary}>
          <SocialMediaLinks />

          <div className={styles.banner} onClick={() => navigate(routes.home)}>
            <h5>in historic</h5>
            <LogoBanner className={styles.logo} />
            <h5>concord, ma</h5>
          </div>

          <NavigationMenu />
        </div>
      </header>
      <div className={styles.center}>
        <div
          className={styles.textureContainer}
          style={createCssVariable(['pos', pixel(position)], ['top', pixel(top)])}>
          <div className={styles.texture} />
        </div>
      </div>

      <BookNow top={top} />
    </>
  )
}

export default Header

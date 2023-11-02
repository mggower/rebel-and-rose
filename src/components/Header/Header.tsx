import { useScrollPosition } from '@/hooks'
import { createCssVariable, pixel } from '@/utils'
import { useNavigate } from 'react-router-dom'
import { useEffect, useRef, useState } from 'react'
import SocialMediaLinks from './SocialMedia'
import NavigationMenu from './Navigation'
import LogoBanner from '@/assets/logos/banner.svg?react'
import styles from './Header.module.scss'
import routes from '@/utils/routes'
import BookNow from '../BookNow'

function Header() {
  const [top, setTop] = useState(200)
  const ref = useRef<HTMLHeadingElement>(null)
  const navigate = useNavigate()
  const position = useScrollPosition((position) => Math.ceil(position / 10))

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
          className={styles.texture}
          style={createCssVariable(['pos', pixel(position)], ['top', pixel(top)])}
        />
      </div>

      <BookNow top={top} />
    </>
  )
}

export default Header

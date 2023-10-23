import { ADDRESS, BOOKER_URL, SCHEDULE } from '@/utils/constants'
import { Link, useLocation } from 'react-router-dom'
import { Fragment } from 'react'
import Pendant from '@/assets/logos/pendant.svg?react'
import styles from './Footer.module.scss'
import routes from '@/utils/routes'

function Footer() {
  const { pathname } = useLocation()

  return (
    <footer>
      <div className={styles.content}>
        <Pendant className={styles.pendant} />

        <div className={styles.info}>
          <section className={styles.meta}>
            <span>Contact Us:</span>
            {ADDRESS.map((line) => (
              <span key={line}>{line}</span>
            ))}
          </section>

          <section className={styles.schedule}>
            {SCHEDULE.map(([day, hours]) => (
              <Fragment key={day}>
                <span>{day}</span>
                <span>{hours}</span>
              </Fragment>
            ))}
          </section>

          <caption className={styles.copywrite}>Rebel & Rose Beauty House ©️ 2023</caption>
        </div>

        <nav className={styles.links}>
          {routes.list.map(({ route, label }) => (
            <Link
              to={route}
              key={label}
              className={styles.route}
              data-active={routes.match(route, pathname)}>
              {label}
            </Link>
          ))}

          <a
            target='_blank'
            rel='noreferrer'
            href={BOOKER_URL}
            className={styles.route}
            style={{ marginTop: '1rem' }}>
            Book Now
          </a>
        </nav>
      </div>
    </footer>
  )
}

export default Footer

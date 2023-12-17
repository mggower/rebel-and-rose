import { ADDRESS, BOOKER_URL, SCHEDULE } from '@/utils/constants'
import { useLocation } from 'react-router-dom'
import { Fragment } from 'react'
import { css } from '@emotion/react'
import Pendant from '@/assets/logos/pendant.svg?react'
import routes from '@/utils/routes'
import library from '@/styles/library'
import theme from '@/styles/theme'
import Link from './Shared/Link'

const styles = {
  footer: css({
    zIndex: 20,
    width: '100%',
    padding: '32px',
    display: 'flex',
    placeItems: 'center',
    justifyContent: 'center',
    backgroundColor: theme.palette.ink[800],
    color: theme.palette.wheat[100],
  }),
  content: css({
    display: 'flex',
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
  }),
  pendant: css({
    height: '10rem',
    width: 'auto',
    fill: theme.palette.wheat[100],
  }),
  info: css({
    marginTop: '16px',
    display: 'grid',
    width: '40vw',
    maxWidth: '48rem',
    gridTemplateColumns: 'repeat(2, minmax(0, 1fr))',
    borderRight: `1px solid ${theme.palette.wheat[100]}`,
    alignItems: 'start',
    justifyContent: 'start',
    alignSelf: 'start',
    fontSize: theme.typography.size[100],
    textTransform: 'uppercase',
    letterSpacing: theme.typography.tracking.wide,
    lineHeight: 1.3,
  }),
  contact: css({
    display: 'flex',
    flexDirection: 'column',
    borderRight: `1px solid ${theme.palette.wheat[100]}`,
    padding: '16px 0',
    letterSpacing: theme.typography.tracking.widest,
  }),
  header: css({
    margin: '4px 0',
    letterSpacing: theme.typography.tracking.widest,
  }),
  text: css({
    fontSize: theme.typography.size[100],
    letterSpacing: '0.025rem',
  }),
  schedule: css({
    display: 'grid',
    gridTemplateColumns: 'fit-content(100%) 1fr',
    columnGap: '8px',
    padding: '16px 32px',
  }),
  trademark: css({
    textAlign: 'left',
    gridColumn: 'span 2',
    padding: '16px 32px 16px 0',
    borderTop: `1px solid ${theme.palette.wheat[100]}`,
    fontSize: theme.typography.size[75],
    letterSpacing: theme.typography.tracking.widest,
    color: theme.palette.ink[200],
  }),
  routes: css({
    display: 'flex',
    flexDirection: 'column',
    alignSelf: 'start',
    margin: '4px 0',
    padding: '8px 16px',
  }),
  link: css({
    padding: '8px 24px',
  }),
  booker: css({
    marginTop: '8px',
  }),
}

function Footer() {
  const { pathname } = useLocation()

  return (
    <footer css={styles.footer}>
      <div css={[library.contain, styles.content]}>
        <Pendant css={styles.pendant} />

        <div css={styles.info}>
          <section css={styles.contact}>
            <span css={styles.header}>Contact Us:</span>
            {ADDRESS.map((line) => (
              <span key={line} css={styles.text}>
                {line}
              </span>
            ))}
          </section>

          <section css={styles.schedule}>
            {SCHEDULE.map(([day, hours]) => (
              <Fragment key={day}>
                <span css={styles.text}>{day}</span>
                <span css={styles.text}>{hours}</span>
              </Fragment>
            ))}
          </section>

          <section css={styles.trademark}>Rebel & Rose Beauty House ©️ 2023</section>
        </div>

        <nav css={styles.routes}>
          {routes.list.map(({ route, label }) => (
            <Link
              to={route}
              key={label}
              linkTheme='dark'
              linkColor='primary'
              selected={routes.match(route, pathname)}>
              {label}
            </Link>
          ))}

          <Link
            external
            linkTheme='dark'
            key='booker'
            linkColor='secondary'
            css={styles.booker}
            to={BOOKER_URL}>
            Book Now
          </Link>
        </nav>
      </div>
    </footer>
  )
}

export default Footer

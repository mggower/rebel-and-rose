import { ADDRESS, BOOKER_URL, SCHEDULE } from '@/utils/constants'
import { Link, useLocation } from 'react-router-dom'
import { Fragment } from 'react'
import { css } from '@emotion/react'
import Pendant from '@/assets/logos/pendant.svg?react'
import routes from '@/utils/routes'
import palette from '@/styles/palette'
import library from '@/styles/library'
import theme from '@/styles/theme'

const styles = {
  footer: css({
    zIndex: 20,
    width: '100%',
    padding: '32px',
    display: 'flex',
    placeItems: 'center',
    justifyContent: 'center',
    backgroundColor: palette.ink[800],
    color: palette.wheat[100],
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
    fill: palette.wheat[100],
  }),
  info: css({
    marginTop: '16px',
    display: 'grid',
    width: '40vw',
    maxWidth: '48rem',
    gridTemplateColumns: 'repeat(2, minmax(0, 1fr))',
    borderRight: `1px solid ${palette.wheat[100]}`,
    alignItems: 'start',
    justifyContent: 'start',
    alignSelf: 'start',
    fontSize: theme.fontSize.sm,
    textTransform: 'uppercase',
    letterSpacing: theme.tracking.wide,
    lineHeight: 1.3,
  }),
  contact: css({
    display: 'flex',
    flexDirection: 'column',
    borderRight: `1px solid ${palette.wheat[100]}`,
    padding: '16px 0',
    letterSpacing: theme.tracking.widest,
  }),
  header: css({
    margin: '4px 0',
    letterSpacing: theme.tracking.widest,
  }),
  text: css({
    fontSize: theme.fontSize.sm,
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
    borderTop: `1px solid ${palette.wheat[100]}`,
    fontSize: theme.fontSize.xs,
    letterSpacing: theme.tracking.widest,
    color: palette.ink[200],
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
              css={[library.link, styles.link]}
              data-theme='dark'
              data-selected={routes.match(route, pathname)}>
              {label}
            </Link>
          ))}

          <a
            target='_blank'
            rel='noreferrer'
            data-theme='dark'
            href={BOOKER_URL}
            style={{ marginTop: '8px' }}
            css={[library.link, styles.link]}>
            Book Now
          </a>
        </nav>
      </div>
    </footer>
  )
}

export default Footer

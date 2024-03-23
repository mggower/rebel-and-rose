import { ADDRESS, SCHEDULE, TRADEMARK } from '@/utils/constants'
// import { useLocation } from 'react-router-dom'
import { useScreen } from '@/hooks'
import { Tracking } from '@/styles/typography'
import { css } from '@emotion/react'
import Typography from '../Shared/Typography'
import Pendant from '@/assets/logos/pendant.svg?react'
import Link from '../Shared/Link'
import library from '@/styles/library'
import routes from '@/utils/routes'
import theme from '@/styles/theme'

const data = [
  { address: 'Contact Us:', schedule: SCHEDULE[0] },
  { address: ADDRESS[0], schedule: SCHEDULE[1] },
  { address: ADDRESS[1], schedule: SCHEDULE[2] },
  { address: ADDRESS[2], schedule: SCHEDULE[3] },
  { address: ADDRESS[3], schedule: SCHEDULE[4] },
]

const styles = {
  component: css(library.flex.column, {
    height: '100%',
    justifyContent: 'flex-end',
    flexGrow: 1,
  }),
  footer: css({
    width: '100%',
    padding: theme.style.box(8, 4),
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: theme.zIndex.layer,
    backgroundColor: theme.palette.ink[800],
    color: theme.palette.wheat[100],
    [theme.screen.md]: {
      padding: theme.style.box(12, 8),
    },
  }),
  content: css(library.contain, {
    flexGrow: 1,
    textTransform: 'uppercase',
    flexDirection: 'column',
    display: 'grid',
    alignItems: 'start',
    justifyItems: 'center',
    gap: theme.spacing(8),
    gridTemplateColumns: '25% auto',
    gridTemplateAreas: `
      "pendant routes"
      "info info"`,
    [theme.screen.md]: {
      gap: theme.spacing(16),
      gridTemplateColumns: '1fr 4fr 1fr',
      gridTemplateAreas: `
        "pendant info routes"`,
    },
  }),
  trademark: css({
    color: theme.palette.ink[300],
  }),
  pendant: css({
    width: 'auto',
    gridArea: 'pendant',
    fill: theme.palette.wheat[100],
    height: theme.spacing(20),
    [theme.screen.md]: {
      height: theme.spacing(36),
    },
  }),
  info: css({
    width: '100%',
    textAlign: 'left',
    gridArea: 'info',
    '& > tbody': {
      ...theme.style.border('solid', '1px', theme.palette.wheat[100], 'bottom'),
      '& > tr > td': {
        paddingLeft: theme.spacing(2),
        [theme.screen.md]: {
          paddingLeft: theme.spacing(8),
        },
      },
      '& > tr:last-of-type > td': {
        paddingBottom: theme.spacing(4),
      },
    },
    '& > tfoot > tr > td': {
      padding: theme.spacing(2),
      [theme.screen.md]: {
        padding: theme.style.box(4, 8),
      },
    },
    '& * > tr > td': {
      ...theme.style.border('solid', '1px', theme.palette.wheat[100], 'right'),
    },
  }),
  routes: css({
    display: 'flex',
    flexWrap: 'wrap',
    gridArea: 'routes',
    justifyContent: 'flex-end',
    [theme.screen.md]: {
      flexWrap: 'nowrap',
      flexDirection: 'column',
      justifyContent: 'flex-start',
    },
  }),
  link: css({
    padding: theme.style.box(0, 2),
    [theme.screen.md]: {
      '&:last-of-type': {
        // marginTop: theme.spacing(4),
      },
    },
  }),
}

function Footer() {
  // const { pathname } = useLocation()
  const tracking = useScreen<Tracking>((desktop) => (desktop ? 'widest' : 'wide'), [])

  return (
    <div css={styles.component}>
      <footer css={styles.footer}>
        <div css={styles.content}>
          <Pendant css={styles.pendant} />

          <table css={styles.info}>
            <tbody>
              {data.map(({ address, schedule }, i) => (
                <tr key={`row:${i}`}>
                  <td>
                    <Typography fontSize='sm' tracking={tracking}>
                      {address}
                    </Typography>
                  </td>
                  <td>
                    <Typography fontSize='sm' tracking={tracking}>
                      {schedule}
                    </Typography>
                  </td>
                </tr>
              ))}
            </tbody>
            <tfoot>
              <tr>
                <td colSpan={2}>
                  <Typography fontSize='sm' tracking={tracking} css={styles.trademark}>
                    {TRADEMARK}
                  </Typography>
                </td>
              </tr>
            </tfoot>
          </table>

          <nav css={styles.routes}>
            {/* {routes.list.map(({ route, label }) => (
              <Link
                to={route}
                key={label}
                linkTheme='dark'
                linkColor='tertiary'
                tracking={tracking}
                fontSize='sm'
                css={styles.link}
                selected={routes.match(route, pathname)}>
                {label}
              </Link>
            ))} */}

            <Link
              external
              key='booker'
              linkTheme='dark'
              linkColor='secondary'
              tracking={tracking}
              fontSize='sm'
              css={styles.link}
              to={routes.booker}>
              Book Now
            </Link>
          </nav>
        </div>
      </footer>
    </div>
  )
}

export default Footer

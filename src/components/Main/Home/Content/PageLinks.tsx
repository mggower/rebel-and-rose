import { css } from '@emotion/react'
import Link from '@/components/Shared/Link'
import theme from '@/styles/theme'
import routes from '@/utils/routes'

const styles = {
  component: css({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: theme.spacing(2),
    [theme.screen.md]: {
      justifyContent: 'flex-start',
    },
  }),
}

export default function PageLinks() {
  return (
    <div css={styles.component}>
      <Link
        uppercase
        underline
        variant='button'
        buttonTheme='secondary'
        buttonSize='narrow'
        tracking='wide'
        family='serif'
        to={routes.talent}>
        Our Talent
      </Link>
      <Link
        external
        uppercase
        underline
        variant='button'
        buttonTheme='primary'
        buttonSize='narrow'
        tracking='wide'
        family='serif'
        to={routes.booker}>
        Book Now
      </Link>
    </div>
  )
}

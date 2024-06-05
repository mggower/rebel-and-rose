import { css } from '@emotion/react'
import Link from '@/components/Shared/Link'
import theme from '@/styles/theme'
import routes from '@/utils/routes'

interface Props {
  prop?: unknown
}

const styles = {
  component: css({
    display: 'flex',
    alignItems: 'center',
    gap: theme.spacing(2),
  }),
}

export default function PageLinks(_: Props) {
  return (
    <div css={styles.component}>
      {/* <Link
        uppercase
        underline
        variant='button'
        buttonTheme='secondary'
        buttonSize='narrow'
        tracking='wide'
        family='serif'
        to={routes.talent}>
        Our Talent
      </Link> */}
      <Link
        external
        uppercase
        underline
        variant='button'
        buttonTheme='primary'
        buttonSize='narrow'
        family='serif'
        to={routes.booking}>
        Book Now
      </Link>
    </div>
  )
}

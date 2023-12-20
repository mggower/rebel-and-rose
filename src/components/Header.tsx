import { useNavigate } from 'react-router-dom'
import { forwardRef } from 'react'
import { css } from '@emotion/react'
import LogoBanner from '@/assets/logos/banner.svg?react'
import Heading from './Shared/Heading'
import routes from '@/utils/routes'
import theme from '@/styles/theme'

const styles = {
  component: css({
    top: 0,
    display: 'flex',
    position: 'sticky',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: theme.zIndex.layer,
    backgroundColor: theme.palette.wheat[100],
  }),
  content: css({
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'center',
    padding: `${theme.spacing[4]} 0`,
    [theme.screen.lg]: {
      flexGrow: 1,
      flexDirection: 'row',
      gap: theme.spacing[16],
      padding: `${theme.spacing[8]} 0`,
    },
  }),
  heading: css({
    whiteSpace: 'nowrap',
    textTransform: 'uppercase',
    padding: `${theme.spacing[1]} ${theme.spacing[2]}`,
    border: `1px solid ${theme.palette.ink.main}`,
    boxShadow: theme.shadow.min,
    display: 'none',
    borderLeft: 'none',
    borderRight: 'none',
    [theme.screen.md]: {
      display: 'block',
    },
  }),
  logo: css({
    width: 'auto',
    fill: theme.palette.ink.main,
    height: theme.spacing[12],
    [theme.screen.md]: {
      height: theme.spacing[14],
    },
    [theme.screen.lg]: {
      height: theme.spacing[24],
    },
    [theme.screen.xl]: {
      height: theme.spacing[28],
    },
  }),
}

const Header = forwardRef<HTMLHeadingElement>(function Header(_, ref) {
  const navigate = useNavigate()

  return (
    <header ref={ref} css={styles.component}>
      <div css={styles.content}>
        <Heading tracking='extreme' weight='normal' fontSize='min' css={styles.heading}>
          in historic
        </Heading>

        <LogoBanner css={styles.logo} onClick={() => navigate(routes.home)} />

        <Heading tracking='extreme' weight='normal' fontSize='min' css={styles.heading}>
          concord, ma
        </Heading>
      </div>
    </header>
  )
})
export default Header

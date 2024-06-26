import { useNavigate } from 'react-router-dom'
import { forwardRef } from 'react'
import { css } from '@emotion/react'
import LogoBanner from '@/assets/logos/banner.svg?react'
import routes from '@/utils/routes'
import theme from '@/styles/theme'
import HeaderCaption from './HeaderCaption'

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
    padding: `${theme.spacing(4)} 0`,
    [theme.screen.lg]: {
      flexGrow: 1,
      flexDirection: 'row',
      gap: theme.spacing(16),
      padding: `${theme.spacing(8)} 0`,
    },
  }),
  heading: css({
    whiteSpace: 'nowrap',
    textTransform: 'uppercase',
    padding: theme.style.box(1, 2),
    border: `1px solid ${theme.palette.ink.main}`,
    boxShadow: theme.shadow.xs,
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
    height: theme.spacing(12),
    [theme.screen.md]: {
      height: theme.spacing(14),
    },
    [theme.screen.lg]: {
      height: theme.spacing(24),
    },
    [theme.screen.xl]: {
      height: theme.spacing(28),
    },
  }),
}

const Logo = forwardRef<HTMLHeadingElement>(function Header(_, ref) {
  const navigate = useNavigate()

  return (
    <header ref={ref} css={styles.component}>
      <div css={styles.content}>
        <HeaderCaption>in historic</HeaderCaption>

        <LogoBanner css={styles.logo} onClick={() => navigate(routes.home)} />

        <HeaderCaption>concord, ma</HeaderCaption>
      </div>
    </header>
  )
})
export default Logo

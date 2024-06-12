import { useNavigate } from 'react-router-dom'
import { css } from '@emotion/react'
import HeaderCaption from './HeaderCaption'
import SocialMedia from './SocialMedia'
import LogoBanner from '@/assets/logos/banner.svg?react'
import Navigation from './Navigation'
import BookNow from './BookNow'
import Banner from './Banner'
import library from '@/styles/library'
import routes from '@/utils/routes'
import theme from '@/styles/theme'

const styles = {
  component: css({
    display: 'grid',
    position: 'relative',
    gridTemplateColumns: 'min-content auto min-content',
    justifyContent: 'space-between',
    '&::after': {
      content: '" "',
      position: 'absolute',
      background: `linear-gradient(${theme.palette.wheat[100]} 5%, transparent)`,
      height: theme.spacing(4),
      zIndex: theme.zIndex.layer,
      width: '100vw',
      left: 0,
      bottom: theme.spacing(-4),
    },
  }),
  banner: css(library.contain, library.flex.column, {
    alignItems: 'center',
    justifyContent: 'flex-start',
  }),
  content: css(library.flex.column, library.flex.center, {
    top: 0,
    flexGrow: 1,
    position: 'sticky',
    zIndex: theme.zIndex.layer,
    backgroundColor: theme.palette.wheat[100],
    padding: theme.style.box(6, 0),
    [theme.screen.md]: {
      flexDirection: 'row',
      gap: theme.spacing(16),
      padding: theme.style.box(8, 0),
    },
  }),
  logo: css({
    width: 'auto',
    fill: theme.palette.ink.main,
    height: theme.spacing(16),
    filter: `drop-shadow(4px 4px 8px ${theme.style.alpha(theme.palette.ink[800], 0.2)})`,
    [theme.screen.md]: {
      height: theme.spacing(24),
    },
    [theme.screen.lg]: {
      height: theme.spacing(24),
    },
    [theme.screen.xl]: {
      height: theme.spacing(28),
    },
  }),
}

export default function Header() {
  const navigate = useNavigate()

  return (
    <header css={styles.component}>
      <div>
        <SocialMedia />
        <BookNow />
      </div>

      <div css={styles.banner}>
        <div css={styles.content}>
          <HeaderCaption>in historic</HeaderCaption>

          <LogoBanner css={styles.logo} onClick={() => navigate(routes.home)} />

          <HeaderCaption>concord, ma</HeaderCaption>
        </div>

        <Banner />
      </div>

      <Navigation />
    </header>
  )
}

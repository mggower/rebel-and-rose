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
    gridTemplateColumns: 'min-content auto min-content',
    justifyContent: 'space-between',
  }),
  banner: css(library.flex.column, {
    alignItems: 'center',
    justifyContent: 'flex-start',
  }),
  content: css(library.flex.column, library.flex.center, {
    top: 0,
    flexGrow: 1,
    position: 'sticky',
    zIndex: theme.zIndex.layer,
    backgroundColor: theme.palette.wheat[100],
    padding: theme.padding(4, 0),
    [theme.screen.lg]: {
      flexDirection: 'row',
      gap: theme.spacing[16],
      padding: theme.padding(8, 0),
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

export default function Header() {
  const navigate = useNavigate()

  return (
    <header css={styles.component}>
      <div>
        <SocialMedia />
        <BookNow top={200} />
      </div>

      <div css={styles.banner}>
        <div css={styles.content}>
          <HeaderCaption>in historic</HeaderCaption>

          <LogoBanner css={styles.logo} onClick={() => navigate(routes.home)} />

          <HeaderCaption>concord, ma</HeaderCaption>
        </div>

        <Banner />
      </div>

      <nav>
        <Navigation />
      </nav>
    </header>
  )
}

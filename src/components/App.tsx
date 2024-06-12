import { Routes, Route } from 'react-router-dom'
import { css } from '@emotion/react'
import Header from './Header'
import paths from '../utils/routes'
import Home from './Main/Home'
import About from './Main/About'
import Contact from './Main/Contact'
import Policies from './Main/Policies'
import Salon from './Main/Salon'
import Spa from './Main/Spa'
import Team from './Main/Team'

const styles = {
  app: css({
    display: 'grid',
    width: '100vw',
    minHeight: '100vh',
    position: 'relative',
    gridTemplateRows: 'min-content auto',
  }),
  main: css({
    display: 'flex',
    position: 'relative',
    placeItems: 'center',
    flexDirection: 'column',
  }),
}

export default function App() {
  return (
    <div css={styles.app}>
      <Header />

      <main css={styles.main}>
        <Routes>
          <Route path={paths.home} element={<Home />} />
          <Route path={paths.about} element={<About />} />
          <Route path={paths.contact} element={<Contact />} />
          <Route path={paths.policies} element={<Policies />} />
          <Route path={paths.salon} element={<Salon />} />
          <Route path={paths.spa} element={<Spa />} />
          <Route path={paths.talent} element={<Team />} />
        </Routes>
      </main>
    </div>
  )
}

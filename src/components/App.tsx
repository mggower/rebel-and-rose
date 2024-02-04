import { About, Contact, Home, Policies, Salon, Spa, Team } from './Main'
import { Routes, Route } from 'react-router-dom'
import { css } from '@emotion/react'
import paths from '../utils/routes'
import Header from './Header'

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

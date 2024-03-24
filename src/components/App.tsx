import { Routes, Route } from 'react-router-dom'
import { lazy } from 'react'
import { css } from '@emotion/react'
import ContentHeight from './ContentHeight'
import Header from './Header'
import paths from '../utils/routes'

const Home = lazy(() => import('./Main/Home'))
const About = lazy(() => import('./Main/About'))
const Contact = lazy(() => import('./Main/Contact'))
const Policies = lazy(() => import('./Main/Policies'))
const Salon = lazy(() => import('./Main/Salon'))
const Spa = lazy(() => import('./Main/Spa'))
const Team = lazy(() => import('./Main/Team'))

const styles = {
  app: css({
    display: 'grid',
    width: '100vw',
    height: '100vh',
    position: 'relative',
    gridTemplateRows: 'min-content auto',
  }),
  main: css({
    display: 'flex',
    position: 'relative',
    placeItems: 'center',
    flexDirection: 'column',
    overflowY: 'scroll',
    overflowX: 'hidden',
  }),
}

export default function App() {
  return (
    <div css={styles.app}>
      <Header />

      <main css={styles.main}>
        <ContentHeight>
          <Routes>
            <Route path={paths.home} element={<Home />} />
            <Route path={paths.about} element={<About />} />
            <Route path={paths.contact} element={<Contact />} />
            <Route path={paths.policies} element={<Policies />} />
            <Route path={paths.salon} element={<Salon />} />
            <Route path={paths.spa} element={<Spa />} />
            <Route path={paths.talent} element={<Team />} />
          </Routes>
        </ContentHeight>
      </main>
    </div>
  )
}

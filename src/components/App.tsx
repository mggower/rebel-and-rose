import { About, Contact, Home, Policies, Salon, Spa, Team } from './Main'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { useLayoutEffect, useState } from 'react'
import { useResizeDetector } from 'react-resize-detector'
import { css } from '@emotion/react'
import Header from './Header'
import BookNow from './BookNow'
import paths from '../utils/routes'
import SocialMedia from './SocialMedia'
import Banner from './Banner'

const DEFAULT_CONTENT_TOP = 200

const styles = {
  container: css({
    display: 'grid',
    width: '100vw',
    minHeight: '100vh',
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
  const [top, setTop] = useState(DEFAULT_CONTENT_TOP)

  const { ref } = useResizeDetector<HTMLHeadingElement>({
    onResize: () => {
      if (ref.current) {
        setTop(ref.current.getBoundingClientRect().bottom)
      }
    },
  })

  useLayoutEffect(() => {
    if (ref.current) {
      setTop(ref.current.getBoundingClientRect().bottom)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <BrowserRouter>
      <div css={styles.container}>
        <SocialMedia />
        <Header ref={ref} />
        <Banner top={top} />
        <BookNow top={top} />

        <main css={styles.main}>
          <Routes>
            <Route path={paths.home} element={<Home />} />
            <Route path={paths.about} element={<About />} />
            <Route path={paths.contact} element={<Contact />} />
            <Route path={paths.policies} element={<Policies />} />
            <Route path={paths.salon} element={<Salon />} />
            <Route path={paths.spa} element={<Spa />} />
            <Route path={paths.team} element={<Team />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  )
}

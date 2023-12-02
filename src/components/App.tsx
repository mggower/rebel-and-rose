import { About, Contact, Home, Policies, Salon, Spa, Team } from './Main'
import { useEffect, useLayoutEffect, useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { useResizeDetector } from 'react-resize-detector'
import { pixel } from '@/utils'
import Header from './Header'
import BookNow from './BookNow'
import paths from '../utils/routes'

const DEFAULT_CONTENT_TOP = 200

function App() {
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

  useEffect(() => {
    console.log(top)
  }, [top])
  return (
    <BrowserRouter>
      <div className='grid min-h-screen w-screen grid-rows-[min-content_auto]'>
        <Header ref={ref} />
        <div
          className='fixed z-20 flex w-full justify-center bg-transparent'
          style={{ top: pixel(top) }}>
          <div className='contain-content h-6 rounded-sm bg-boho-folk-e bg-[length:auto_300px] bg-repeat shadow md:h-8' />
        </div>

        <BookNow top={top} />

        <main className='relative flex flex-col place-items-center'>
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

export default App

import { About, Contact, Home, Policies, Salon, Spa, Team } from './Main'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './Header'
import paths from '../utils/routes'

function App() {
  return (
    <BrowserRouter>
      <div className='grid min-h-screen w-screen grid-rows-[min-content_auto]'>
        <Header />
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

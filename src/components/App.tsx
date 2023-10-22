import { About, Contact, Home, Policies, Salon, Spa, Team } from './Main'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'
import paths from './routes'

function App() {
  return (
    <BrowserRouter>
      <div className='app'>
        <Header />
        <main>
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
        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App

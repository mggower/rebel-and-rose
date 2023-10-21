import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Policies from './Routes/Policies'
import Salon from './Routes/Salon'
import About from './Routes/About'
import Team from './Routes/Team'
import Home from './Routes/Home'
import Spa from './Routes/Spa'

const router = createBrowserRouter([
  { path: '/', element: <Home /> },
  { path: '/salon', element: <Salon /> },
  { path: '/spa', element: <Spa /> },
  { path: '/about', element: <About /> },
  { path: '/team', element: <Team /> },
  { path: '/policies', element: <Policies /> },
])

function App() {
  return (
    <div className='app'>
      <header>Rebel & Rose HEADER</header>
      <main>
        <RouterProvider router={router} />
      </main>
      <footer>Rebel & Rose FOOTER</footer>
    </div>
  )
}

export default App

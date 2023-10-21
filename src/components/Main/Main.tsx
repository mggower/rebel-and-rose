import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Policies from './Policies'
import Salon from './Salon'
import About from './About'
import Team from './Team'
import Home from './Home'
import Spa from './Spa'

const router = createBrowserRouter([
  { path: '/', element: <Home /> },
  { path: '/salon', element: <Salon /> },
  { path: '/spa', element: <Spa /> },
  { path: '/about', element: <About /> },
  { path: '/team', element: <Team /> },
  { path: '/policies', element: <Policies /> },
])

function Main() {
  return (
    <main>
      <RouterProvider router={router} />
    </main>
  )
}

export default Main

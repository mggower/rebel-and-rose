import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Policies from './Policies'
import Contact from './Contact'
import Salon from './Salon'
import About from './About'
import Team from './Team'
import Home from './Home'
import Spa from './Spa'
import routes from './routes'

const router = createBrowserRouter([
  { path: routes.home, element: <Home /> },
  { path: routes.salon, element: <Salon /> },
  { path: routes.spa, element: <Spa /> },
  { path: routes.about, element: <About /> },
  { path: routes.contact, element: <Contact /> },
  { path: routes.team, element: <Team /> },
  { path: routes.policies, element: <Policies /> },
])

function Main() {
  return (
    <main>
      <RouterProvider router={router} />
    </main>
  )
}

export default Main

import logo from '@/assets/images/rose_color.png'
import { css } from '@emotion/react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './Home'
import Salon from './Salon'
import Spa from './Spa'
import About from './About'
import Team from './Team'
import Policies from './Policies'

const styles = {
  container: css({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'flex-start',
    width: '100vw',
    height: '100vh',
    gap: '1rem',
    backgroundColor: '#f5f5f5',
    background: `no-repeat center/50% url(${logo})`,
    '@media (max-width: 786px)': {
      background: `no-repeat center/100% url(${logo})`,
    },
  }),
  header: css({
    fontStyle: 'italic',
  }),
}

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
    <div css={styles.container}>
      <RouterProvider router={router} />
    </div>
  )
}

export default App

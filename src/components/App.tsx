import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { css } from '@emotion/react'
import logo from '@/assets/images/rose_color.png'
import Home from './Routes/Home'
import Salon from './Routes/Salon'
import Spa from './Routes/Spa'
import About from './Routes/About'
import Team from './Routes/Team'
import Policies from './Routes/Policies'

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

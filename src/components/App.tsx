import logo from '@/assets/rose_color.png'
import { css } from '@emotion/react'

const styles = {
  container: css({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100vw',
    height: '100vh',
    gap: '1rem',
  }),
  header: css({
    fontStyle: 'italic',
  }),
}
function App() {
  return (
    <div css={styles.container}>
      <img src={logo} alt='logo' width={700} />
      <h1 css={styles.header}>Coming Soon</h1>
    </div>
  )
}

export default App

import logo from '@/assets/images/rose_color.png'
import { css } from '@emotion/react'

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
function App() {
  return (
    <div css={styles.container}>
      {/* <img src={logo} alt='logo' /> */}
      <h1 css={styles.header}>Coming Soon</h1>
    </div>
  )
}

export default App

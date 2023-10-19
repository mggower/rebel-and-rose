import logo from '@/assets/arched-logo.png'
import { css } from '@emotion/react'

const styles = {
  container: css({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100vw',
    height: '100vh',
  }),
}
function App() {
  return (
    <div css={styles.container}>
      <img src={logo} alt='logo' width={700} />
    </div>
  )
}

export default App

import { useScrollPosition } from '@/hooks'
import styles from './Home.module.scss'
import { createCssVariable } from '@/utils'

function Home() {
  const position = useScrollPosition((position) => Math.ceil((100 * position) / window.innerHeight))
  return (
    <div className={styles.container}>
      <div className={styles.image} style={createCssVariable('pos', `${position}%`)}>
        <div>
          <h5>celebrate what makes you</h5>
          <h1>Uniquely Beautiful</h1>
        </div>
      </div>
    </div>
  )
}

export default Home

import { useScrollPosition } from '@/hooks'
import { createCssVariable } from '@/utils'
import uniquelyBeautiful from '@/assets/images/content/uniquely-beautiful.png'
import styles from './Home.module.scss'

function Home() {
  const position = useScrollPosition((position) => Math.ceil((100 * position) / window.innerHeight))
  return (
    <div className={styles.container}>
      <div className={styles.image} style={createCssVariable('pos', `${position}%`)}>
        <div />
        <h5>celebrate what makes you</h5>
        <img src={uniquelyBeautiful} alt='uniquely beautiful' />
      </div>

      <div className={styles.content}>
        <div>
          <div className={styles.garden}></div>
        </div>
        <div className={styles.story}>
          <h5>Welcome to Rebel & Rose</h5>
          <p>
            We are a full service hair studio and spa featuring luxury services for all of your
            beauty needs. We strive to create an atmosphere where all are welcome and encouraged to
            celebrate what makes them uniquely beautiful.
          </p>

          <a>Our Story</a>
        </div>
      </div>
    </div>
  )
}

export default Home

import { useScrollPosition } from '@/hooks'
import { createCssVariable } from '@/utils'
import Scrapbook from '@/components/Shared/Scrapbook'
import assets from '@/utils/assets'
import styles from './Home.module.scss'

function Home() {
  const position = useScrollPosition((position) => Math.ceil((100 * position) / window.innerHeight))
  return (
    <div className={styles.container}>
      <div className={styles.splashImage} style={createCssVariable(['pos', `${position}%`])}>
        <div />
        <h5>celebrate what makes you</h5>
        <img src={assets.logos.uniquelyBeautiful} alt='uniquely beautiful' />
      </div>

      <div className={styles.ourStory}>
        <div className={styles.ourStoryImageContainer}>
          <div className={styles.ourStoryImage}>
            <img
              className={styles.invisible}
              src={assets.images.womanInGarden}
              alt='woman in garden'
            />
          </div>
        </div>

        <div className={styles.story}>
          <h5>Welcome to Rebel & Rose</h5>
          <p className={styles.details}>
            We are a full service hair studio and spa featuring luxury services for all of your
            beauty needs. We strive to create an atmosphere where all are welcome and encouraged to
            celebrate what makes them uniquely beautiful.
          </p>

          <a className={styles.storyLink}>Our Story</a>
        </div>
      </div>

      <div className={styles.salon}>
        <img src={assets.scrapbook.text3} alt='bg text' className={styles.text} />
        <img src={assets.images.hairCut} alt='hair cutting photo' className={styles.haircut} />
        <div className={styles.salonDetails}>
          <Scrapbook variant='two'>Salon</Scrapbook>
          <p className={styles.details}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis consectetur sequi
            deserunt corporis amet! Ex eum ipsa ipsum modi sit sed alias pariatur consequuntur, nemo
            error deserunt impedit expedita vero?
          </p>
          <div className={styles.flex}>
            <a className={styles.salonLink}>Our Talent</a>
            <a className={styles.salonBookNow}>Book Now</a>
          </div>
        </div>
      </div>

      <div className={styles.spa}>
        <div className={styles.spaDetails}>
          <Scrapbook variant='one'>Spa</Scrapbook>
          <p className={styles.details}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis consectetur sequi
            deserunt corporis amet! Ex eum ipsa ipsum modi sit sed alias pariatur consequuntur, nemo
            error deserunt impedit expedita vero?
          </p>
          <div className={styles.flex}>
            <a className={styles.spaLink}>Our Talent</a>
            <a className={styles.spaBookNow}>Book Now</a>
          </div>
        </div>
      </div>
      <div className={styles.gift}>
        <img src={assets.scrapbook.text1} className={styles.giftImage} />
        <div className={styles.giftDetails}>
          <Scrapbook variant='one' style={{ width: 400, height: 100 }}>
            Perfect Gift
          </Scrapbook>
        </div>
      </div>
    </div>
  )
}

export default Home

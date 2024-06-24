import Image from 'next/image'
import splashImage from '@/assets/images/splash.png'
import gardenImage from '@/assets/images/garden.jpg'
import haircutImage from '@/assets/images/haircut.jpg'
import facialSerumImage from '@/assets/images/serum.jpg'
import styles from './page.module.sass'
import LinkButton from '@/components/button/link-button'

export default function Home() {
  return (
    <main className={styles.container}>
      <section>
        <div className={styles.splash}>
          <Image
            fill
            priority
            src={splashImage}
            alt='splash image'
            sizes='(max-width: 800px), 50vw, 100vw'
          />
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.content}>
          <div className={styles.image}>
            <Image
              fill
              src={gardenImage}
              alt='woman in garden'
              sizes='(max-width: 600px), 40vw'
              style={{ objectPosition: 'right center' }}
            />
          </div>
          <div className={styles.textContent}>
            <h3>Welcome to Rebel & Rose</h3>

            <p>
              We are a full service hair studio and spa featuring luxury services for all of your
              beauty needs. We strive to create an atmosphere where all are welcome and encouraged
              to celebrate what makes them uniquely beautiful.
            </p>

            <div className={styles.links}>
              <LinkButton variant='secondary' href='/'>
                Our Story
              </LinkButton>
            </div>
          </div>
        </div>
      </section>
      <section className={styles.section}>
        <div className={styles.content}>
          <div className={styles.textContent}>
            <h3>The salon</h3>

            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quod consequuntur reiciendis
              eius veniam ullam, laborum nam esse et, doloribus similique facere expedita aliquid!
              Fuga reiciendis molestiae facere numquam veritatis iusto?
            </p>

            <div className={styles.links}>
              <LinkButton variant='tertiary' href='/'>
                talent
              </LinkButton>
              <LinkButton variant='secondary' href='/'>
                Services
              </LinkButton>
            </div>
          </div>

          <div className={styles.image}>
            <Image
              fill
              src={haircutImage}
              alt='haircut'
              sizes='(max-width: 600px), 40vw'
              style={{ objectPosition: 'left 60%' }}
            />
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.content}>
          <div className={styles.image}>
            <Image
              fill
              src={facialSerumImage}
              alt='facial serum'
              sizes='(max-width: 600px), 40vw'
            />
          </div>
          <div className={styles.textContent}>
            <h3>The spa</h3>

            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus quae maiores quia
              nemo culpa rerum velit sed modi cum commodi? Sint quia maiores minima ex dolorem amet
              adipisci explicabo officia.
            </p>

            <div className={styles.links}>
              <LinkButton variant='tertiary' href='/'>
                talent
              </LinkButton>
              <LinkButton variant='secondary' href='/'>
                Services
              </LinkButton>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

import Footer from '@/components/Footer'
import Hero from './Hero'
import TalentSection from './TalentSection'
import styles from './styles'

export default function Team() {
  return (
    <>
      <main css={styles.page}>
        <Hero />
        <TalentSection />
      </main>

      <Footer />
    </>
  )
}

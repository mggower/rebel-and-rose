import { Heading, Paragraph } from '@rebel/components'
import styles from './styles'
import TalentCard from './TalentCard'
import { staffProfiles } from './staff'

export default function TalentSection() {
  return (
    <section css={styles.roster}>
      <div css={styles.rosterInner}>
        <div css={styles.rosterHeading}>
          <Heading element='h2' fontSize='xl' tracking='wide'>
            Meet the Talent Collective
          </Heading>

          <Paragraph prose family='serif' tracking='wide'>
            Browse our stylists and estheticians to find the partner who matches your energy. Each profile
            highlights their role and story so you can book with confidence.
          </Paragraph>
        </div>

        <div css={styles.grid}>
          {staffProfiles.map((member) => (
            <TalentCard key={member.name} member={member} />
          ))}
        </div>
      </div>
    </section>
  )
}


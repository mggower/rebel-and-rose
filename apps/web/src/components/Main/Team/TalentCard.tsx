import { Heading, Paragraph, Typography } from '@rebel/components'
import styles from './styles'
import { FALLBACK_PORTRAIT, PLACEHOLDER_BIO, type StaffProfile } from './staff'

interface Props {
  member: StaffProfile
}

export function TalentCard({ member }: Props) {
  const { name, title, bio, portrait } = member

  return (
    <article css={styles.card}>
      <div css={styles.imageWrapper}>
        <img
          css={styles.image}
          src={portrait}
          alt={`${name} portrait`}
          loading='lazy'
          onError={(event) => {
            event.currentTarget.onerror = null
            event.currentTarget.src = FALLBACK_PORTRAIT
          }}
        />
      </div>

      <div css={styles.cardBody}>
        <Heading element='h3' fontSize='lg' css={styles.name}>
          {name}
        </Heading>

        <span css={styles.divider} aria-hidden />

        <Typography fontSize='sm' tracking='widest' css={styles.title}>
          {title}
        </Typography>

        <Paragraph prose family='serif' tracking='wide' css={styles.bio}>
          {bio?.trim() ? bio : PLACEHOLDER_BIO}
        </Paragraph>
      </div>
    </article>
  )
}

export default TalentCard


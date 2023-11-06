import { FACEBOOK_URL, INSTAGRAM_URL } from '@/utils/constants'
import { IconDefinition } from '@fortawesome/fontawesome-svg-core'
import Icon from '@/components/Shared/Icon'
import styles from './SocialMedia.module.scss'
import * as icons from '@/utils/icons'

interface SocialLinkProps {
  href?: string
  icon: IconDefinition
}

function SocialLink({ icon, href }: SocialLinkProps) {
  if (href === undefined) {
    return (
      <div className={styles.item}>
        <Icon icon={icon} />
      </div>
    )
  }
  return (
    <a href={href} target='_blank' rel='noreferrer' className={styles.item}>
      <Icon icon={icon} />
    </a>
  )
}

function SocialMedia() {
  return (
    <div className={styles.icons}>
      <SocialLink icon={icons.plus} />
      <SocialLink icon={icons.facebook} href={FACEBOOK_URL} />
      <SocialLink icon={icons.instagram} href={INSTAGRAM_URL} />
      <SocialLink icon={icons.tiktok} />
    </div>
  )
}

export default SocialMedia

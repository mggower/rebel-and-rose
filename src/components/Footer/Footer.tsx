import { css } from '@emotion/react'
import GiftCardAdvertisement from './GiftCardAdvertisement'
import FooterContent from './FooterContent'

interface Props {
  height?: number
}

const styles = {
  component: css({
    display: 'grid',
    width: '100vw',
    gridTemplateRows: 'auto min-content',
  }),
}

export default function Footer({ height }: Props) {
  return (
    <footer css={styles.component} style={{ height }}>
      <GiftCardAdvertisement />
      <FooterContent />
    </footer>
  )
}

import { css } from '@emotion/react'
import Footer from '@/components/Footer'
import Heading from '@/components/Shared/Heading'
import Paragraph from '@/components/Shared/Paragraph'
import library from '@/styles/library'
import theme from '@/styles/theme'

const styles = {
  container: css({
    display: 'flex',
    flexDirection: 'column',
    width: '100vw',
    gap: theme.spacing(12),
  }),
  component: css(library.flex.column, {
    gap: theme.spacing(4),
    margin: theme.spacing(12),
  }),
}
function Policies() {
  return (
    <div css={styles.container}>
      <div
        css={[library.contain, library.flex.column, library.flex.center]}
        style={{ alignSelf: 'center ' }}>
        <div css={styles.component}>
          <Heading fontSize='sm' weight='normal' style={{ alignSelf: 'center' }}>
            Privacy policy
          </Heading>
          <Paragraph prose>
            We may engage with third-party companies or individuals to facilitate various services,
            such as text marketing, credit card processing, scheduling software, shipping, data
            analysis and management, promotional services, etc. These entities, collectively
            referred to as Service Providers, are provided with the necessary information to carry
            out these services on behalf of our business.
          </Paragraph>
          <Paragraph prose>
            Rest assured, we do not disclose your personal information to third parties for their
            direct marketing endeavors. Additionally, we neither engage in the buying nor selling of
            text messaging opt-in information.
          </Paragraph>
        </div>
      </div>
      <Footer height={window.innerHeight - 200} />
    </div>
  )
}

export default Policies

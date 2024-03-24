import { ParallaxLayer } from '@react-spring/parallax'
import Paragraph from '@/components/Shared/Paragraph'
import Scrapbook from '@/components/Shared/Scrapbook'
import PageLinks from '../PageLinks'
import classes from '../styles'
import theme from '@/styles/theme'

export default function Salon() {
  return (
    <ParallaxLayer offset={3} factor={0.8} speed={theme.velocity.accelerate(1)}>
      <div css={classes.layer}>
        <div css={classes.content.wrapper}>
          <div css={classes.content.component}>
            <Scrapbook variant='one'>Spa</Scrapbook>

            <Paragraph prose family='serif' tracking='wider' css={classes.content.paragraph}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse perspiciatis fuga
              commodi cupiditate praesentium maiores. Pariatur, est numquam reprehenderit commodi
              quas, ipsam voluptates velit, doloremque explicabo ut quos saepe officiis.lorem.
            </Paragraph>

            <PageLinks />
          </div>
        </div>
      </div>
    </ParallaxLayer>
  )
}

import { ParallaxLayer } from '@react-spring/parallax'
import { BOOKER_URL } from '@/utils/constants'
import { accelerate } from '@/utils/parallax'
import Paragraph from '@/components/Shared/Paragraph'
import Scrapbook from '@/components/Shared/Scrapbook'
import Link from '@/components/Shared/Link'
import routes from '@/utils/routes'
import classes from '../styles'

export default function Salon() {
  return (
    <ParallaxLayer offset={2.1} factor={0.8} speed={accelerate(1)}>
      <div css={classes.layer}>
        <div css={classes.content.wrapper}>
          <div css={classes.content.component}>
            <Scrapbook variant='two'>Salon</Scrapbook>

            <Paragraph
              prose
              family='serif'
              tracking='wider'
              data-theme='dark'
              css={classes.content.paragraph}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse perspiciatis fuga
              commodi cupiditate praesentium maiores. Pariatur, est numquam reprehenderit commodi
              quas, ipsam voluptates velit, doloremque explicabo ut quos saepe officiis.lorem. Lorem
              ipsum dolor sit amet, consectetur adipisicing elit. Autem quod iusto iure suscipit.
              Hic mollitia illum delectus harum nihil consequuntur eos sed, fugiat laboriosam
              adipisci suscipit! Consequatur delectus dolor ex?
            </Paragraph>

            <div css={classes.content.links}>
              <Link
                uppercase
                underline
                linkTheme='dark'
                linkColor='tertiary'
                family='serif'
                to={routes.salon}>
                Our Talent
              </Link>
              <Link
                external
                uppercase
                underline
                linkTheme='dark'
                linkColor='secondary'
                family='serif'
                to={BOOKER_URL}>
                Book Now
              </Link>
            </div>
          </div>
        </div>
      </div>
    </ParallaxLayer>
  )
}

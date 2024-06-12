import { useBoxSizing } from '@/hooks/useBoxSizing'
import { HeaderFontSize } from '@/styles/typography'
import { useScreen } from '@/hooks/useScreen'
import { css } from '@emotion/react'
import Heading from './Heading'
import paper1 from '@/assets/textures/paper-1.png'
import paper2 from '@/assets/textures/paper-2.png'
import theme from '@/styles/theme'

interface Props {
  variant?: 'one' | 'two'
  children: string
  className?: string
}

const HEADER_PREFIX = '[the]'
const paper = theme.attr.create<'one' | 'two'>('paper')

const styles = {
  component: css({
    display: 'flex',
    placeItems: 'center',
    justifyContent: 'center',
    backgroundImage: theme.style.var('paper'),
    backgroundSize: theme.style.var('size', theme.utility.pixel(200)),
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center center',
    filter: `drop-shadow(3px 3px 6px ${theme.style.alpha(theme.palette.ink[800], 0.12)})`,
    [paper.eq('one')]: {
      '--paper': theme.style.url(paper1),
      '& > hgroup': {
        transform: `translateY(6px)`,
      },
    },
    [paper.eq('two')]: {
      '--paper': theme.style.url(paper2),
    },
  }),
  header: css({
    flexWrap: 'nowrap',
    whiteSpace: 'nowrap',
    display: 'inline-flex',
    alignItems: 'baseline',
    textTransform: 'uppercase',
    padding: theme.style.box(8, 12),
    boxSizing: 'border-box',
    gap: theme.spacing(2),
  }),
}

export default function Scrapbook({ variant = 'one', children, className }: Props) {
  const [ref, { width = 200 }] = useBoxSizing({ handleHeight: false })
  const fontSize = useScreen<HeaderFontSize>((desktop) => (desktop ? 'lg' : 'md'), [])

  return (
    <div
      css={styles.component}
      data-paper={variant}
      className={className}
      style={theme.utility.applyVars({ size: theme.utility.pixel(width) })}>
      <hgroup ref={ref} css={styles.header}>
        <Heading family='serif' tracking='extreme' weight='normal' fontSize='min'>
          {HEADER_PREFIX}
        </Heading>
        <Heading family='serif' fontSize={fontSize} tracking='widest' weight='normal'>
          {children}
        </Heading>
      </hgroup>
    </div>
  )
}

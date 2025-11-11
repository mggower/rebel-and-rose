import { css } from '@emotion/react'
import { library } from '@rebel/components'
import theme from '@rebel/theme'
import heroTexture from '@/assets/textures/paper-2.png'
import accentTexture from '@/assets/textures/tapestry-boquet-3.png'

export const styles = {
  page: css({
    width: '100%',
    backgroundColor: theme.palette.wheat[100],
  }),
  hero: css({
    display: 'flex',
    justifyContent: 'center',
    padding: theme.style.box(10, 4),
    backgroundColor: theme.palette.wheat[100],
    [theme.screen.md]: {
      padding: theme.style.box(14, 8, 12, 8),
    },
  }),
  heroInner: css(library.contain, {
    position: 'relative',
    overflow: 'hidden',
    borderRadius: theme.rounded.lg,
    padding: theme.style.box(8, 4, 10, 4),
    background: `linear-gradient(180deg, ${theme.style.alpha(theme.palette.wheat[200], 0.96)} 0%, ${
      theme.palette.wheat[100]
    } 60%, ${theme.palette.wheat[100]} 100%)`,
    boxShadow: theme.shadow.sm,
    [theme.screen.md]: {
      padding: theme.style.box(12, 8, 14, 8),
    },
    '::before': {
      content: '" "',
      position: 'absolute',
      inset: 0,
      backgroundImage: `url(${heroTexture})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      opacity: 0.18,
      mixBlendMode: 'multiply',
    },
    '::after': {
      content: '" "',
      position: 'absolute',
      top: '-25%',
      right: '-8%',
      width: '260px',
      height: '260px',
      backgroundImage: `url(${accentTexture})`,
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'contain',
      opacity: 0.35,
      transform: 'rotate(6deg)',
      [theme.screen.md]: {
        top: '-30%',
        right: '4%',
        width: '360px',
        height: '360px',
      },
    },
  }),
  heroContent: css(library.flex.column, library.flex.itemsCenter, {
    position: 'relative',
    zIndex: theme.zIndex.layer,
    textAlign: 'center',
    gap: theme.spacing(6),
    maxWidth: '780px',
    margin: '0 auto',
  }),
  heroBadge: css({
    display: 'inline-flex',
    padding: theme.style.box(1, 4),
    borderRadius: theme.rounded.lg,
    border: `1px solid ${theme.style.alpha(theme.palette.ink.main, 0.1)}`,
    backgroundColor: theme.style.alpha(theme.palette.wheat[100], 0.7),
    letterSpacing: theme.typography.tracking.widest,
    textTransform: 'uppercase',
  }),
  heroCopy: css({
    color: theme.palette.ink[600],
  }),
  roster: css({
    position: 'relative',
    display: 'flex',
    justifyContent: 'center',
    padding: theme.style.box(8, 4, 12, 4),
    [theme.screen.md]: {
      padding: theme.style.box(10, 8, 16, 8),
    },
  }),
  rosterInner: css(library.contain, {
    width: '100%',
  }),
  rosterHeading: css(library.flex.column, library.flex.itemsCenter, {
    gap: theme.spacing(3),
    textAlign: 'center',
    maxWidth: '720px',
    marginBottom: theme.spacing(8),
    margin: '0 auto',
    [theme.screen.md]: {
      marginBottom: theme.spacing(10),
    },
  }),
  grid: css({
    display: 'grid',
    width: '100%',
    gap: theme.spacing(5),
    gridTemplateColumns: 'repeat(1, minmax(0, 1fr))',
    [theme.screen.md]: {
      gap: theme.spacing(6),
      gridTemplateColumns: 'repeat(2, minmax(0, 1fr))',
    },
    [theme.screen.lg]: {
      gap: theme.spacing(8),
      gridTemplateColumns: 'repeat(3, minmax(0, 1fr))',
    },
  }),
  card: css(library.flex.column, {
    background: `linear-gradient(160deg, ${theme.style.alpha(theme.palette.wheat[100], 0.94)} 0%, ${
      theme.style.alpha(theme.palette.wheat[200], 0.9)
    } 100%)`,
    borderRadius: theme.rounded.md,
    boxShadow: theme.shadow.sm,
    overflow: 'hidden',
    minHeight: theme.spacing(64),
    transition: 'transform 200ms ease, box-shadow 200ms ease',
    position: 'relative',
    isolation: 'isolate',
    '&::after': {
      content: '" "',
      position: 'absolute',
      inset: 0,
      backgroundImage: `url(${heroTexture})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      opacity: 0.08,
      mixBlendMode: 'multiply',
      pointerEvents: 'none',
    },
    '&:hover': {
      transform: 'translateY(-6px)',
      boxShadow: theme.shadow.md,
    },
  }),
  imageWrapper: css({
    position: 'relative',
    width: '100%',
    paddingTop: '120%',
    overflow: 'hidden',
    isolation: 'isolate',
    '&::after': {
      content: '" "',
      position: 'absolute',
      inset: 0,
      background: `linear-gradient(180deg, transparent 60%, ${theme.style.alpha(theme.palette.ink[900], 0.45)})`,
      pointerEvents: 'none',
    },
  }),
  image: css({
    position: 'absolute',
    inset: 0,
    width: '100%',
    height: '100%',
    objectFit: 'cover',
  }),
  cardBody: css(library.flex.column, {
    position: 'relative',
    gap: theme.spacing(2),
    padding: theme.style.box(4, 4, 6, 4),
  }),
  name: css({
    color: theme.palette.ink.main,
  }),
  divider: css({
    display: 'inline-block',
    height: '1px',
    width: '36px',
    backgroundColor: theme.style.alpha(theme.palette.ink.main, 0.18),
  }),
  title: css({
    color: theme.palette.ink[600],
    textTransform: 'uppercase',
    letterSpacing: theme.typography.tracking.widest,
  }),
  bio: css({
    color: theme.palette.ink[700],
  }),
}

export default styles


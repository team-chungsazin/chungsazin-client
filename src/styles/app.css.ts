import { keyframes, style } from '@vanilla-extract/css'
import { media } from './media'
import { vars } from './tokens.css'

export const page = style({
  width: 'min(900px, 100%)',
  margin: '0 auto',
  padding: `${vars.space.xl} ${vars.space.md}`,
  '@media': {
    [media.md]: {
      padding: `${vars.space.xl} ${vars.space.lg}`,
    },
  },
})

export const progressBar = style({
  position: 'fixed',
  top: 0,
  left: 0,
  height: '2px',
  background: vars.color.accent,
  zIndex: 1100,
  transition: 'width 100ms ease-out',
})

export const pageHeader = style({
  position: 'sticky',
  top: 0,
  zIndex: 1000,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  textAlign: 'center',
  gap: vars.space.lg,
  padding: `${vars.space.lg} 0`,
  marginBottom: vars.space.xl,
  background: vars.color.background,
  transition: `transform ${vars.motion.medium} cubic-bezier(0.4, 0, 0.2, 1), background-color ${vars.motion.medium} ease`,
  '@media': {
    [media.md]: {
      flexDirection: 'row',
      alignItems: 'flex-end',
      justifyContent: 'space-between',
      textAlign: 'left',
    },
  },
})

export const pageHeaderHidden = style({
  transform: 'translateY(-100%)',
})

export const titleGroup = style({
  display: 'flex',
  flexDirection: 'column',
  gap: vars.space.xs,
})

export const subtitle = style({
  fontFamily: vars.font.poem,
  fontSize: '1.25rem',
  color: vars.color.muted,
  margin: 0,
  fontStyle: 'italic',
})

export const headerNav = style({
  display: 'flex',
  gap: vars.space.md,
})

export const navLink = style({
  fontSize: '0.9rem',
  fontWeight: 500,
  textTransform: 'uppercase',
  letterSpacing: '0.1em',
  color: vars.color.muted,
  transition: `color ${vars.motion.fast} ease`,
  selectors: {
    '&:hover': {
      color: vars.color.accent,
    },
  },
})

export const heroSection = style({
  padding: `${vars.space.xl} 0`,
  borderBottom: `1px solid ${vars.color.border}`,
  marginBottom: vars.space.xl,
})

export const surfaceCard = style({
  background: vars.color.surface,
  border: `1px solid ${vars.color.border}`,
  borderRadius: vars.radius.md,
  padding: vars.space.lg,
  transition: `all ${vars.motion.medium} ease`,
  selectors: {
    '&:hover': {
      transform: 'translateY(-4px)',
      boxShadow: '0 12px 24px -10px rgba(0, 0, 0, 0.05)',
      borderColor: vars.color.accent,
    },
  },
})

export const workList = style({
  listStyle: 'none',
  padding: 0,
  margin: 0,
  display: 'grid',
  gap: vars.space.lg,
  gridTemplateColumns: '1fr',
  '@media': {
    [media.md]: {
      gridTemplateColumns: 'repeat(2, 1fr)',
    },
  },
})

export const workListCard = style({
  display: 'flex',
  flexDirection: 'column',
  gap: vars.space.md,
  textDecoration: 'none',
  color: 'inherit',
})

const imagePulse = keyframes({
  '0%': { filter: 'blur(10px) brightness(0.8)' },
  '100%': { filter: 'blur(0) brightness(1)' },
})

export const workCoverImage = style({
  width: '100%',
  aspectRatio: '16 / 10',
  objectFit: 'cover',
  borderRadius: vars.radius.md,
  border: `1px solid ${vars.color.border}`,
  backgroundColor: vars.color.border,
  animation: `${imagePulse} ${vars.motion.slow} ease-out forwards`,
  transition: `filter ${vars.motion.medium} ease`,
  selectors: {
    [`${workListCard}:hover &`]: {
      filter: 'brightness(0.95)',
    },
  },
})

export const workDetailLayout = style({
  display: 'grid',
  gap: vars.space.xl,
  '@media': {
    [media.md]: {
      gridTemplateColumns: 'minmax(300px, 1fr) minmax(0, 1.5fr)',
      alignItems: 'start',
    },
  },
})

export const ctaRow = style({
  display: 'flex',
  gap: vars.space.sm,
  marginTop: vars.space.lg,
})

export const poemBlock = style({
  fontFamily: vars.font.poem,
  fontSize: vars.text.poem,
  lineHeight: 2.2,
  color: vars.color.foreground,
  display: 'grid',
  gap: vars.space.xl,
})

export const poemStanza = style({
  margin: 0,
  whiteSpace: 'pre-wrap',
  opacity: 0,
  transform: 'translateY(20px)',
  transition: `opacity ${vars.motion.slow} ease-out, transform ${vars.motion.slow} ease-out`,
})

export const stanzaVisible = style({
  opacity: 1,
  transform: 'translateY(0)',
})

export const pageNotFoundTitle = style({
  fontSize: '4rem',
  fontFamily: vars.font.display,
  marginBottom: vars.space.md,
})

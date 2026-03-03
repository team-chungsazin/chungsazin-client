import { style } from '@vanilla-extract/css'
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

export const pageHeader = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  textAlign: 'center',
  gap: vars.space.lg,
  marginBottom: vars.space.xl,
  '@media': {
    [media.md]: {
      flexDirection: 'row',
      alignItems: 'flex-end',
      justifyContent: 'space-between',
      textAlign: 'left',
    },
  },
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
  transition: `transform ${vars.motion.medium} ease, box-shadow ${vars.motion.medium} ease`,
  selectors: {
    '&:hover': {
      transform: 'translateY(-4px)',
      boxShadow: '0 12px 24px -10px rgba(0, 0, 0, 0.05)',
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

export const workCoverImage = style({
  width: '100%',
  aspectRatio: '16 / 10',
  objectFit: 'cover',
  borderRadius: vars.radius.md,
  border: `1px solid ${vars.color.border}`,
  backgroundColor: '#f0f0f0',
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
  lineHeight: 2,
  color: vars.color.foreground,
  display: 'grid',
  gap: vars.space.lg,
})

export const poemStanza = style({
  margin: 0,
  whiteSpace: 'pre-wrap',
})

export const pageNotFoundTitle = style({
  fontSize: '4rem',
  fontFamily: vars.font.display,
  marginBottom: vars.space.md,
})

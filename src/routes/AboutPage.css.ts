import { style } from '@vanilla-extract/css'
import { media } from '../styles/media'
import { vars } from '../styles/tokens.css'

export const aboutContent = style({
  display: 'flex',
  flexDirection: 'column',
  gap: vars.space.xl,
})

export const introSection = style({
  color: 'inherit',
  textAlign: 'left',
  display: 'block',
  width: '100%',
  cursor: 'pointer',
  textDecoration: 'none',
  transition: `transform ${vars.motion.medium} ease`,
  ':hover': {
    transform: 'translateY(-4px)',
  },
})

export const heroImage = style({
  width: '100%',
  height: '300px',
  objectFit: 'cover',
  borderRadius: vars.radius.md,
  marginBottom: vars.space.md,
  '@media': {
    [media.md]: {
      height: '400px',
    },
  },
})

export const teamGrid = style({
  columnCount: 2,
  columnGap: vars.space.md,
  '@media': {
    [media.md]: {
      columnCount: 3,
      columnGap: vars.space.lg,
    },
  },
})

export const memberTile = style({
  display: 'inline-block',
  width: '100%',
  breakInside: 'avoid',
  marginBottom: vars.space.md,
  cursor: 'pointer',
  textDecoration: 'none',
  color: 'inherit',
  transition: `transform ${vars.motion.medium} ease`,
  ':hover': {
    transform: 'translateY(-4px)',
  },
})

export const tileImageWrapper = style({
  position: 'relative',
  width: '100%',
  borderRadius: vars.radius.md,
  overflow: 'hidden',
  aspectRatio: '3 / 4',
  backgroundColor: vars.color.border,
})

export const tileImage = style({
  width: '100%',
  height: '100%',
  objectFit: 'cover',
})

export const tileSeparator = style({
  position: 'absolute',
  bottom: 0,
  left: 0,
  width: '100%',
  height: '7px',
  backgroundColor: vars.color.background,
  opacity: 0.8,
})

export const memberInfo = style({
  padding: `${vars.space.xs} 0`,
})

export const projectDetailContainer = style({
  display: 'flex',
  flexDirection: 'column',
  gap: vars.space.xl,
})

export const projectSection = style({
  display: 'grid',
  gap: vars.space.lg,
  '@media': {
    [media.md]: {
      gridTemplateColumns: '1fr 1fr',
      alignItems: 'center',
    },
  },
})

export const sectionImage = style({
  width: '100%',
  aspectRatio: '4 / 3',
  objectFit: 'cover',
  borderRadius: vars.radius.md,
})

export const memberDetailContainer = style({
  display: 'flex',
  flexDirection: 'column',
  gap: vars.space.xl,
})

export const heroCollage = style({
  display: 'grid',
  gridTemplateColumns: '1fr 2fr 1fr',
  gap: vars.space.sm,
  height: '250px',
  '@media': {
    [media.md]: {
      height: '400px',
      gap: vars.space.md,
    },
  },
})

export const collageImage = style({
  width: '100%',
  height: '100%',
  objectFit: 'cover',
  borderRadius: vars.radius.md,
})

export const qnaGrid = style({
  display: 'grid',
  gap: vars.space.md,
  '@media': {
    [media.md]: {
      gridTemplateColumns: '1fr 1fr',
    },
  },
})

export const qnaCard = style({
  background: vars.color.surface,
  padding: vars.space.lg,
  borderRadius: vars.radius.md,
  border: `1px solid ${vars.color.border}`,
  display: 'flex',
  flexDirection: 'column',
  gap: vars.space.md,
})

export const backButton = style({
  cursor: 'pointer',
  padding: `${vars.space.xs} ${vars.space.sm}`,
  borderRadius: vars.radius.md,
  border: `1px solid ${vars.color.border}`,
  background: 'transparent',
  color: vars.color.muted,
  fontSize: '0.9rem',
  marginBottom: vars.space.md,
  width: 'fit-content',
  transition: 'all 0.2s ease',
  ':hover': {
    borderColor: vars.color.accent,
    color: vars.color.accent,
  },
})

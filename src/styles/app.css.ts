import { style } from '@vanilla-extract/css'
import { vars } from './tokens.css'

export const page = style({
  width: 'min(760px, 100%)',
  margin: '0 auto',
  padding: `${vars.space.xl} ${vars.space.md}`,
})

export const subtitle = style({
  color: vars.color.muted,
  margin: 0,
  marginTop: vars.space.xs,
})

export const pageHeader = style({
  display: 'flex',
  alignItems: 'flex-start',
  justifyContent: 'space-between',
  gap: vars.space.md,
})

export const headerNav = style({
  display: 'flex',
  flexWrap: 'wrap',
  gap: vars.space.sm,
  justifyContent: 'flex-end',
})

export const navLink = style({
  textDecoration: 'none',
  padding: `${vars.space.xxs} ${vars.space.xs}`,
  borderRadius: vars.radius.md,
  selectors: {
    '&:hover': {
      backgroundColor: vars.color.surface,
    },
  },
})

export const workList = style({
  listStyle: 'none',
  padding: 0,
  margin: `${vars.space.lg} 0 0`,
  display: 'grid',
  gap: vars.space.md,
  gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
})

export const surfaceCard = style({
  background: vars.color.surface,
  border: `1px solid ${vars.color.border}`,
  borderRadius: vars.radius.md,
  padding: vars.space.md,
})

export const workListCard = style({
  display: 'grid',
  gap: vars.space.sm,
})

export const workCoverImage = style({
  width: '100%',
  aspectRatio: '4 / 3',
  objectFit: 'cover',
  borderRadius: vars.radius.md,
  border: `1px solid ${vars.color.border}`,
  backgroundColor: vars.color.background,
})

export const ctaRow = style({
  display: 'flex',
  flexWrap: 'wrap',
  gap: vars.space.xs,
  marginTop: vars.space.md,
})

export const poemBlock = style({
  display: 'grid',
  gap: vars.space.md,
})

export const poemStanza = style({
  margin: 0,
  whiteSpace: 'pre-wrap',
})

export const pageNotFoundTitle = style({
  marginBottom: 0,
})

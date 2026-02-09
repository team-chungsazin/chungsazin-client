import { style } from '@vanilla-extract/css'
import { vars } from './tokens.css'

export const page = style({
  width: 'min(760px, 100%)',
  margin: '0 auto',
  padding: `${vars.space.xl} ${vars.space.md}`,
})

export const subtitle = style({
  color: vars.color.muted,
  marginTop: vars.space.xs,
})

export const workList = style({
  listStyle: 'none',
  padding: 0,
  margin: `${vars.space.lg} 0 0`,
  display: 'grid',
  gap: vars.space.sm,
})

export const surfaceCard = style({
  background: vars.color.surface,
  border: `1px solid ${vars.color.border}`,
  borderRadius: vars.radius.md,
  padding: vars.space.md,
})

export const pageNotFoundTitle = style({
  marginBottom: 0,
})

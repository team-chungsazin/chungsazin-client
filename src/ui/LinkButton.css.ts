import { style } from '@vanilla-extract/css'
import { vars } from '@/styles/tokens.css'

export const linkButton = style({
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  padding: `${vars.space.sm} ${vars.space.lg}`,
  borderRadius: vars.radius.md,
  textDecoration: 'none',
  border: `1px solid ${vars.color.border}`,
  backgroundColor: vars.color.surface,
  color: vars.color.foreground,
  fontFamily: vars.font.ui,
  fontSize: '0.9rem',
  fontWeight: 500,
  transition: `all ${vars.motion.medium} ease`,
  cursor: 'pointer',
  selectors: {
    '&:hover': {
      borderColor: vars.color.accent,
      backgroundColor: vars.color.accent,
      color: vars.color.surface,
      transform: 'translateY(-1px)',
    },
    '&:active': {
      transform: 'translateY(0)',
    },
  },
})

import { style } from '@vanilla-extract/css'
import { vars } from '@/styles/tokens.css'

export const linkButton = style({
  display: 'inline-block',
  padding: `${vars.space.xs} ${vars.space.md}`,
  borderRadius: vars.radius.md,
  textDecoration: 'none',
  border: `1px solid ${vars.color.border}`,
  backgroundColor: vars.color.surface,
  color: vars.color.accent,
  fontFamily: vars.font.ui,
  fontSize: vars.text.ui,
  selectors: {
    '&:hover': {
      borderColor: vars.color.accent,
    },
  },
})

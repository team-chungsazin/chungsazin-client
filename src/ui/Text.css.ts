import { styleVariants } from '@vanilla-extract/css'
import { vars } from '@/styles/tokens.css'

export const textRole = styleVariants({
  display: {
    fontSize: vars.text.display,
    lineHeight: 1.1,
    fontFamily: vars.font.display,
    fontWeight: 800,
    letterSpacing: '-0.03em',
  },
  title: {
    fontSize: vars.text.title,
    lineHeight: 1.3,
    fontFamily: vars.font.poem,
    fontWeight: 700,
  },
  poem: {
    fontSize: vars.text.poem,
    lineHeight: 2,
    fontFamily: vars.font.poem,
  },
  caption: {
    fontSize: vars.text.caption,
    lineHeight: 1.6,
    fontFamily: vars.font.ui,
    color: vars.color.muted,
  },
  ui: {
    fontSize: vars.text.ui,
    lineHeight: 1.6,
    fontFamily: vars.font.ui,
  },
})

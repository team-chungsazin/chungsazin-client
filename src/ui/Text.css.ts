import { styleVariants } from '@vanilla-extract/css'
import { vars } from '@/styles/tokens.css'

export const textRole = styleVariants({
  display: {
    fontSize: vars.text.display,
    lineHeight: 1.2,
    fontFamily: vars.font.ui,
  },
  title: {
    fontSize: vars.text.title,
    lineHeight: 1.3,
    fontFamily: vars.font.ui,
  },
  poem: {
    fontSize: vars.text.poem,
    lineHeight: 1.8,
    fontFamily: vars.font.poem,
  },
  caption: {
    fontSize: vars.text.caption,
    lineHeight: 1.4,
    fontFamily: vars.font.ui,
  },
  ui: {
    fontSize: vars.text.ui,
    lineHeight: 1.5,
    fontFamily: vars.font.ui,
  },
})

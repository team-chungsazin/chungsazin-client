import { globalStyle } from '@vanilla-extract/css'
import { vars } from './tokens.css'

globalStyle(':root', {
  fontFamily: vars.font.ui,
  color: vars.color.foreground,
  backgroundColor: vars.color.background,
  textRendering: 'optimizeLegibility',
  WebkitFontSmoothing: 'antialiased',
})

globalStyle('*, *::before, *::after', {
  boxSizing: 'border-box',
})

globalStyle('body', {
  margin: 0,
  minWidth: '320px',
  minHeight: '100vh',
  fontSize: vars.text.ui,
  lineHeight: 1.5,
})

globalStyle('a', {
  color: vars.color.accent,
  transition: `color ${vars.motion.fast} ease`,
})

globalStyle('a:focus-visible, button:focus-visible', {
  outline: `2px solid ${vars.color.focus}`,
  outlineOffset: '2px',
})

globalStyle('*', {
  '@media': {
    '(prefers-reduced-motion: reduce)': {
      animationDuration: '0.01ms !important',
      animationIterationCount: '1 !important',
      transitionDuration: '0.01ms !important',
      scrollBehavior: 'auto',
    },
  },
})

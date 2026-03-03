import { globalStyle } from '@vanilla-extract/css'
import { vars } from './tokens.css'

globalStyle(':root', {
  fontFamily: vars.font.ui,
  color: vars.color.foreground,
  backgroundColor: vars.color.background,
  textRendering: 'optimizeLegibility',
  WebkitFontSmoothing: 'antialiased',
  MozOsxFontSmoothing: 'grayscale',
})

globalStyle('*, *::before, *::after', {
  boxSizing: 'border-box',
})

globalStyle('body', {
  margin: 0,
  minWidth: '320px',
  minHeight: '100vh',
  fontSize: vars.text.ui,
  lineHeight: 1.6,
  letterSpacing: '-0.01em',
})

globalStyle('a', {
  color: 'inherit',
  textDecoration: 'none',
  transition: `all ${vars.motion.medium} ease`,
})

globalStyle('a:focus-visible, button:focus-visible', {
  outline: `2px solid ${vars.color.focus}`,
  outlineOffset: '2px',
})

globalStyle('h1, h2, h3, h4, h5, h6', {
  margin: 0,
  fontWeight: 700,
  lineHeight: 1.2,
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

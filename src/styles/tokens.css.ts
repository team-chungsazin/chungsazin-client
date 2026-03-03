import { createGlobalTheme } from '@vanilla-extract/css'

export const vars = createGlobalTheme(':root', {
  color: {
    background: '#f4f4f2',
    foreground: '#121212',
    muted: '#5b5b58',
    surface: '#ffffff',
    border: '#d9d9d3',
    accent: '#1f4e79',
    focus: '#2359a8',
  },
  font: {
    ui: '"Helvetica Neue", Helvetica, Arial, sans-serif',
    poem: '"Iowan Old Style", "Times New Roman", Times, serif',
  },
  text: {
    display: '2rem',
    title: '1.5rem',
    poem: '1.125rem',
    caption: '0.875rem',
    ui: '1rem',
  },
  space: {
    xxs: '4px',
    xs: '8px',
    sm: '12px',
    md: '16px',
    lg: '24px',
    xl: '48px',
  },
  radius: {
    md: '10px',
  },
  motion: {
    fast: '120ms',
    medium: '220ms',
  },
})

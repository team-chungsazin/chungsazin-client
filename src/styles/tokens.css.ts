import { createGlobalTheme, createThemeContract } from '@vanilla-extract/css'

export const themeVars = createThemeContract({
  color: {
    background: null,
    foreground: null,
    muted: null,
    surface: null,
    border: null,
    accent: null,
    focus: null,
  },
})

export const vars = {
  ...createGlobalTheme(':root', {
    font: {
      ui: 'Pretendard, -apple-system, BlinkMacSystemFont, system-ui, sans-serif',
      poem: '"Nanum Myeongjo", "Iowan Old Style", "Times New Roman", serif',
      display: '"Playfair Display", "Nanum Myeongjo", serif',
    },
    text: {
      display: '3.5rem',
      title: '1.75rem',
      poem: '1.125rem',
      caption: '0.9rem',
      ui: '1rem',
    },
    space: {
      xxs: '4px',
      xs: '8px',
      sm: '12px',
      md: '20px',
      lg: '32px',
      xl: '64px',
    },
    radius: {
      md: '12px',
    },
    motion: {
      fast: '150ms',
      medium: '300ms',
      slow: '500ms',
    },
  }),
  color: themeVars.color,
}

createGlobalTheme(':root', themeVars, {
  color: {
    background: '#fcfbf8',
    foreground: '#212121',
    muted: '#6b7280',
    surface: '#ffffff',
    border: '#e5e7eb',
    accent: '#1e3a8a',
    focus: '#3b82f6',
  },
})

createGlobalTheme(':root @media (prefers-color-scheme: dark)', themeVars, {
  color: {
    background: '#121212',
    foreground: '#e5e7eb',
    muted: '#9ca3af',
    surface: '#1e1e1e',
    border: '#2d2d2d',
    accent: '#60a5fa',
    focus: '#3b82f6',
  },
})

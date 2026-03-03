import { style } from '@vanilla-extract/css'

export const hubContainer = style({
  backgroundColor: '#f9f9f9',
  color: '#0a0a0a',
  minHeight: '100vh',
  padding: '6rem 2rem',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  fontFamily: 'serif',
})

export const header = style({
  marginBottom: '6rem',
  textAlign: 'center',
})

export const title = style({
  fontSize: '0.8rem',
  fontWeight: 400,
  letterSpacing: '0.4em',
  textTransform: 'uppercase',
  marginBottom: '1rem',
  opacity: 0.5,
})

export const welcomeMsg = style({
  fontSize: '1.8rem',
  fontWeight: 300,
  lineHeight: '1.4',
  wordBreak: 'keep-all',
  maxWidth: '500px',
})

export const sectionList = style({
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
  maxWidth: '600px',
  gap: 0,
})

export const sectionRow = style({
  display: 'flex',
  alignItems: 'center',
  width: '100%',
  color: 'inherit',
  textDecoration: 'none',
  padding: '2.5rem 0',
  borderBottom: '1px solid rgba(0,0,0,0.05)',
  cursor: 'pointer',
  transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
  position: 'relative',
  selectors: {
    '&:hover': {
      paddingLeft: '1.5rem',
      backgroundColor: 'rgba(74, 222, 128, 0.03)',
    },
  },
})

export const sectionLabel = style({
  width: '120px',
  fontSize: '0.8rem',
  fontWeight: 600,
  letterSpacing: '0.2em',
  opacity: 0.4,
})

export const progressBarContainer = style({
  flexGrow: 1,
  height: '1px',
  backgroundColor: 'rgba(0,0,0,0.05)',
  margin: '0 2rem',
  position: 'relative',
  overflow: 'hidden',
})

export const progressBarFill = style({
  height: '100%',
  backgroundColor: '#16a34a', // Emerald green line
  position: 'absolute',
  left: 0,
  top: 0,
  transition: 'width 1s cubic-bezier(0.16, 1, 0.3, 1)',
})

export const arrowIcon = style({
  fontSize: '1rem',
  opacity: 0.2,
  transition: 'transform 0.4s ease',
  selectors: {
    [`${sectionRow}:hover &`]: {
      transform: 'translateX(10px)',
      opacity: 1,
      color: '#16a34a',
    },
  },
})

export const purchaseCta = style({
  marginTop: '8rem',
  padding: '1rem 3rem',
  backgroundColor: '#0a0a0a',
  color: '#fff',
  textAlign: 'center',
  borderRadius: '40px',
  fontWeight: 400,
  textDecoration: 'none',
  fontSize: '0.9rem',
  letterSpacing: '0.1em',
  transition: 'all 0.3s ease',
  selectors: {
    '&:hover': {
      transform: 'translateY(-5px)',
      boxShadow: '0 20px 40px rgba(0,0,0,0.1)',
      backgroundColor: '#16a34a',
    },
  },
})

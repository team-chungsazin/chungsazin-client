import { style } from '@vanilla-extract/css'

export const container = style({
  backgroundColor: '#fff',
  color: '#000',
  minHeight: '100vh',
  padding: '2rem',
  display: 'flex',
  flexDirection: 'column',
})

export const topDivider = style({
  width: '100%',
  height: '1px',
  backgroundColor: '#eee',
  marginBottom: '4rem',
})

export const instruction = style({
  fontSize: '0.9rem',
  opacity: 0.6,
  marginBottom: '0.5rem',
})

export const question = style({
  fontSize: '1.5rem',
  fontWeight: 'bold',
  lineHeight: '1.4',
  marginBottom: '5rem',
})

export const inputContainer = style({
  position: 'relative',
  display: 'flex',
  alignItems: 'center',
  backgroundColor: '#f5f5f5',
  padding: '0 1.5rem',
  borderRadius: '30px',
  minHeight: '60px',
})

export const inputField = style({
  flexGrow: 1,
  backgroundColor: 'transparent',
  border: 'none',
  fontSize: '1.1rem',
  outline: 'none',
  padding: '1.2rem 0',
})

export const submitButton = style({
  width: '40px',
  height: '40px',
  borderRadius: '50%',
  backgroundColor: '#121212',
  color: '#fff',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  cursor: 'pointer',
  border: 'none',
  transition: 'opacity 0.2s',
  ':disabled': {
    opacity: 0.2,
    cursor: 'not-allowed',
  },
})

export const chevron = style({
  fontSize: '1.2rem',
  transform: 'translateY(-2px)',
})

import { keyframes, style } from '@vanilla-extract/css'

const twinkle = keyframes({
  '0%, 100%': { opacity: 0.3, transform: 'scale(1)' },
  '50%': { opacity: 0.8, transform: 'scale(1.2)' },
})

const orbit = keyframes({
  '0%': { transform: 'rotate(0deg) translateX(10px) rotate(0deg)' },
  '100%': { transform: 'rotate(360deg) translateX(10px) rotate(-360deg)' },
})

export const container = style({
  backgroundColor: '#050505',
  color: '#f5f5f5',
  minHeight: '100vh',
  padding: '4rem 2rem',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  position: 'relative',
  overflow: 'hidden',
  fontFamily: 'serif',
})

export const starBg = style({
  position: 'absolute',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  zIndex: 0,
  pointerEvents: 'none',
})

export const cloud = style({
  display: 'flex',
  flexWrap: 'wrap',
  gap: '2rem',
  justifyContent: 'center',
  maxWidth: '700px',
  marginBottom: '6rem',
  zIndex: 1,
})

export const keywordChip = style({
  padding: '1rem 2rem',
  backgroundColor: 'rgba(255,255,255,0.02)',
  border: '1px solid rgba(255,255,255,0.05)',
  borderRadius: '40px',
  fontSize: '1.1rem',
  cursor: 'pointer',
  transition: 'all 0.6s cubic-bezier(0.16, 1, 0.3, 1)',
  animation: `${orbit} 10s linear infinite`,
  zIndex: 1,
  selectors: {
    '&:hover': {
      backgroundColor: 'rgba(255,255,255,0.1)',
      borderColor: '#4ade80',
      transform: 'translateY(-10px) scale(1.1)',
      boxShadow: '0 20px 40px rgba(0,0,0,0.5)',
    },
  },
})

export const selectedChip = style({
  backgroundColor: '#4ade80',
  color: '#050505',
  borderColor: '#4ade80',
  fontWeight: 'bold',
  transform: 'scale(1.2) translateY(-15px) !important',
  boxShadow: '0 0 50px rgba(74, 222, 128, 0.4)',
  animation: 'none',
})

export const instructionText = style({
  marginBottom: '5rem',
  fontSize: '1.4rem',
  fontWeight: 200,
  opacity: 0.7,
  zIndex: 1,
  textAlign: 'center',
  maxWidth: '400px',
  lineHeight: '1.6',
})

export const nextArrow = style({
  position: 'absolute',
  bottom: '4rem',
  right: '4rem',
  fontSize: '2.5rem',
  cursor: 'pointer',
  background: 'none',
  border: 'none',
  padding: '0.5rem',
  color: '#fff',
  transition: 'all 0.5s ease',
  zIndex: 2,
  selectors: {
    '&:hover:not(:disabled)': {
      transform: 'translateX(15px)',
      color: '#4ade80',
    },
    '&:disabled': {
      opacity: 0.05,
      cursor: 'not-allowed',
    },
  },
})

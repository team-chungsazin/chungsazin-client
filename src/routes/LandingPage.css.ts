import { globalKeyframes, keyframes, style } from '@vanilla-extract/css'

const breathe = keyframes({
  '0%, 100%': { transform: 'scale(1)', opacity: 0.6, filter: 'blur(20px)' },
  '50%': { transform: 'scale(1.2)', opacity: 0.9, filter: 'blur(30px)' },
})

const fadeInUp = keyframes({
  '0%': { opacity: 0, transform: 'translateY(40px)' },
  '100%': { opacity: 1, transform: 'translateY(0)' },
})

export const landingContainer = style({
  backgroundColor: '#050505', // Deep abyss black
  backgroundImage: 'radial-gradient(circle at 50% 50%, #0a0a0a 0%, #050505 100%)',
  color: '#f5f5f5',
  minHeight: '100vh',
  scrollSnapType: 'y mandatory',
  overflowY: 'auto',
  height: '100vh',
  fontFamily: 'serif', // Default to serif for poetic feel
})

export const scene = style({
  height: '100vh',
  scrollSnapAlign: 'start',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  padding: '0 10vw',
  textAlign: 'center',
  position: 'relative',
  animation: `${fadeInUp} 1.5s cubic-bezier(0.16, 1, 0.3, 1) forwards`,
})

export const starGlow = style({
  width: '180px',
  height: '180px',
  borderRadius: '50%',
  backgroundColor: '#4ade80', // Emerald green
  filter: 'blur(25px)',
  opacity: 0.7,
  marginBottom: '3rem',
  animation: `${breathe} 6s ease-in-out infinite`,
})

export const poeticSentence = style({
  fontSize: '2.8rem',
  lineHeight: '1.4',
  fontWeight: 300,
  letterSpacing: '-0.02em',
  wordBreak: 'keep-all',
  maxWidth: '800px',
})

export const highlightCard = style({
  backgroundColor: 'rgba(255, 255, 255, 0.95)',
  backdropFilter: 'blur(10px)',
  color: '#0a0a0a',
  padding: '4rem',
  borderRadius: '2px', // Sharper, more modern edge
  maxWidth: '500px',
  lineHeight: '2',
  textAlign: 'center',
  boxShadow: '0 30px 60px rgba(0,0,0,0.5)',
})

export const greenHighlight = style({
  color: '#16a34a',
  fontWeight: 'bold',
  position: 'relative',
  ':after': {
    content: '""',
    position: 'absolute',
    bottom: '2px',
    left: 0,
    width: '100%',
    height: '6px',
    backgroundColor: 'rgba(74, 222, 128, 0.2)',
    zIndex: -1,
  },
})

export const nameInputContainer = style({
  marginTop: '4rem',
  display: 'flex',
  flexDirection: 'column',
  gap: '1.5rem',
  width: '100%',
  maxWidth: '350px',
})

export const inputField = style({
  backgroundColor: 'transparent',
  border: 'none',
  borderBottom: `1px solid rgba(255, 255, 255, 0.1)`,
  color: '#fff',
  padding: '1rem 0',
  fontSize: '1.5rem',
  textAlign: 'center',
  outline: 'none',
  fontFamily: 'inherit',
  transition: 'all 0.5s ease',
  selectors: {
    '&:focus': {
      borderColor: '#4ade80',
      letterSpacing: '0.1em',
    },
  },
})

export const startButton = style({
  marginTop: '2rem',
  padding: '1.2rem',
  backgroundColor: 'transparent',
  color: '#fff',
  border: '1px solid rgba(255, 255, 255, 0.2)',
  borderRadius: '30px',
  fontSize: '1rem',
  letterSpacing: '0.2em',
  textTransform: 'uppercase',
  cursor: 'pointer',
  transition: 'all 0.4s ease',
  selectors: {
    '&:hover:not(:disabled)': {
      backgroundColor: '#fff',
      color: '#000',
      borderColor: '#fff',
    },
    '&:disabled': {
      opacity: 0.1,
      cursor: 'not-allowed',
    },
  },
})

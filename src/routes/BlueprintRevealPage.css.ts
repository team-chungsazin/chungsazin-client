import { keyframes, style } from '@vanilla-extract/css'

const float = keyframes({
  '0%, 100%': { transform: 'translateY(0)' },
  '50%': { transform: 'translateY(-10px)' },
})

export const container = style({
  backgroundColor: '#050505',
  color: '#f5f5f5',
  minHeight: '200vh',
  display: 'flex',
  flexDirection: 'column',
  fontFamily: 'serif',
})

export const introSection = style({
  height: '100vh',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  textAlign: 'center',
  padding: '2rem',
})

export const poeticTitle = style({
  fontSize: '2.5rem',
  lineHeight: '1.6',
  fontWeight: 200,
  wordBreak: 'keep-all',
  maxWidth: '600px',
})

export const downChevron = style({
  marginTop: '6rem',
  fontSize: '1.5rem',
  opacity: 0.3,
  animation: `${float} 3s ease-in-out infinite`,
})

export const revealSection = style({
  height: '100vh',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  padding: '2rem',
  position: 'relative',
})

export const shareCard = style({
  backgroundColor: 'rgba(255, 255, 255, 0.98)',
  color: '#050505',
  padding: '4rem',
  borderRadius: '2px',
  width: '100%',
  maxWidth: '500px',
  boxShadow: '0 40px 100px rgba(0,0,0,0.6)',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  textAlign: 'center',
  position: 'relative',
})

export const cardTitle = style({
  fontSize: '1.4rem',
  fontWeight: 600,
  marginBottom: '2rem',
  letterSpacing: '-0.02em',
})

export const keywordTag = style({
  backgroundColor: 'rgba(22, 163, 74, 0.08)',
  color: '#16a34a',
  padding: '0.5rem 1.2rem',
  borderRadius: '30px',
  fontSize: '0.9rem',
  fontWeight: 'bold',
  display: 'inline-block',
  marginBottom: '2.5rem',
  letterSpacing: '0.1em',
})

export const cardQuote = style({
  fontSize: '1.1rem',
  lineHeight: '1.8',
  fontStyle: 'italic',
  marginBottom: '3.5rem',
  fontWeight: 300,
  color: 'rgba(0,0,0,0.7)',
  position: 'relative',
})

export const shareButton = style({
  padding: '1.2rem 3rem',
  backgroundColor: '#050505',
  color: '#fff',
  border: 'none',
  borderRadius: '40px',
  fontSize: '1rem',
  cursor: 'pointer',
  transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
  width: '100%',
  selectors: {
    '&:hover': {
      backgroundColor: '#16a34a',
      transform: 'scale(1.02)',
    },
  },
})

export const backToHub = style({
  marginTop: '4rem',
  color: 'rgba(255,255,255,0.4)',
  textDecoration: 'none',
  fontSize: '0.9rem',
  letterSpacing: '0.2em',
  textTransform: 'uppercase',
  transition: 'all 0.3s ease',
  selectors: {
    '&:hover': {
      color: '#4ade80',
      opacity: 1,
    },
  },
})

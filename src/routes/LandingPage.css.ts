import { keyframes, style } from '@vanilla-extract/css'

// 1. 심연의 일렁임 (Background Pulse)
const abyssGlow = keyframes({
  '0%, 100%': { opacity: 0.3, filter: 'hue-rotate(0deg) blur(50px)' },
  '50%': { opacity: 0.6, filter: 'hue-rotate(20deg) blur(80px)' },
})

// 2. 별들의 흐름 (Star Movement)
const starScroll = keyframes({
  from: { transform: 'translateY(0)' },
  to: { transform: 'translateY(-1000px)' },
})

// 3. 텍스트 부활 (Text Emergence)
const textReveal = keyframes({
  '0%': {
    opacity: 0,
    filter: 'blur(10px)',
    letterSpacing: '0.5em',
    transform: 'scale(0.9) translateZ(-100px)',
  },
  '100%': {
    opacity: 1,
    filter: 'blur(0)',
    letterSpacing: 'normal',
    transform: 'scale(1) translateZ(0)',
  },
})

export const landingContainer = style({
  backgroundColor: '#030303',
  color: '#f0f0f0',
  height: '100vh',
  overflowY: 'auto',
  overflowX: 'hidden',
  scrollSnapType: 'y mandatory',
  perspective: '1000px',
  fontFamily: 'serif',
  position: 'relative',
})

// 우주 배경 입자 레이어
export const starField = style({
  position: 'fixed',
  top: 0,
  left: 0,
  width: '100%',
  height: '2000px',
  backgroundImage: `
    radial-gradient(1px 1px at 20px 30px, #fff, rgba(0,0,0,0)),
    radial-gradient(1.5px 1.5px at 40px 70px, #4ade80, rgba(0,0,0,0)),
    radial-gradient(1px 1px at 50px 160px, #fff, rgba(0,0,0,0)),
    radial-gradient(2px 2px at 90px 40px, #4ade80, rgba(0,0,0,0))
  `,
  backgroundSize: '200px 200px',
  animation: `${starScroll} 100s linear infinite`,
  opacity: 0.3,
  zIndex: 0,
})

export const scene = style({
  height: '100vh',
  scrollSnapAlign: 'start',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  padding: '0 15vw',
  textAlign: 'center',
  position: 'relative',
  zIndex: 1,
  transformStyle: 'preserve-3d',
})

// 아름이 별 (가이드 스타)
export const guideStar = style({
  width: '2px',
  height: '2px',
  backgroundColor: '#fff',
  borderRadius: '50%',
  boxShadow: '0 0 40px 20px #4ade80, 0 0 100px 40px rgba(74, 222, 128, 0.3)',
  marginBottom: '4rem',
  animation: `${abyssGlow} 4s ease-in-out infinite`,
})

export const poeticText = style({
  fontSize: 'clamp(1.5rem, 4vw, 3rem)',
  lineHeight: '1.6',
  fontWeight: 200,
  wordBreak: 'keep-all',
  animation: `${textReveal} 2.5s cubic-bezier(0.22, 1, 0.36, 1) forwards`,
})

export const highlight = style({
  color: '#4ade80',
  textShadow: '0 0 20px rgba(74, 222, 128, 0.5)',
  fontWeight: 400,
})

// 화이트 카드 (심연의 거울)
export const abyssMirror = style({
  backgroundColor: 'rgba(255, 255, 255, 0.03)',
  border: '1px solid rgba(255, 255, 255, 0.1)',
  backdropFilter: 'blur(20px)',
  padding: '4rem',
  borderRadius: '2px',
  maxWidth: '600px',
  transition: 'all 0.8s ease',
  selectors: {
    '&:hover': {
      backgroundColor: 'rgba(255, 255, 255, 0.07)',
      borderColor: '#4ade80',
      transform: 'translateY(-10px) rotateX(5deg)',
    },
  },
})

export const inputContainer = style({
  marginTop: '5rem',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  width: '100%',
})

export const futuristicInput = style({
  backgroundColor: 'transparent',
  border: 'none',
  borderBottom: '1px solid rgba(74, 222, 128, 0.3)',
  color: '#4ade80',
  fontSize: '2rem',
  textAlign: 'center',
  padding: '1rem',
  width: '100%',
  maxWidth: '400px',
  outline: 'none',
  transition: 'all 0.6s ease',
  fontFamily: 'inherit',
  selectors: {
    '&:focus': {
      borderBottomColor: '#4ade80',
      boxShadow: '0 15px 30px -15px rgba(74, 222, 128, 0.3)',
      transform: 'scale(1.05)',
    },
    '&::placeholder': {
      color: 'rgba(74, 222, 128, 0.2)',
      fontSize: '1.2rem',
    },
  },
})

export const startButton = style({
  marginTop: '3rem',
  padding: '1rem 4rem',
  backgroundColor: '#4ade80',
  color: '#030303',
  border: 'none',
  borderRadius: '40px',
  fontSize: '0.9rem',
  fontWeight: 'bold',
  letterSpacing: '0.3em',
  textTransform: 'uppercase',
  cursor: 'pointer',
  transition: 'all 0.4s ease',
  boxShadow: '0 0 20px rgba(74, 222, 128, 0.2)',
  selectors: {
    '&:hover:not(:disabled)': {
      transform: 'scale(1.1)',
      boxShadow: '0 0 40px rgba(74, 222, 128, 0.5)',
    },
    '&:disabled': {
      backgroundColor: 'rgba(255,255,255,0.05)',
      color: 'rgba(255,255,255,0.2)',
      cursor: 'not-allowed',
    },
  },
})

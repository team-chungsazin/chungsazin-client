import { keyframes, style } from '@vanilla-extract/css'

// 1. 심연의 일렁임
const abyssGlow = keyframes({
  '0%, 100%': { opacity: 0.5, filter: 'blur(60px)', transform: 'scale(1)' },
  '50%': { opacity: 0.9, filter: 'blur(90px)', transform: 'scale(1.1)' },
})

// 2. 무한 스크롤 애니메이션
const moveStars = keyframes({
  from: { transform: 'translateY(0)' },
  to: { transform: 'translateY(-1000px)' },
})

// 3. 초광성 커서 반짝임
const supernovaTwinkle = keyframes({
  '0%, 100%': { transform: 'scale(1)', filter: 'brightness(1)' },
  '50%': { transform: 'scale(1.4)', filter: 'brightness(1.8)' },
})

export const landingContainer = style({
  backgroundColor: '#020202',
  color: '#f5f5f5',
  height: '100vh',
  overflowY: 'auto',
  overflowX: 'hidden',
  scrollSnapType: 'y mandatory',
  perspective: '1500px',
  fontFamily: 'serif',
  position: 'relative',
  cursor: 'none !important', // 전역 커서 숨김
})

// 4. 커서 위치 래퍼 (하드웨어 가속)
export const cursorWrapper = style({
  position: 'fixed',
  top: 0,
  left: 0,
  zIndex: 99999, // 최상단 보장
  pointerEvents: 'none',
  willChange: 'transform',
  display: 'block',
})

// 5. 실제 별 (반짝임 애니메이션)
export const cursorInner = style({
  width: '12px',
  height: '12px',
  backgroundColor: '#fff',
  borderRadius: '50%',
  transform: 'translate(-50%, -50%)', // 포인터 중앙 정렬
  boxShadow: `
    0 0 20px 10px #00ff88, 
    0 0 40px 20px rgba(0, 255, 136, 0.4),
    0 0 100px 50px rgba(0, 255, 136, 0.1)
  `,
  animation: `${supernovaTwinkle} 2s ease-in-out infinite`,
})

// 6. 렌즈 플레어
export const flareWrapper = style({
  position: 'fixed',
  top: 0,
  left: 0,
  zIndex: 99998,
  pointerEvents: 'none',
  willChange: 'transform',
})

export const flareInner = style({
  width: '150px',
  height: '150px',
  transform: 'translate(-50%, -50%)',
  background: 'radial-gradient(circle, rgba(0, 255, 136, 0.15) 0%, transparent 70%)',
  filter: 'blur(10px)',
})

const baseStarLayer = style({
  position: 'fixed',
  top: 0,
  left: 0,
  width: '100%',
  height: '200%',
  zIndex: 0,
  pointerEvents: 'none',
  backgroundRepeat: 'repeat',
})

export const starLayer1 = style([
  baseStarLayer,
  {
    backgroundImage: `
    radial-gradient(1px 1px at 20px 30px, #fff, transparent),
    radial-gradient(1.2px 1.2px at 150px 50px, #fff, transparent),
    radial-gradient(1px 1px at 280px 120px, #fff, transparent),
    radial-gradient(1.1px 1.1px at 50px 200px, #fff, transparent),
    radial-gradient(1px 1px at 350px 280px, #fff, transparent),
    radial-gradient(1.3px 1.3px at 200px 350px, #fff, transparent),
    radial-gradient(1px 1px at 120px 180px, #fff, transparent),
    radial-gradient(1px 1px at 380px 40px, #fff, transparent),
    radial-gradient(1.2px 1.2px at 300px 220px, #fff, transparent),
    radial-gradient(1px 1px at 80px 320px, #fff, transparent)
  `,
    backgroundSize: '401px 401px',
    animation: `${moveStars} 100s linear infinite`,
    opacity: 0.8,
  },
])

export const starLayer2 = style([
  baseStarLayer,
  {
    backgroundImage: `
    radial-gradient(2px 2px at 100px 150px, #4ade80, transparent),
    radial-gradient(1.8px 1.8px at 400px 50px, #fff, transparent),
    radial-gradient(2.2px 2.2px at 250px 350px, #4ade80, transparent),
    radial-gradient(1.5px 1.5px at 50px 450px, #fff, transparent),
    radial-gradient(2px 2px at 350px 250px, #4ade80, transparent),
    radial-gradient(1.8px 1.8px at 480px 180px, #fff, transparent),
    radial-gradient(2.2px 2.2px at 150px 480px, #4ade80, transparent)
  `,
    backgroundSize: '503px 503px',
    animation: `${moveStars} 70s linear infinite`,
    opacity: 0.7,
  },
])

export const starLayer3 = style([
  baseStarLayer,
  {
    backgroundImage: `
    radial-gradient(2.5px 2.5px at 150px 250px, #fff, transparent),
    radial-gradient(3px 3px at 450px 450px, rgba(74, 222, 128, 0.5), transparent),
    radial-gradient(2.8px 2.8px at 550px 150px, #fff, transparent),
    radial-gradient(3.2px 3.2px at 50px 550px, rgba(74, 222, 128, 0.4), transparent)
  `,
    backgroundSize: '607px 607px',
    animation: `${moveStars} 45s linear infinite`,
    opacity: 0.6,
  },
])

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

export const guideStar = style({
  width: '6px',
  height: '6px',
  backgroundColor: '#fff',
  borderRadius: '50%',
  boxShadow: '0 0 60px 30px #4ade80, 0 0 140px 60px rgba(74, 222, 128, 0.4)',
  marginBottom: '4rem',
  animation: `${abyssGlow} 4s ease-in-out infinite`,
})

const textReveal = keyframes({
  '0%': { opacity: 0, filter: 'blur(20px)', transform: 'scale(0.8) translateZ(-200px)' },
  '100%': { opacity: 1, filter: 'blur(0)', transform: 'scale(1) translateZ(0)' },
})

export const poeticText = style({
  fontSize: 'clamp(1.8rem, 5vw, 3.5rem)',
  lineHeight: '1.8',
  fontWeight: 200,
  wordBreak: 'keep-all',
  animation: `${textReveal} 3s cubic-bezier(0.16, 1, 0.3, 1) forwards`,
})

export const highlight = style({
  color: '#4ade80',
  textShadow: '0 0 30px rgba(74, 222, 128, 0.7)',
  fontWeight: 400,
})

export const abyssMirror = style({
  backgroundColor: 'rgba(255, 255, 255, 0.03)',
  border: '1px solid rgba(255, 255, 255, 0.15)',
  backdropFilter: 'blur(40px)',
  padding: '5rem',
  borderRadius: '2px',
  maxWidth: '700px',
  transition: 'all 1s cubic-bezier(0.16, 1, 0.3, 1)',
  selectors: {
    '&:hover': {
      backgroundColor: 'rgba(255, 255, 255, 0.1)',
      borderColor: 'rgba(74, 222, 128, 0.6)',
      transform: 'translateY(-20px) rotateX(8deg) scale(1.03)',
      boxShadow: '0 50px 100px rgba(0,0,0,0.8)',
    },
  },
})

export const inputContainer = style({
  marginTop: '6rem',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  width: '100%',
})

export const futuristicInput = style({
  backgroundColor: 'transparent',
  border: 'none',
  borderBottom: '2px solid rgba(74, 222, 128, 0.4)',
  color: '#4ade80',
  fontSize: '3rem',
  textAlign: 'center',
  padding: '1.5rem',
  width: '100%',
  maxWidth: '550px',
  outline: 'none',
  transition: 'all 1s cubic-bezier(0.16, 1, 0.3, 1)',
  fontFamily: 'inherit',
  selectors: {
    '&:focus': {
      borderBottomColor: '#4ade80',
      boxShadow: '0 30px 70px -30px rgba(74, 222, 128, 0.6)',
      transform: 'scale(1.05) translateY(-5px)',
    },
    '&::placeholder': {
      color: 'rgba(74, 222, 128, 0.25)',
      fontSize: '1.6rem',
      letterSpacing: '0.2em',
    },
  },
})

export const startButton = style({
  marginTop: '4rem',
  padding: '1.6rem 9rem',
  backgroundColor: '#4ade80',
  color: '#010101',
  border: 'none',
  borderRadius: '60px',
  fontSize: '1.1rem',
  fontWeight: 'bold',
  letterSpacing: '0.6em',
  textTransform: 'uppercase',
  cursor: 'none !important',
  transition: 'all 0.6s cubic-bezier(0.16, 1, 0.3, 1)',
  boxShadow: '0 0 60px rgba(74, 222, 128, 0.5)',
  selectors: {
    '&:hover:not(:disabled)': {
      transform: 'scale(1.1) translateY(-8px)',
      boxShadow: '0 0 90px rgba(74, 222, 128, 0.9)',
      letterSpacing: '0.8em',
    },
    '&:disabled': {
      backgroundColor: 'rgba(255,255,255,0.05)',
      color: 'rgba(255,255,255,0.15)',
      boxShadow: 'none',
      cursor: 'none !important',
    },
  },
})

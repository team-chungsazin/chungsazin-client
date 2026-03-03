import { style } from '@vanilla-extract/css'

export const container = style({
  backgroundColor: '#fff',
  color: '#000',
  minHeight: '100vh',
  padding: '2rem',
  display: 'flex',
  flexDirection: 'column',
  position: 'relative',
})

export const topDivider = style({
  width: '100%',
  height: '1px',
  backgroundColor: '#eee',
  marginBottom: '2rem',
})

export const promptCard = style({
  display: 'grid',
  gridTemplateColumns: '1fr 1.5fr',
  gap: '1.5rem',
  marginBottom: '3rem',
  alignItems: 'center',
})

export const mediaPlaceholder = style({
  aspectRatio: '1/1',
  backgroundColor: '#f5f5f5',
  borderRadius: '4px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  fontSize: '0.8rem',
  color: '#999',
})

export const promptText = style({
  fontSize: '1.1rem',
  lineHeight: '1.6',
})

export const label = style({
  display: 'block',
  fontSize: '0.9rem',
  fontWeight: 'bold',
  marginBottom: '0.5rem',
  letterSpacing: '0.05em',
})

export const quoteBlock = style({
  borderLeft: '2px solid #121212',
  paddingLeft: '1.5rem',
  margin: '2rem 0',
})

export const quoteText = style({
  fontSize: '1.2rem',
  fontStyle: 'italic',
  marginBottom: '0.5rem',
  lineHeight: '1.5',
})

export const citation = style({
  fontSize: '0.9rem',
  opacity: 0.6,
})

export const wordSection = style({
  marginTop: '2rem',
})

export const wordIntro = style({
  fontSize: '0.9rem',
  marginBottom: '1rem',
  opacity: 0.8,
})

export const wordContainer = style({
  backgroundColor: '#f9f9f9',
  padding: '1.5rem',
  borderRadius: '8px',
  display: 'flex',
  flexWrap: 'wrap',
  gap: '0.8rem',
})

export const wordChip = style({
  padding: '0.4rem 0.8rem',
  backgroundColor: '#fff',
  border: '1px solid #eee',
  borderRadius: '20px',
  fontSize: '0.85rem',
})

export const nextArrow = style({
  position: 'absolute',
  bottom: '2rem',
  right: '2rem',
  fontSize: '2rem',
  cursor: 'pointer',
  background: 'none',
  border: 'none',
  padding: '0.5rem',
})

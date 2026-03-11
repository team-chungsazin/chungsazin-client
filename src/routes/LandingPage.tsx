import { useEffect, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import * as s from './LandingPage.css'

export function LandingPage() {
  const [readerName, setReaderName] = useState('')
  const navigate = useNavigate()

  const cursorRef = useRef<HTMLDivElement>(null)
  const flareRef = useRef<HTMLDivElement>(null)

  const mousePos = useRef({ x: -100, y: -100 })
  const currentPos = useRef({ x: -100, y: -100 })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mousePos.current = { x: e.clientX, y: e.clientY }
    }

    let rafId: number
    const update = () => {
      const lerp = (start: number, end: number, factor: number) => start + (end - start) * factor

      currentPos.current.x = lerp(currentPos.current.x, mousePos.current.x, 0.2)
      currentPos.current.y = lerp(currentPos.current.y, mousePos.current.y, 0.2)

      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate3d(${currentPos.current.x}px, ${currentPos.current.y}px, 0)`
      }
      if (flareRef.current) {
        flareRef.current.style.transform = `translate3d(${currentPos.current.x}px, ${currentPos.current.y}px, 0)`
      }

      rafId = requestAnimationFrame(update)
    }

    window.addEventListener('mousemove', handleMouseMove)
    update()

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      cancelAnimationFrame(rafId)
    }
  }, [])

  const handleStart = () => {
    if (readerName.trim()) {
      navigate('/blueprint/hub', { state: { readerName } })
    }
  }

  return (
    <>
      {/* 
        CRITICAL FIX: 커서 레이어를 메인 컨테이너 외부로 배치 
        perspective와 scroll의 영향을 받지 않고 뷰포트에 고정됨
      */}
      <div ref={cursorRef} className={s.cursorWrapper} aria-hidden="true">
        <div className={s.cursorInner} />
      </div>
      <div ref={flareRef} className={s.flareWrapper} aria-hidden="true">
        <div className={s.flareInner} />
      </div>

      <main className={s.landingContainer}>
        {/* 배경 별 무리 */}
        <div className={s.starLayer1} aria-hidden="true" />
        <div className={s.starLayer2} aria-hidden="true" />
        <div className={s.starLayer3} aria-hidden="true" />

        <section className={s.scene}>
          <div className={s.guideStar} />
          <h2 className={s.poeticText}>
            어둠뿐인 심연 속에서
            <br />
            <span style={{ fontSize: '1.2rem', opacity: 0.5 }}>당신의 목소리가 들려옵니다</span>
          </h2>
        </section>

        <section className={s.scene}>
          <h2 className={s.poeticText}>
            혹시 알고 있나요?
            <br />이 우주의 <span className={s.highlight}>진짜 주인공</span>은...
          </h2>
        </section>

        <section className={s.scene}>
          <h2 className={s.poeticText} style={{ transform: 'translateZ(150px)' }}>
            작가도,
            <br />
            아름이인 저도 아닌,
            <br />
            <span
              style={{
                fontSize: '4.5rem',
                fontWeight: 300,
                display: 'block',
                marginTop: '1.5rem',
                letterSpacing: '-0.02em',
              }}
            >
              바로 당신
            </span>
          </h2>
        </section>

        <section className={s.scene}>
          <div className={s.abyssMirror}>
            <p style={{ marginBottom: '2.5rem', fontSize: '1.2rem' }}>
              당신은 어떤 과거의 기억을 가지고 왔나요?
            </p>
            <p style={{ marginBottom: '2.5rem', fontSize: '1.2rem' }}>
              <span className={s.highlight}>현재</span>에서 초록 우는 별들을 만나고
            </p>
            <p style={{ fontSize: '1.2rem' }}>책장을 덮은 후에는 미래의 청사진을 그려봅시다</p>
          </div>
        </section>

        <section className={s.scene}>
          <h1
            style={{
              fontSize: '1rem',
              letterSpacing: '0.6em',
              opacity: 0.4,
              marginBottom: '2.5rem',
              textTransform: 'uppercase',
            }}
          >
            ChungSazin
          </h1>
          <h2
            className={s.poeticText}
            style={{ fontSize: '3.5rem', marginBottom: '5rem', fontWeight: 300 }}
          >
            초록 우는 별들
          </h2>

          <div className={s.inputContainer}>
            <input
              type="text"
              className={s.futuristicInput}
              placeholder="이름을 알려주세요"
              value={readerName}
              onChange={(e) => setReaderName(e.target.value)}
              spellCheck={false}
            />
            <button
              type="button"
              className={s.startButton}
              disabled={!readerName.trim()}
              onClick={handleStart}
            >
              시작하기
            </button>
          </div>
        </section>
      </main>
    </>
  )
}

import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import * as s from './LandingPage.css'

export function LandingPage() {
  const [readerName, setReaderName] = useState('')
  const navigate = useNavigate()

  const handleStart = () => {
    if (readerName.trim()) {
      navigate('/blueprint/hub', { state: { readerName } })
    }
  }

  return (
    <main className={s.landingContainer}>
      <section className={s.scene}>
        <div className={s.starGlow} />
        <h2 className={s.poeticSentence}>
          반가워요! <br />
          <span style={{ fontSize: '1.2rem', opacity: 0.6 }}>저는 아름이라고 해요</span>
        </h2>
      </section>

      <section className={s.scene}>
        <div className={s.starGlow} style={{ animationDelay: '1s', backgroundColor: '#34d399' }} />
        <h2 className={s.poeticSentence}>
          혹시 알고 있나요? <br />이 책의 <span className={s.greenHighlight}>진짜 주인공</span>은...
        </h2>
      </section>

      <section className={s.scene}>
        <h2 className={s.poeticSentence} style={{ fontSize: '3.5rem', fontWeight: 200 }}>
          작가도
          <br />
          저도 아닌
          <br />
          <span style={{ fontWeight: 400 }}>바로 당신</span>이라는 걸요
        </h2>
      </section>

      <section className={s.scene}>
        <div className={s.highlightCard}>
          <p>당신은 어떤 과거의 기억을 가지고 왔나요?</p>
          <p>
            <span className={s.greenHighlight}>현재</span>에서 초록 우는 별들을 만나고
          </p>
          <p>책장을 덮은 후에는 미래의 청사진을 그려봅시다</p>
        </div>
      </section>

      <section className={s.scene}>
        <h1
          style={{
            fontSize: '4rem',
            marginBottom: '0.5rem',
            fontWeight: 200,
            letterSpacing: '-0.05em',
          }}
        >
          초록 우는 별들
        </h1>
        <p
          style={{
            opacity: 0.4,
            letterSpacing: '0.3em',
            textTransform: 'uppercase',
            fontSize: '0.8rem',
          }}
        >
          Blueprint of youth
        </p>

        <div className={s.nameInputContainer}>
          <input
            type="text"
            className={s.inputField}
            placeholder="이름을 입력해주세요"
            value={readerName}
            onChange={(e) => setReaderName(e.target.value)}
            aria-label="이름 입력"
          />
          <button
            type="button"
            className={s.startButton}
            disabled={!readerName.trim()}
            onClick={handleStart}
          >
            Enter the blueprint
          </button>
        </div>
      </section>
    </main>
  )
}

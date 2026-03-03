import { Link, useLocation } from 'react-router-dom'
import * as s from './BlueprintRevealPage.css'

interface RevealState {
  readerName: string
  primaryKeyword: string
}

export function BlueprintRevealPage() {
  const location = useLocation()
  const state = location.state as RevealState
  const readerName = state?.readerName || '당신'
  const primaryKeyword = state?.primaryKeyword || '청춘'

  const handleShare = () => {
    if (navigator.share) {
      navigator
        .share({
          title: '나의 청사진',
          text: `초록 우는 별들과 함께 그린 ${readerName}님의 청사진: #${primaryKeyword}`,
          url: window.location.href,
        })
        .catch(console.error)
    } else {
      navigator.clipboard.writeText(window.location.href)
      alert('링크가 복사되었습니다.')
    }
  }

  return (
    <main className={s.container}>
      {/* Intro Section */}
      <section className={s.introSection}>
        <h2 className={s.poeticTitle}>
          그럼 이제
          <br />
          {readerName}님의 <span style={{ color: '#4ade80', fontWeight: 400 }}>청사진</span>을<br />
          그려볼까요?
        </h2>
        <div className={s.downChevron} aria-hidden="true">
          ↓
        </div>
      </section>

      {/* Reveal Section */}
      <section className={s.revealSection}>
        <div className={s.shareCard}>
          <span className={s.cardTitle}>{readerName}님의 청사진</span>
          <span className={s.keywordTag}>#{primaryKeyword}</span>
          <p className={s.cardQuote}>
            방황하는 별들에게는 저마다의 궤적이 있다.
            <br />
            당신의 청사진은 그 궤적 끝에 피어날
            <br />
            가장 아름다운 기록입니다.
          </p>
          <button type="button" className={s.shareButton} onClick={handleShare}>
            Share with the stars
          </button>
        </div>

        <Link to="/blueprint/hub" state={{ readerName }} className={s.backToHub}>
          Back to hub
        </Link>
      </section>
    </main>
  )
}

import { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import * as s from './BlueprintKeywordPage.css'

const KEYWORDS = ['꿈', '사랑', '방황', '성장', '도전', '기억', '여백', '연결', '흔적', '호흡']

export function BlueprintKeywordPage() {
  const [selected, setSelected] = useState<string | null>(null)
  const location = useLocation()
  const navigate = useNavigate()
  const readerName = location.state?.readerName || '당신'

  const handleNext = () => {
    if (selected) {
      navigate('/blueprint/reveal', {
        state: { readerName, primaryKeyword: selected },
      })
    }
  }

  return (
    <main className={s.container}>
      <p style={{ marginBottom: '3rem', fontSize: '1.2rem', opacity: 0.8 }}>
        당신의 청춘을 대표하는 하나의 키워드를 선택해주세요.
      </p>

      <div className={s.cloud}>
        {KEYWORDS.map((keyword, index) => (
          <button
            type="button"
            key={keyword}
            className={`${s.keywordChip} ${selected === keyword ? s.selectedChip : ''}`}
            onClick={() => setSelected(keyword)}
            aria-pressed={selected === keyword}
            style={{ animationDelay: `${index * 0.2}s` }}
          >
            {keyword}
          </button>
        ))}
      </div>

      <button
        type="button"
        className={s.nextArrow}
        disabled={!selected}
        onClick={handleNext}
        aria-label="청사진 확인하기"
      >
        →
      </button>
    </main>
  )
}

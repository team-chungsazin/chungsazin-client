import { useState } from 'react'
import { useLocation, useNavigate, useParams } from 'react-router-dom'
import * as s from './BlueprintInputPage.css'

interface InputData {
  instruction: (name: string) => string
  question: string
  nextPath: string
}

const INPUT_CONFIG: Record<string, InputData> = {
  past: {
    instruction: (name) => `${name}님의 의견을 남겨주세요`,
    question: '내가 정의하는 과거란 무엇인가요?',
    nextPath: '/blueprint/present',
  },
  present: {
    instruction: (name) => `${name}님의 의견을 남겨주세요`,
    question: '내가 정의하는 현재란 무엇인가요?',
    nextPath: '/blueprint/future',
  },
  future: {
    instruction: (name) => `${name}님의 의견을 남겨주세요`,
    question: '내가 정의하는 미래란 무엇인가요?',
    nextPath: '/blueprint/youth', // '?' 섹션
  },
  youth: {
    instruction: (name) => `${name}님의 의견을 자유롭게 남겨주세요`,
    question: '청춘이란 무엇일까요?',
    nextPath: '/blueprint/youth/keyword',
  },
}

export function BlueprintInputPage() {
  const { section = 'past' } = useParams<{ section: string }>()
  const [value, setValue] = useState('')
  const location = useLocation()
  const navigate = useNavigate()
  const readerName = location.state?.readerName || '당신'

  const config = INPUT_CONFIG[section]

  if (!config) return null

  const handleSubmit = () => {
    if (value.trim()) {
      // TODO: 전역 상태나 Context에 value 저장 로직 추가 필요
      navigate(config.nextPath, { state: { readerName } })
    }
  }

  return (
    <main className={s.container}>
      <div className={s.topDivider} />

      <p className={s.instruction}>{config.instruction(readerName)}</p>
      <h2 className={s.question}>{config.question}</h2>

      <div className={s.inputContainer}>
        <input
          type="text"
          className={s.inputField}
          placeholder="내용을 입력해주세요"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          aria-label="생각 입력"
        />
        <button
          type="button"
          className={s.submitButton}
          onClick={handleSubmit}
          disabled={!value.trim()}
          aria-label="저장 및 다음으로"
        >
          <span className={s.chevron}>^</span>
        </button>
      </div>
    </main>
  )
}

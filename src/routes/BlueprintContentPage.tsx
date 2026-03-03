import { useLocation, useNavigate, useParams } from 'react-router-dom'
import * as s from './BlueprintContentPage.css'

interface ContentData {
  label: string
  prompt: (name: string) => string
  quote: string
  wordIntro: string
  words: string[]
  nextPath: string
}

const CONTENT_CONFIG: Record<string, ContentData> = {
  past: {
    label: 'PAST :',
    prompt: (name) => `${name}님의 시간 속에는 어떤 기억들이 머물러있나요?`,
    quote: '시미리보기시미리보기 ...',
    wordIntro: '청사진은 ‘과거’를 다음과 같은 단어들로 정의합니다.',
    words: ['기억', '조각', '오래된', '흔적'],
    nextPath: '/blueprint/past/input',
  },
  present: {
    label: 'PRESENT :',
    prompt: (name) => `${name}님은 현재 어떤 생각에 머물러있나요?`,
    quote: '현재의 문장들이 당신의 호흡이 되기를.',
    wordIntro: '청사진은 ‘현재’를 다음과 같은 단어들로 정의합니다.',
    words: ['순간', '호흡', '지금', '연결'],
    nextPath: '/blueprint/present/input',
  },
  future: {
    label: 'FUTURE :',
    prompt: (name) => `${name}님은 어떤 내일을 꿈꾸고 있나요?`,
    quote: '아직 오지 않은 빛이 당신을 비추고 있습니다.',
    wordIntro: '청사진은 ‘미래’를 다음과 같은 단어들로 정의합니다.',
    words: ['희망', '변화', '도착', '빛'],
    nextPath: '/blueprint/future/input',
  },
}

export function BlueprintContentPage() {
  const { section = 'past' } = useParams<{ section: string }>()
  const location = useLocation()
  const navigate = useNavigate()
  const readerName = location.state?.readerName || '당신'

  const config = CONTENT_CONFIG[section]

  if (!config) return null

  return (
    <main className={s.container}>
      <div className={s.topDivider} />

      <section className={s.promptCard}>
        <div className={s.mediaPlaceholder}>
          (사진보다는 영상이
          <br />
          들어가면 좋을 것 같습니다)
        </div>
        <div>
          <span className={s.label}>{config.label}</span>
          <p className={s.promptText}>{config.prompt(readerName)}</p>
        </div>
      </section>

      <div className={s.quoteBlock}>
        <p className={s.quoteText}>“{config.quote}”</p>
        <p className={s.citation}>- 초록 우는 별들 中</p>
      </div>

      <section className={s.wordSection}>
        <p className={s.wordIntro}>{config.wordIntro}</p>
        <div className={s.wordContainer}>
          {config.words.map((word) => (
            <span key={word} className={s.wordChip}>
              {word}
            </span>
          ))}
        </div>
      </section>

      <button
        type="button"
        className={s.nextArrow}
        onClick={() => navigate(config.nextPath, { state: { readerName } })}
        aria-label="다음 단계로"
      >
        →
      </button>
    </main>
  )
}

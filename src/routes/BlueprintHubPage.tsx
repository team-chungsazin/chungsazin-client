import { Link, useLocation } from 'react-router-dom'
import * as s from './BlueprintHubPage.css'

interface HubState {
  readerName: string
}

const SECTIONS = [
  { id: 'past', label: 'PAST', progress: 0, path: '/blueprint/past' },
  { id: 'present', label: 'PRESENT', progress: 0, path: '/blueprint/present' },
  { id: 'future', label: 'FUTURE', progress: 0, path: '/blueprint/future' },
  { id: 'youth', label: '?', progress: 0, path: '/blueprint/youth' },
]

export function BlueprintHubPage() {
  const location = useLocation()
  const state = location.state as HubState
  const readerName = state?.readerName || '당신'

  return (
    <main className={s.hubContainer}>
      <header className={s.header}>
        <p className={s.title}>초록우는별들</p>
        <p className={s.welcomeMsg}>과 함께 {readerName}님의 청사진을 완성해봅시다</p>
      </header>

      <div className={s.sectionList}>
        {SECTIONS.map((section) => (
          <Link key={section.id} className={s.sectionRow} to={section.path} state={{ readerName }}>
            <span className={s.sectionLabel}>{section.label}</span>
            <div className={s.progressBarContainer}>
              <div className={s.progressBarFill} style={{ width: `${section.progress}%` }} />
            </div>
            <span className={s.arrowIcon} aria-hidden="true">
              →
            </span>
          </Link>
        ))}
      </div>

      <a
        href="https://smartstore.naver.com" // Placeholder URL
        className={s.purchaseCta}
        target="_blank"
        rel="noopener noreferrer"
      >
        구매 바로가기
      </a>
    </main>
  )
}

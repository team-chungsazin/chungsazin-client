import { Link } from 'react-router-dom'
import { headerNav, navLink, page, pageHeader, subtitle, surfaceCard } from '@/styles/app.css'
import { Text } from '@/ui/Text'

export function AboutPage() {
  return (
    <main className={page}>
      <header className={pageHeader}>
        <div>
          <Text as="h1" roleType="display">
            어바웃
          </Text>
          <p className={subtitle}>팀 소개</p>
        </div>

        <nav className={headerNav} aria-label="페이지 이동">
          <Link className={navLink} to="/">
            랜딩
          </Link>
          <Link className={navLink} to="/works">
            메인
          </Link>
        </nav>
      </header>

      <section className={surfaceCard}>
        <Text as="h2" roleType="title">
          ChungSazin
        </Text>
        <Text roleType="ui">
          ChungSazin은 시와 그림을 한 편의 작품처럼 읽는 웹 시집 경험을 만들고 있습니다.
        </Text>
      </section>

      <section className={surfaceCard}>
        <Text as="h2" roleType="title">
          우리가 중요하게 생각하는 것
        </Text>
        <ul>
          <li>가독성: 먼저 읽히는 타이포그래피</li>
          <li>여백: 리듬을 만드는 간격</li>
          <li>접근성: 키보드·저모션 환경에서도 편안함</li>
          <li>성능: 모바일에서도 부드러운 스크롤</li>
        </ul>
      </section>
    </main>
  )
}

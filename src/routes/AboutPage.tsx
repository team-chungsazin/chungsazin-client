import { Link } from 'react-router-dom'
import {
  headerNav,
  navLink,
  page,
  pageHeader,
  subtitle,
  surfaceCard,
  titleGroup,
} from '@/styles/app.css'
import { Text } from '@/ui/Text'

export function AboutPage() {
  return (
    <main className={page}>
      <header className={pageHeader}>
        <div className={titleGroup}>
          <Text as="h1" roleType="display">
            About
          </Text>
          <p className={subtitle}>청사진이 지향하는 가치</p>
        </div>

        <nav className={headerNav} aria-label="페이지 이동">
          <Link className={navLink} to="/">
            Home
          </Link>
          <Link className={navLink} to="/works">
            Archive
          </Link>
        </nav>
      </header>

      <div style={{ display: 'grid', gap: '2rem' }}>
        <section className={surfaceCard}>
          <Text as="h2" roleType="title" style={{ marginBottom: '1rem' }}>
            ChungSazin
          </Text>
          <Text roleType="ui">
            청사진(ChungSazin)은 시와 그림을 한 편의 정제된 작품처럼 읽는 웹 시집 경험을 만듭니다.
            우리는 디지털 환경에서도 종이가 주는 따뜻한 질감과 여백의 리듬을 느낄 수 있기를
            바랍니다.
          </Text>
        </section>

        <section className={surfaceCard}>
          <Text as="h2" roleType="title" style={{ marginBottom: '1rem' }}>
            Core Values
          </Text>
          <div style={{ display: 'grid', gap: '1rem' }}>
            <div>
              <Text roleType="ui" style={{ fontWeight: 700 }}>
                가독성 (Readability)
              </Text>
              <Text roleType="caption">먼저 읽히고 깊게 남는 타이포그래피를 지향합니다.</Text>
            </div>
            <div>
              <Text roleType="ui" style={{ fontWeight: 700 }}>
                여백 (Whitespace)
              </Text>
              <Text roleType="caption">문장 사이의 간격이 만드는 고유한 리듬을 존중합니다.</Text>
            </div>
            <div>
              <Text roleType="ui" style={{ fontWeight: 700 }}>
                접근성 (Accessibility)
              </Text>
              <Text roleType="caption">
                누구나 어떤 환경에서도 편안하게 시를 감상할 수 있어야 합니다.
              </Text>
            </div>
          </div>
        </section>
      </div>
    </main>
  )
}

import { Link } from 'react-router-dom'
import { useScroll } from '@/hooks/useScroll'
import {
  ctaRow,
  headerNav,
  heroSection,
  navLink,
  page,
  pageHeader,
  pageHeaderHidden,
  subtitle,
  surfaceCard,
  titleGroup,
} from '@/styles/app.css'
import { LinkButton } from '@/ui/LinkButton'
import { Text } from '@/ui/Text'

export function HomePage() {
  const { isScrollingUp } = useScroll()

  return (
    <main className={page}>
      <header className={`${pageHeader} ${!isScrollingUp ? pageHeaderHidden : ''}`}>
        <div className={titleGroup}>
          <Text as="h1" roleType="display">
            ChungSazin
          </Text>
          <p className={subtitle}>시와 그림을 함께 읽는 웹 시집</p>
        </div>

        <nav className={headerNav} aria-label="페이지 이동">
          <Link className={navLink} to="/works">
            Archive
          </Link>
          <Link className={navLink} to="/about">
            About
          </Link>
          <Link className={navLink} to="/landing" style={{ color: '#16a34a', fontWeight: 'bold' }}>
            Blueprint
          </Link>
        </nav>
      </header>

      <section className={heroSection}>
        <div className={surfaceCard}>
          <Text as="h2" roleType="title">
            여백의 기록, 청사진
          </Text>
          <Text roleType="ui">
            읽기(가독성)와 감각(리듬·여백)을 해치지 않는 인터랙션을 지향합니다.
            <br />
            당신의 일상에 잠시 머물다 가는 문장들이기를 바랍니다.
          </Text>
          <nav className={ctaRow} aria-label="시작하기">
            <LinkButton to="/works">시집 목록 보기</LinkButton>
            <LinkButton to="/landing">나의 청사진 그리기</LinkButton>
          </nav>
        </div>
      </section>
    </main>
  )
}

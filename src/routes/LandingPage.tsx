import { Link } from 'react-router-dom'
import {
  ctaRow,
  headerNav,
  navLink,
  page,
  pageHeader,
  subtitle,
  surfaceCard,
} from '@/styles/app.css'
import { LinkButton } from '@/ui/LinkButton'
import { Text } from '@/ui/Text'

export function LandingPage() {
  return (
    <main className={page}>
      <header className={pageHeader}>
        <div>
          <Text as="h1" roleType="display">
            ChungSazin
          </Text>
          <p className={subtitle}>시와 그림을 함께 읽는 웹 시집</p>
        </div>

        <nav className={headerNav} aria-label="페이지 이동">
          <Link className={navLink} to="/works">
            메인
          </Link>
          <Link className={navLink} to="/about">
            어바웃
          </Link>
        </nav>
      </header>

      <section className={surfaceCard}>
        <Text as="h2" roleType="title">
          랜딩 페이지
        </Text>
        <Text roleType="ui">
          읽기(가독성)와 감각(리듬·여백)을 해치지 않는 인터랙션을 목표로 합니다.
        </Text>
        <nav className={ctaRow} aria-label="시작하기">
          <LinkButton to="/works">시집 목록 보기</LinkButton>
          <LinkButton to="/about">팀 소개 보기</LinkButton>
        </nav>
      </section>
    </main>
  )
}

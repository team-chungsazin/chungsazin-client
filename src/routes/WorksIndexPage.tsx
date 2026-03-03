import { Link } from 'react-router-dom'
import { works } from '@/data/works'
import {
  headerNav,
  navLink,
  page,
  pageHeader,
  subtitle,
  surfaceCard,
  workCoverImage,
  workList,
  workListCard,
} from '@/styles/app.css'
import { LinkButton } from '@/ui/LinkButton'
import { Text } from '@/ui/Text'

export function WorksIndexPage() {
  return (
    <main className={page}>
      <header className={pageHeader}>
        <div>
          <Text as="h1" roleType="display">
            시집 목록
          </Text>
          <Text roleType="caption">그리드에서 시집을 선택해 상세 페이지로 들어가세요.</Text>
        </div>

        <nav className={headerNav} aria-label="페이지 이동">
          <Link className={navLink} to="/">
            랜딩
          </Link>
          <Link className={navLink} to="/about">
            어바웃
          </Link>
        </nav>
      </header>

      <ul className={workList}>
        {works.map((work) => (
          <li key={work.id} className={`${surfaceCard} ${workListCard}`}>
            <img className={workCoverImage} src={work.cover.src} alt={work.cover.alt} />
            <div>
              <Text as="h2" roleType="title">
                {work.title}
              </Text>
              <Text roleType="ui">{work.teaser}</Text>
              <p className={subtitle}>
                <LinkButton to={`/works/${work.id}`}>상세 보기</LinkButton>
              </p>
            </div>
          </li>
        ))}
      </ul>
    </main>
  )
}

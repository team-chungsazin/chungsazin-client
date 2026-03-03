import { Link } from 'react-router-dom'
import { works } from '@/data/works'
import {
  headerNav,
  navLink,
  page,
  pageHeader,
  subtitle,
  surfaceCard,
  titleGroup,
  workCoverImage,
  workList,
  workListCard,
} from '@/styles/app.css'
import { Text } from '@/ui/Text'

export function WorksIndexPage() {
  return (
    <main className={page}>
      <header className={pageHeader}>
        <div className={titleGroup}>
          <Text as="h1" roleType="display">
            Archive
          </Text>
          <p className={subtitle}>시간이 머물다 간 문장들의 기록</p>
        </div>

        <nav className={headerNav} aria-label="페이지 이동">
          <Link className={navLink} to="/">
            Home
          </Link>
          <Link className={navLink} to="/about">
            About
          </Link>
        </nav>
      </header>

      <ul className={workList}>
        {works.map((work) => (
          <li key={work.id}>
            <Link to={`/works/${work.id}`} className={`${surfaceCard} ${workListCard}`}>
              <img className={workCoverImage} src={work.cover.src} alt={work.cover.alt} />
              <div>
                <Text as="h3" roleType="title">
                  {work.title}
                </Text>
                <Text roleType="caption" className={subtitle}>
                  {work.teaser}
                </Text>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </main>
  )
}

import { Link, useParams } from 'react-router-dom'
import { workById } from '@/data/works'
import {
  headerNav,
  navLink,
  page,
  pageHeader,
  poemBlock,
  poemStanza,
  subtitle,
  surfaceCard,
  titleGroup,
  workCoverImage,
  workDetailLayout,
} from '@/styles/app.css'
import { Text } from '@/ui/Text'
import { NotFoundPage } from './NotFoundPage'

function isValidWorkId(id: string): boolean {
  return /^[1-9][0-9]*$/.test(id)
}

export function WorkReaderPage() {
  const { id } = useParams<{ id: string }>()

  if (!id || !isValidWorkId(id)) {
    return <NotFoundPage reason="유효하지 않은 id 형식입니다" />
  }

  const work = workById.get(id)
  if (!work) {
    return <NotFoundPage reason="존재하지 않는 시집입니다" />
  }

  return (
    <main className={page}>
      <header className={pageHeader}>
        <div className={titleGroup}>
          <Text as="h1" roleType="title">
            {work.title}
          </Text>
          <p className={subtitle}>{work.teaser}</p>
        </div>

        <nav className={headerNav} aria-label="페이지 이동">
          <Link className={navLink} to="/">
            Home
          </Link>
          <Link className={navLink} to="/works">
            Archive
          </Link>
          <Link className={navLink} to="/about">
            About
          </Link>
        </nav>
      </header>

      <article className={`${surfaceCard} ${workDetailLayout}`} aria-label="시집 상세">
        <img className={workCoverImage} src={work.cover.src} alt={work.cover.alt} />

        <section className={poemBlock} aria-label="글">
          {work.poem.stanzas.map((stanza) => (
            <div key={stanza.id} className={poemStanza}>
              {stanza.lines.join('\n')}
            </div>
          ))}
        </section>
      </article>

      <footer style={{ marginTop: '3rem', textAlign: 'center' }}>
        <Link className={navLink} to="/works">
          ← Back to Archive
        </Link>
      </footer>
    </main>
  )
}

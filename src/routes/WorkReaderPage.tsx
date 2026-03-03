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
  workCoverImage,
  workDetailLayout,
} from '@/styles/app.css'
import { Text } from '@/ui/Text'
import { textRole } from '@/ui/Text.css'
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
        <div>
          <Text as="h1" roleType="title">
            {work.title}
          </Text>
          <p className={subtitle}>시집 ID: {work.id}</p>
        </div>

        <nav className={headerNav} aria-label="페이지 이동">
          <Link className={navLink} to="/">
            랜딩
          </Link>
          <Link className={navLink} to="/works">
            메인
          </Link>
          <Link className={navLink} to="/about">
            어바웃
          </Link>
        </nav>
      </header>

      <article className={`${surfaceCard} ${workDetailLayout}`} aria-label="시집 상세">
        <img className={workCoverImage} src={work.cover.src} alt={work.cover.alt} />

        <section className={poemBlock} aria-label="글">
          {work.poem.stanzas.map((stanza) => (
            <p key={stanza.id} className={`${textRole.poem} ${poemStanza}`}>
              {stanza.lines.join('\n')}
            </p>
          ))}
        </section>
      </article>

      <nav>
        <Link to="/works">목록으로 돌아가기</Link>
      </nav>
    </main>
  )
}

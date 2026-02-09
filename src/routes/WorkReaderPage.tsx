import { Link, useParams } from 'react-router-dom'
import { workById } from '@/data/works'
import { page, subtitle, surfaceCard } from '@/styles/app.css'
import { Text } from '@/ui/Text'
import { NotFoundPage } from './NotFoundPage'

function isValidWorkId(id: string): boolean {
  return /^[1-9][0-9]*$/.test(id)
}

export function WorkReaderPage() {
  const { id } = useParams<{ id: string }>()

  if (!id || !isValidWorkId(id)) {
    return <NotFoundPage reason="Invalid work id format" />
  }

  const work = workById.get(id)
  if (!work) {
    return <NotFoundPage reason="Work does not exist" />
  }

  return (
    <main className={page}>
      <header>
        <Text as="h1" roleType="title">
          {work.title}
        </Text>
        <p className={subtitle}>Work ID: {work.id}</p>
      </header>

      <article className={surfaceCard}>
        <Text roleType="poem">
          This is a placeholder reader surface for issue #5 baseline setup validation.
        </Text>
      </article>

      <nav>
        <Link to="/works">Back to works</Link>
      </nav>
    </main>
  )
}

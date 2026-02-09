import { Link, useParams } from 'react-router-dom'
import { workById } from '../data/works'
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
    <main className="page page-reader">
      <header>
        <h1>{work.title}</h1>
        <p className="subtitle">Work ID: {work.id}</p>
      </header>

      <article className="reader-frame">
        <p>This is a placeholder reader surface for issue #3 routing validation.</p>
      </article>

      <nav>
        <Link to="/works">Back to works</Link>
      </nav>
    </main>
  )
}

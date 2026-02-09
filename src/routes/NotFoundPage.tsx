import { Link } from 'react-router-dom'
import { page, pageNotFoundTitle, subtitle } from '@/styles/app.css'

type NotFoundPageProps = {
  reason?: string
}

export function NotFoundPage({ reason }: NotFoundPageProps) {
  return (
    <main className={page}>
      <h1 className={pageNotFoundTitle}>404</h1>
      <p>Page not found.</p>
      {reason ? <p className={subtitle}>Reason: {reason}</p> : null}
      <Link to="/works">Go to works</Link>
    </main>
  )
}

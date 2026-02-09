import { Link } from 'react-router-dom'

type NotFoundPageProps = {
  reason?: string
}

export function NotFoundPage({ reason }: NotFoundPageProps) {
  return (
    <main className="page page-not-found">
      <h1>404</h1>
      <p>Page not found.</p>
      {reason ? <p className="subtitle">Reason: {reason}</p> : null}
      <Link to="/works">Go to works</Link>
    </main>
  )
}

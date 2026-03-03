import { Link } from 'react-router-dom'
import { page, pageNotFoundTitle, subtitle } from '@/styles/app.css'

type NotFoundPageProps = {
  reason?: string
}

export function NotFoundPage({ reason }: NotFoundPageProps) {
  return (
    <main className={page}>
      <h1 className={pageNotFoundTitle}>404</h1>
      <p>페이지를 찾을 수 없습니다.</p>
      {reason ? <p className={subtitle}>사유: {reason}</p> : null}
      <p className={subtitle}>
        <Link to="/">랜딩으로</Link> · <Link to="/works">메인으로</Link>
      </p>
    </main>
  )
}

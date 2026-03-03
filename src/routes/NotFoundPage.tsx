import { Link } from 'react-router-dom'
import { navLink, page, pageNotFoundTitle, subtitle } from '@/styles/app.css'
import { Text } from '@/ui/Text'

type NotFoundPageProps = {
  reason?: string
}

export function NotFoundPage({ reason }: NotFoundPageProps) {
  return (
    <main className={`${page}`} style={{ textAlign: 'center', paddingTop: '10rem' }}>
      <h1 className={pageNotFoundTitle}>404</h1>
      <Text roleType="title">길을 잃었습니다.</Text>
      <Text roleType="caption" style={{ marginTop: '1rem' }}>
        요청하신 페이지를 찾을 수 없거나 이동되었습니다.
      </Text>
      {reason ? (
        <Text roleType="caption" className={subtitle}>
          사유: {reason}
        </Text>
      ) : null}
      <div style={{ marginTop: '3rem', display: 'flex', justifyContent: 'center', gap: '1rem' }}>
        <Link className={navLink} to="/">
          Home
        </Link>
        <Link className={navLink} to="/works">
          Archive
        </Link>
      </div>
    </main>
  )
}

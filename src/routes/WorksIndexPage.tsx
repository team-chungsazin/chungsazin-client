import { works } from '@/data/works'
import { page, subtitle, surfaceCard, workList } from '@/styles/app.css'
import { LinkButton } from '@/ui/LinkButton'
import { Text } from '@/ui/Text'

export function WorksIndexPage() {
  return (
    <main className={page}>
      <header>
        <Text as="h1" roleType="display">
          Works
        </Text>
        <Text roleType="caption">Select a work to open the reader.</Text>
      </header>

      <ul className={workList}>
        {works.map((work) => (
          <li key={work.id} className={surfaceCard}>
            <Text as="h2" roleType="title">
              {work.title}
            </Text>
            <Text roleType="ui">{work.teaser}</Text>
            <p className={subtitle}>
              <LinkButton to={`/works/${work.id}`}>Open #{work.id}</LinkButton>
            </p>
          </li>
        ))}
      </ul>
    </main>
  )
}

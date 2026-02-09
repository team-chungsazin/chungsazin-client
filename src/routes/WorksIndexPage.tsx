import { Link } from 'react-router-dom'
import { works } from '../data/works'

export function WorksIndexPage() {
  return (
    <main className="page page-index">
      <header>
        <h1>Works</h1>
        <p className="subtitle">Select a work to open the reader.</p>
      </header>

      <ul className="work-list">
        {works.map((work) => (
          <li key={work.id} className="work-card">
            <h2>{work.title}</h2>
            <p>{work.teaser}</p>
            <Link to={`/works/${work.id}`}>Open #{work.id}</Link>
          </li>
        ))}
      </ul>
    </main>
  )
}

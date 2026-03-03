import { Link, useNavigate, useParams } from 'react-router-dom'
import { aboutData } from '@/data/about'
import { useScroll } from '@/hooks/useScroll'
import {
  headerNav,
  navLink,
  page,
  pageHeader,
  pageHeaderHidden,
  subtitle,
  titleGroup,
} from '@/styles/app.css'
import { Text } from '@/ui/Text'
import * as styles from './AboutPage.css'

interface AboutPageProps {
  mode?: 'overview' | 'project' | 'team-member'
}

export function AboutPage({ mode = 'overview' }: AboutPageProps) {
  const { isScrollingUp } = useScroll()
  const { id } = useParams()
  const navigate = useNavigate()

  const handleProjectClick = () => {
    navigate('/about/project')
  }

  const renderOverview = () => (
    <div className={styles.aboutContent}>
      <button
        type="button"
        className={styles.introSection}
        onClick={handleProjectClick}
        aria-label="프로젝트 소개 상세보기"
      >
        <Text as="h2" roleType="title" style={{ marginBottom: '1rem' }}>
          프로젝트 소개
        </Text>
        <img src={aboutData.project.heroMedia} alt="Project Hero" className={styles.heroImage} />
        <Text roleType="ui">{aboutData.project.oneLine}</Text>
      </button>

      <section>
        <Text as="h2" roleType="title" style={{ marginBottom: '1.5rem' }}>
          팀원 소개
        </Text>
        <div className={styles.teamGrid}>
          {aboutData.members.map((member) => (
            <Link key={member.id} to={`/about/team/${member.id}`} className={styles.memberTile}>
              <div className={styles.tileImageWrapper}>
                <img src={member.tileImage} alt={member.name} className={styles.tileImage} />
                <div className={styles.tileSeparator} />
              </div>
              <div className={styles.memberInfo}>
                <Text roleType="ui" style={{ fontWeight: 600 }}>
                  {member.name} ({member.role})
                </Text>
                <Text roleType="caption" style={{ opacity: 0.8 }}>
                  {member.oneLine}
                </Text>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  )

  const renderProjectDetail = () => (
    <div className={styles.projectDetailContainer}>
      <button
        type="button"
        className={styles.backButton}
        onClick={() => navigate('/about')}
        aria-label="뒤로 가기"
      >
        ← 뒤로 가기
      </button>
      <Text as="h1" roleType="display" style={{ marginBottom: '2rem' }}>
        프로젝트 상세
      </Text>
      {aboutData.project.sections.map((section) => (
        <section
          key={section.heading || section.body}
          className={styles.projectSection}
          style={{ direction: 'ltr' }}
        >
          <div>
            {section.heading && (
              <Text as="h3" roleType="title" style={{ marginBottom: '1rem' }}>
                {section.heading}
              </Text>
            )}
            {section.body && <Text roleType="ui">{section.body}</Text>}
          </div>
          {section.media && (
            <img src={section.media} alt={section.heading} className={styles.sectionImage} />
          )}
        </section>
      ))}
    </div>
  )

  const renderMemberDetail = () => {
    const member = aboutData.members.find((m) => m.id === id)
    if (!member) return <div>Member not found</div>

    return (
      <div className={styles.memberDetailContainer}>
        <button
          type="button"
          className={styles.backButton}
          onClick={() => navigate('/about')}
          aria-label="뒤로 가기"
        >
          ← 뒤로 가기
        </button>
        <Text as="h1" roleType="display" style={{ marginBottom: '1rem' }}>
          팀원 소개
        </Text>

        <div className={styles.heroCollage}>
          <img
            src={member.heroImages?.[0] || member.tileImage}
            alt="Hero 1"
            className={styles.collageImage}
          />
          <img
            src={member.heroImages?.[1] || member.tileImage}
            alt="Hero 2"
            className={styles.collageImage}
          />
          <img
            src={member.heroImages?.[2] || member.tileImage}
            alt="Hero 3"
            className={styles.collageImage}
          />
        </div>

        <div style={{ marginTop: '2rem' }}>
          <Text as="h2" roleType="title">
            {member.name}
            <Text as="span" roleType="ui" style={{ marginLeft: '0.5rem', opacity: 0.7 }}>
              ({member.role})
            </Text>
          </Text>
          <Text roleType="ui" style={{ marginTop: '0.5rem', fontStyle: 'italic' }}>
            "{member.oneLine}"
          </Text>
        </div>

        {member.qna && (
          <div className={styles.qnaGrid}>
            {member.qna.map((item) => (
              <div key={item.question} className={styles.qnaCard}>
                <Text roleType="ui" style={{ fontWeight: 700, color: 'var(--accent)' }}>
                  Q. {item.question}
                </Text>
                <Text roleType="ui">A. {item.answer}</Text>
              </div>
            ))}
          </div>
        )}
      </div>
    )
  }

  return (
    <main className={page}>
      <header className={`${pageHeader} ${!isScrollingUp ? pageHeaderHidden : ''}`}>
        <div className={titleGroup}>
          <Text as="h1" roleType="display">
            About
          </Text>
          <p className={subtitle}>청사진이 지향하는 가치</p>
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

      {mode === 'overview' && renderOverview()}
      {mode === 'project' && renderProjectDetail()}
      {mode === 'team-member' && renderMemberDetail()}
    </main>
  )
}

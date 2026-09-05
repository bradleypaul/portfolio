import { projects, roles } from '@/data/content'
import styles from './Work.module.css'

export function WorkView() {
  return (
    <div className={styles.page}>
      <div className={styles.sectionHeader}>
        <h2 className={styles.sectionTitle}>Experience</h2>
        <span className={styles.mono}>selected roles</span>
      </div>

      <div className={styles.expList}>
        {roles.map((role) => (
          <div key={role.company + role.period} className={styles.expItem}>
            <div className={styles.expMeta}>
              <div className={styles.expCompany}>{role.company}</div>
              <div className={styles.expPeriod}>{role.period}</div>
            </div>
            <div>
              <div className={styles.expRole}>{role.title}</div>
              <div className={styles.expDesc}>{role.description}</div>
            </div>
          </div>
        ))}
      </div>

      <div className={styles.sectionHeader} style={{ marginTop: '4rem' }}>
        <h2 className={styles.sectionTitle}>Projects</h2>
        <span className={styles.mono}>things I&apos;ve built</span>
      </div>

      <div className={styles.projectsGrid}>
        {projects.map((project) => {
          const className = project.featured
            ? `${styles.projectCard} ${styles.featured}`
            : styles.projectCard

          if (project.url) {
            return (
              <a
                key={project.name}
                href={project.url}
                className={className}
                target="_blank"
                rel="noreferrer"
              >
                <ProjectCardBody project={project} />
              </a>
            )
          }

          return (
            <div key={project.name} className={className}>
              <ProjectCardBody project={project} />
            </div>
          )
        })}
      </div>
    </div>
  )
}

function ProjectCardBody({
  project,
}: {
  project: (typeof projects)[number]
}) {
  return (
    <>
      <span className={styles.projectTag}>{project.tag}</span>
      <span className={styles.projectName}>{project.name}</span>
      <p className={styles.projectDesc}>{project.description}</p>
      <div className={styles.projectTech}>
        {project.tech.map((t) => (
          <span key={t} className={styles.techPill}>
            {t}
          </span>
        ))}
      </div>
      {project.url ? (
        <span className={styles.projectLink}>View on GitHub →</span>
      ) : null}
    </>
  )
}

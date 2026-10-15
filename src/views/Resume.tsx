import { meta, projects, roles } from '@/data/content'
import styles from './Work.module.css'

export function ResumeView() {
  return (
    <div className={styles.page}>
      <div className={styles.sectionHeader}>
        <h2 className={styles.sectionTitle}>Resume</h2>
        <span className={styles.mono}>
          {meta.title} · {meta.location}
        </span>
        <div className={styles.downloads}>
          <a
            href={`${process.env.NEXT_PUBLIC_BASE_PATH}/resume.pdf`}
            download={`${meta.name.replace(/ /g, '-')}-Resume.pdf`}
            className={styles.download}
          >
            Download PDF
          </a>
          <a
            href={`${process.env.NEXT_PUBLIC_BASE_PATH}/resume.docx`}
            download={`${meta.name.replace(/ /g, '-')}-Resume.docx`}
            className={styles.download}
          >
            Download .docx
          </a>
        </div>
      </div>

      <div className={styles.expList}>
        <div className={styles.expItem}>
          <div className={styles.expMeta}>
            <div className={styles.expCompany}>Contact</div>
          </div>
          <div>
            <div className={styles.expDesc}>
              {meta.email} · {meta.github} · {meta.education}
            </div>
          </div>
        </div>
        {roles.map((role) => (
          <div key={role.company + role.period} className={styles.expItem}>
            <div className={styles.expMeta}>
              <div className={styles.expCompany}>{role.company}</div>
              <div className={styles.expPeriod}>{role.period}</div>
              <div className={styles.expPeriod}>{role.location}</div>
            </div>
            <div>
              <div className={styles.expRole}>{role.title}</div>
              <ul className={styles.expHighlights}>
                {role.highlights.map((highlight) => (
                  <li key={highlight.slice(0, 32)}>{highlight}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>

      <div className={styles.sectionHeader} style={{ marginTop: '4rem' }}>
        <h2 className={styles.sectionTitle}>Selected projects</h2>
        <span className={styles.mono}>public work</span>
      </div>

      <div className={styles.expList}>
        {projects.map((project) => (
          <div key={project.name} className={styles.expItem}>
            <div className={styles.expMeta}>
              <div className={styles.expCompany}>{project.tag}</div>
            </div>
            <div>
              <div className={styles.expRole}>
                {project.url ? (
                  <a href={project.url} target="_blank" rel="noreferrer">
                    {project.name}
                  </a>
                ) : (
                  project.name
                )}
              </div>
              <div className={styles.expDesc}>{project.description}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

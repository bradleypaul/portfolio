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
            </div>
            <div>
              <div className={styles.expRole}>{role.title}</div>
              <div className={styles.expDesc}>{role.description}</div>
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
              <div className={styles.expRole}>{project.name}</div>
              <div className={styles.expDesc}>{project.description}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

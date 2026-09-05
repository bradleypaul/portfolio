import {
  aboutExploring,
  aboutInterests,
  aboutLookingFor,
  aboutParagraphs,
} from '@/data/content'
import styles from './About.module.css'

export function AboutView() {
  return (
    <div className={styles.page}>
      <div className={styles.sectionHeader}>
        <h2 className={styles.sectionTitle}>About</h2>
      </div>

      <div className={styles.grid}>
        <div className={styles.body}>
          {aboutParagraphs.map((paragraph) => (
            <p key={paragraph.slice(0, 24)}>{paragraph}</p>
          ))}
        </div>

        <div className={styles.aside}>
          <div className={styles.asideBlock}>
            <div className={styles.asideLabel}>Interests</div>
            <ul className={styles.asideList}>
              {aboutInterests.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>

          <div className={styles.asideBlock}>
            <div className={styles.asideLabel}>Currently exploring</div>
            <ul className={styles.asideList}>
              {aboutExploring.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>

          <div className={styles.asideBlock}>
            <div className={styles.asideLabel}>Looking for</div>
            <ul className={styles.asideList}>
              {aboutLookingFor.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

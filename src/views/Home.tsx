import Link from 'next/link'
import { meta } from '@/data/content'
import styles from './Home.module.css'

export function HomeView() {
  return (
    <div className={styles.page}>
      <p className={styles.eyebrow}>{meta.title}</p>
      <div className={styles.grid}>
        <div className={styles.left}>
          <h1 className={styles.headline}>
            Building things{' '}
            <span className={styles.accent}>that hold up.</span>
          </h1>
          <p className={styles.desc}>
            {meta.yearsExperience} years across startups and large platforms —
            React, TypeScript, GraphQL, Node, GCP. I own architecture through
            delivery, and lately an AI pipeline that takes a ticket to a PR.
          </p>
          <div className={styles.cta}>
            <Link href="/work" className={styles.btnPrimary}>
              View work
            </Link>
            <Link href="/stack" className={styles.btnGhost}>
              My stack →
            </Link>
          </div>
        </div>

        <div className={styles.stats}>
          <div className={styles.statRow}>
            <span className={styles.statLabel}>Years experience</span>
            <span className={styles.statNum}>{meta.yearsExperience}</span>
          </div>
          <div className={styles.statRow}>
            <span className={styles.statLabel}>Companies shipped at</span>
            <span className={styles.statNum}>{meta.companiesCount}</span>
          </div>
          <div className={styles.statRow}>
            <span className={styles.statLabel}>Currently open to</span>
            <span className={styles.statAvail}>{meta.availability}</span>
          </div>
        </div>
      </div>
    </div>
  )
}

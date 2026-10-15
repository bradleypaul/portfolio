import Link from 'next/link'
import homeStyles from './Home.module.css'
import styles from './NotFound.module.css'

export function NotFoundView() {
  return (
    <div className={styles.page}>
      <p className={styles.eyebrow}>404</p>
      <h1 className={styles.heading}>Nothing here.</h1>
      <p className={styles.desc}>
        That page doesn&apos;t exist — it may have moved, or the link has a
        typo.
      </p>
      <div className={styles.cta}>
        <Link href="/" className={homeStyles.btnPrimary}>
          Home
        </Link>
        <Link href="/work" className={homeStyles.btnGhost}>
          View work →
        </Link>
      </div>
    </div>
  )
}

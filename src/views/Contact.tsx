import Link from 'next/link'
import { contactLinks } from '@/data/content'
import styles from './Contact.module.css'

export function ContactView() {
  return (
    <div className={styles.page}>
      <div className={styles.inner}>
        <h2 className={styles.heading}>Let&apos;s talk.</h2>
        <p className={styles.desc}>
          Open to senior and staff-level remote engineering roles. Best reached
          by email — I respond within a day.
        </p>

        <div className={styles.links}>
          {contactLinks.map(({ label, value, href }) => {
            const external = href.startsWith('http')
            const mailto = href.startsWith('mailto:')
            const className = styles.link

            if (external) {
              return (
                <a
                  key={label}
                  href={href}
                  className={className}
                  target="_blank"
                  rel="noreferrer"
                >
                  <ContactRow label={label} value={value} />
                </a>
              )
            }

            if (mailto) {
              return (
                <a key={label} href={href} className={className}>
                  <ContactRow label={label} value={value} />
                </a>
              )
            }

            return (
              <Link key={label} href={href} className={className}>
                <ContactRow label={label} value={value} />
              </Link>
            )
          })}
        </div>
      </div>
    </div>
  )
}

function ContactRow({ label, value }: { label: string; value: string }) {
  return (
    <>
      <span className={styles.linkLabel}>{label}</span>
      <span className={styles.linkValue}>{value}</span>
      <span className={styles.linkArrow}>→</span>
    </>
  )
}

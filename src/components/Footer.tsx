import Link from 'next/link'
import { meta } from '@/data/content'
import styles from './Footer.module.css'

const links = [
  { href: '/work', label: 'Work' },
  { href: '/stack', label: 'Stack' },
  { href: '/about', label: 'About' },
  { href: '/resume', label: 'Resume' },
  { href: '/contact', label: 'Contact' },
] as const

export function Footer() {
  return (
    <footer className={styles.footer}>
      <span className={styles.location}>
        {meta.location} — open to remote
      </span>
      <div className={styles.links}>
        {links.map(({ href, label }) => (
          <Link key={href} href={href} className={styles.link}>
            {label}
          </Link>
        ))}
      </div>
    </footer>
  )
}

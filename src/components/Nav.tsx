'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { meta } from '@/data/content'
import styles from './Nav.module.css'

const links = [
  { href: '/work', label: 'Work' },
  { href: '/stack', label: 'Stack' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
] as const

export function Nav() {
  const pathname = usePathname()

  return (
    <nav className={styles.nav}>
      <Link href="/" className={styles.name}>
        {meta.name}
      </Link>
      <ul className={styles.links}>
        {links.map(({ href, label }) => {
          const isActive = pathname === href
          return (
            <li key={href}>
              <Link
                href={href}
                className={isActive ? `${styles.link} ${styles.active}` : styles.link}
              >
                {label}
              </Link>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}

import type { Metadata } from 'next'
import { DM_Mono, DM_Serif_Display, Outfit } from 'next/font/google'
import { Footer } from '@/components/Footer'
import { Nav } from '@/components/Nav'
import { meta, siteDescription, siteUrl } from '@/data/content'
import '@/styles/global.css'

const serif = DM_Serif_Display({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-serif',
})

const mono = DM_Mono({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-mono',
})

const sans = Outfit({
  subsets: ['latin'],
  weight: ['300', '400', '500'],
  variable: '--font-sans',
})

const ogImage = {
  url: '/og.png',
  width: 1200,
  height: 630,
  alt: `${meta.name} — ${meta.title}`,
}

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${meta.name} — ${meta.title}`,
    template: `%s — ${meta.name}`,
  },
  description: siteDescription,
  openGraph: {
    title: `${meta.name} — ${meta.title}`,
    description: siteDescription,
    siteName: meta.name,
    type: 'website',
    images: [ogImage],
  },
  twitter: { card: 'summary_large_image', images: [ogImage] },
  icons: {
    icon: { url: `${process.env.NEXT_PUBLIC_BASE_PATH}/favicon.png`, type: 'image/png' },
  },
}

const personJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: meta.name,
  jobTitle: meta.title,
  url: siteUrl,
  email: `mailto:${meta.email}`,
  address: { '@type': 'PostalAddress', addressLocality: meta.location },
  sameAs: [`https://${meta.github}`],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${serif.variable} ${mono.variable} ${sans.variable}`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
        <div
          style={{
            minHeight: '100vh',
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          <a href="#main" className="skip-link">
            Skip to content
          </a>
          <Nav />
          <main id="main" style={{ flex: 1 }}>
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  )
}

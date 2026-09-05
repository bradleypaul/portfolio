import type { Metadata } from 'next'
import { AboutView } from '@/views/About'

export const metadata: Metadata = {
  title: 'About',
  description: 'Background, interests, and what I am looking for.',
}

export default function AboutPage() {
  return <AboutView />
}

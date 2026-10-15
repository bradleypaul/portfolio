import type { Metadata } from 'next'
import { ContactView } from '@/views/Contact'

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Get in touch — email or GitHub.',
}

export default function ContactPage() {
  return <ContactView />
}

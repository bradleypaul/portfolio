import type { Metadata } from 'next'
import { WorkView } from '@/views/Work'

export const metadata: Metadata = {
  title: 'Work',
  description: 'Experience and selected projects.',
}

export default function WorkPage() {
  return <WorkView />
}

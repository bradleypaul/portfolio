import type { Metadata } from 'next'
import { ResumeView } from '@/views/Resume'

export const metadata: Metadata = {
  title: 'Resume',
  description: 'Experience, education, and selected public projects.',
}

export default function ResumePage() {
  return <ResumeView />
}

import type { Metadata } from 'next'
import { StackView } from '@/views/Stack'

export const metadata: Metadata = {
  title: 'Stack',
  description: 'Core technologies and tools.',
}

export default function StackPage() {
  return <StackView />
}

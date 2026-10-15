import type { Metadata } from 'next'
import { NotFoundView } from '@/views/NotFound'

export const metadata: Metadata = {
  title: 'Not found',
}

export default function NotFound() {
  return <NotFoundView />
}

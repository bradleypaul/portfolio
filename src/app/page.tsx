import type { Metadata } from 'next'
import { HomeView } from '@/views/Home'

export const metadata: Metadata = {
  title: 'Home',
  description:
    'Senior fullstack / product engineer in Austin, TX — React, TypeScript, GraphQL, Node, and public work including jira-bot and redditp-react.',
}

export default function HomePage() {
  return <HomeView />
}

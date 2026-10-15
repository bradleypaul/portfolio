import type { MetadataRoute } from 'next'
import { siteUrl } from '@/data/content'

export const dynamic = 'force-static'

const routes = ['', 'work/', 'stack/', 'about/', 'resume/', 'contact/']

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((route) => ({ url: `${siteUrl}/${route}` }))
}

export const siteUrl = 'https://bradleypaul.github.io/portfolio'

export const meta = {
  name: 'Paul Bradley',
  firstName: 'Paul',
  title: 'Senior Fullstack / Product Engineer',
  tagline: 'Building things that hold up.',
  location: 'Austin, TX',
  availability: 'Remote W-2',
  email: 'bradleypauld@gmail.com',
  github: 'github.com/bradleypaul',
  yearsExperience: '10+',
  companiesCount: '6',
  education: 'Harding University — B.A. Computer Science, 2015',
}

export const siteDescription = `${meta.name} is a ${meta.title} in ${meta.location}. ${meta.yearsExperience} years with React, TypeScript, GraphQL, and Node — open to ${meta.availability} roles.`

export interface Role {
  company: string
  period: string
  title: string
  description: string
}

export const roles: Role[] = [
  {
    company: 'TapTab',
    period: '2025 – Present',
    title: 'Senior Full Stack Engineer',
    description:
      'Pre-seed restaurant management and ordering platform. Partner with the CEO on frontend architecture, data modeling, and product direction. Designed and operate an AI/LLM pipeline that takes a Jira ticket through implementation, tests, and a PR.',
  },
  {
    company: 'Zoro Tools',
    period: '2024 – 2025',
    title: 'Senior Frontend Engineer',
    description:
      'B2B industrial e-commerce. Led React/TypeScript modernization (and a Vue 2→3 companion migration) and A/B tested checkout components to reduce cart abandonment.',
  },
  {
    company: 'Amazon',
    period: '2024',
    title: 'Frontend Developer (Contract)',
    description:
      'Reusable React component library and checkout UI for Amazon retail, aligned to the UX system. High unit and integration coverage on flows used by millions of shoppers.',
  },
  {
    company: 'KERV Interactive',
    period: '2022 – 2024',
    title: 'Frontend Technical Lead',
    description:
      'Primary owner of frontend architecture and product direction. Mentored juniors, cut typical ticket time from 5 days to 3, and migrated five core REST endpoints to GraphQL.',
  },
  {
    company: 'ZenBusiness',
    period: '2021 – 2022',
    title: 'Senior Full Stack Developer',
    description:
      'Business-formation SaaS. Complex React/TypeScript and Apollo/GraphQL on the client; Node/Express microservices on GCP with PostgreSQL and Kubernetes.',
  },
  {
    company: 'NCR',
    period: '2015 – 2021',
    title: 'Full Stack Web Developer II',
    description:
      'Large-scale transaction and payment systems. React and Vue clients with Redux, Node payment microservices, and REST APIs (Express, with supporting Python services).',
  },
]

export interface Project {
  tag: string
  name: string
  description: string
  tech: string[]
  url?: string
  featured?: boolean
}

export const projects: Project[] = [
  {
    tag: 'Open source',
    name: 'redditp-react',
    featured: true,
    description:
      'Fullscreen Reddit slideshow in the spirit of redditp. Multi-subreddit routes, image and video (including Reddit-hosted, YouTube, and RedGifs), preload, and an NSFW preference that survives refresh. Vite proxy in dev; Netlify rewrite rules for production.',
    tech: ['React', 'Vite', 'MUI', 'React Router'],
    url: 'https://github.com/bradleypaul/redditp-react',
  },
  {
    tag: 'CLI',
    name: 'jira-bot',
    description:
      'Rust CLI for the Jira REST API: whoami, issue, comments, JQL search, and project listing. JSON output and a small library API so it can be used from other tools.',
    tech: ['Rust', 'Jira API'],
    url: 'https://github.com/bradleypaul/jira-bot',
  },
  {
    tag: 'Tool',
    name: 'teams-hdmi-watcher',
    description:
      'Python utility for Apple Silicon: watch a USB HDMI capture and fire macOS notifications when motion appears in a corner ROI — useful for Teams toasts on a capture feed.',
    tech: ['Python', 'OpenCV', 'macOS'],
    url: 'https://github.com/bradleypaul/teams-hdmi-watcher',
  },
  {
    tag: 'UI',
    name: 'photo-gallery',
    description:
      'React photo gallery built to show component structure and frontend judgment. Written approach covers caching, upload limits, and responsive image serving as follow-ups.',
    tech: ['React', 'TypeScript', 'Vite'],
    url: 'https://github.com/bradleypaul/photo-gallery',
  },
  {
    tag: 'UI',
    name: 'plan-selection-card',
    description:
      'MUI billing card composed from Card primitives and React context instead of prop drilling. Keyboard-submittable, with a write-up of tradeoffs and where AI helped.',
    tech: ['React', 'TypeScript', 'MUI'],
    url: 'https://github.com/bradleypaul/plan-selection-card',
  },
]

export interface StackItem {
  name: string
  type: string
  primary?: boolean
}

export const coreStack: StackItem[] = [
  { name: 'React', type: 'Frontend', primary: true },
  { name: 'TypeScript', type: 'Language', primary: true },
  { name: 'GraphQL', type: 'API', primary: true },
  { name: 'Node.js', type: 'Runtime', primary: true },
  { name: 'Next.js', type: 'Frontend' },
  { name: 'Apollo', type: 'Data layer' },
  { name: 'Redux', type: 'State' },
  { name: 'Tailwind CSS', type: 'Frontend' },
  { name: 'PostgreSQL', type: 'Database' },
  { name: 'Express', type: 'Backend' },
  { name: 'GCP', type: 'Cloud' },
  { name: 'Kubernetes', type: 'Infra' },
]

export const alsoStack: StackItem[] = [
  { name: 'Vue', type: 'Frontend' },
  { name: 'Python', type: 'Language' },
  { name: 'Rust', type: 'Language' },
  { name: 'REST', type: 'API' },
  { name: 'AWS', type: 'Cloud' },
  { name: 'Azure', type: 'Cloud' },
  { name: 'CI/CD', type: 'Infra' },
  { name: 'LLM tooling', type: 'AI' },
]

export const aboutParagraphs: string[] = [
  `I'm a senior fullstack / product engineer with ${meta.yearsExperience} years of experience — deep React and TypeScript, plus a product-owner mindset. I've shipped at early-stage startups and large platforms (Amazon, NCR), and I work best when I can own architecture through delivery.`,
  'At TapTab I designed and operate an AI/LLM pipeline that takes a Jira ticket through implementation, tests, and a PR, so most of the remaining work is writing the ticket and reviewing the change. I like typed UI, predictable state, and systems that fail in obvious ways.',
  `Outside of engineering I'm interested in food science — dry aging, fermentation, charcuterie — electrical systems, and a long reading list that doesn't get shorter. Currently based in Austin, open to remote roles. ${meta.education}.`,
]

export const aboutInterests: string[] = [
  'Functional programming',
  'Fermentation & food science',
  'Electrical systems & EVs',
  'History & linguistics',
  'Menswear & tailoring',
]

export const aboutExploring: string[] = [
  'AI/LLM ticket-to-PR workflows',
  'GCP infrastructure depth',
  'Rust systems tooling',
]

export const aboutLookingFor: string[] = [
  'Remote W-2 roles',
  'Senior / Staff IC track',
  'Architectural ownership',
  'Psychological safety',
]

export interface ContactLink {
  label: string
  value: string
  href: string
}

export const contactLinks: ContactLink[] = [
  { label: 'Email', value: meta.email, href: `mailto:${meta.email}` },
  { label: 'GitHub', value: meta.github, href: `https://${meta.github}` },
  { label: 'Resume', value: 'On this site', href: '/resume/' },
]

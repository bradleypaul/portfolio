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
  companiesCount: '7',
  education: 'Harding University — B.A. Computer Science, 2015',
}

export const siteDescription = `${meta.name} is a ${meta.title} in ${meta.location}. ${meta.yearsExperience} years with React, TypeScript, GraphQL, and Node — open to ${meta.availability} roles.`

export interface Role {
  company: string
  period: string
  title: string
  location: string
  highlights: string[]
}

export const roles: Role[] = [
  {
    company: 'TapTab',
    period: '2025 – Present',
    title: 'Senior Full Stack Engineer',
    location: 'Austin, TX',
    highlights: [
      'Lead end-to-end delivery of a pre-seed restaurant management and ordering platform, partnering directly with the CEO on React/TypeScript architecture, data modeling, and product direction.',
      'Designed and operate an AI/LLM-driven development pipeline (jira-bot) that automates ticket implementation, integration and regression testing, and PR creation — reducing manual engineering to ticket writing and PR review while increasing throughput and extending startup runway.',
      'Integrate third-party APIs into React/TypeScript workflows, expanding platform capabilities and streamlining restaurant onboarding and ordering.',
      'Own user data modeling and storage design, maintaining data integrity and scalability as the platform grows.',
      'Overhauled the core React/TypeScript component library, improving consistency, reusability, and developer velocity across the product.',
    ],
  },
  {
    company: 'Zoro Tools',
    period: '2024 – 2025',
    title: 'Senior Frontend Engineer',
    location: 'Austin, TX',
    highlights: [
      'Led frontend modernization for a B2B industrial e-commerce platform serving enterprise customers, shaping React/TypeScript architecture and applying data-driven experimentation to optimize conversion across the purchasing journey.',
      'Upgraded the React/TypeScript codebase to the latest version, strengthening performance, type safety, and developer experience while supporting a companion Vue 2-to-3 migration.',
      'Designed and A/B tested React checkout components to address cart abandonment, using checkout experimentation to improve bottom-of-funnel conversion.',
      'Partnered with product and design teams to guide technical decisions and optimize the B2B e-commerce experience for enterprise purchasing needs.',
      'Ran systematic A/B tests across key purchasing-workflow conversion points, using results to inform data-driven UI improvements.',
    ],
  },
  {
    company: 'Amazon',
    period: '2024',
    title: 'Frontend Developer (Contract)',
    location: 'Remote',
    highlights: [
      'Engineered a reusable JavaScript component library for Amazon’s desktop retail store, standardizing responsive UI against UX specifications and documenting patterns that enabled cross-team adoption.',
      'Delivered checkout components and pixel-perfect workflows for Amazon’s retail system, following design specifications and coding standards through cross-functional collaboration.',
      'Built unit and integration tests across the component library, achieving 95% test coverage and strengthening code quality and compliance with Amazon development practices.',
      'Contributed frontend engineering expertise to large-scale e-commerce systems serving millions of users.',
    ],
  },
  {
    company: 'KERV Interactive',
    period: '2022 – 2024',
    title: 'Frontend Technical Lead',
    location: 'Remote',
    highlights: [
      'Directed front-end architecture and product direction, shaping UI/UX design, mentoring junior developers, and guiding end-to-end implementation strategy across the team.',
      'Migrated five core REST endpoints to GraphQL, reducing API response times by 20% and designing schemas that supported adoption of a microservices architecture.',
      'Streamlined workflows and removed bottlenecks, reducing average ticket development time from five days to three days.',
      'Coordinated cross-departmental support and project planning, authored technical tickets, and ensured timely delivery of initiatives.',
    ],
  },
  {
    company: 'ZenBusiness',
    period: '2021 – 2022',
    title: 'Senior Full Stack Developer',
    location: 'Remote',
    highlights: [
      'Architected complex React and TypeScript components with Apollo Client and Material UI, while mentoring junior developers in partnership with the Director of Engineering.',
      'Improved frontend performance and accessibility using React best practices, including code splitting, lazy loading, and semantic HTML, increasing Lighthouse scores.',
      'Led migration from REST to GraphQL, modernizing data loading and API access through Apollo Server and custom GraphQL fragments.',
      'Owned Node.js and Express microservices for web hosting integration, delivering backend services on GCP with PostgreSQL, SQL, and Kubernetes.',
    ],
  },
  {
    company: 'NCR',
    period: '2019 – 2021',
    title: 'Full Stack Web Developer II',
    location: 'Remote',
    highlights: [
      'Led development of complex React and Vue.js applications with Redux, shaping core component architecture for large-scale transaction systems and supporting reliable transaction processing.',
      'Guided React and Vue component architecture across application development, improving UI consistency and team efficiency.',
      'Developed and maintained Node.js microservices for payment processing integration, strengthening reliability across payment workflows.',
      'Built RESTful APIs with Express and supporting Python services, applying computer science principles to optimize performance in large-scale transaction systems.',
    ],
  },
  {
    company: 'PerfectVision',
    period: '2015 – 2019',
    title: 'Full Stack Web Developer',
    location: 'Little Rock, AR',
    highlights: [
      'Applied Scrum methodologies to improve team velocity and delivery consistency, enabling predictable planning and coordinated execution across development work.',
      'Established testing and development workflows that strengthened code reliability and deployment stability across application releases.',
      'Built scalable, high-performance web applications using JavaScript, CSS, and React, delivering responsive and reliable user experiences.',
      'Resolved complex technical challenges through adaptable development strategies, meeting implementation needs while maintaining delivery goals.',
    ],
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
    tag: 'Tool',
    name: 'jira-bot',
    featured: true,
    description:
      'The open-source core of the ticket-to-PR pipeline I run at TapTab. A Python client for the Jira Cloud REST API plus a Linux watcher: move an assigned ticket to In Progress and it clones the linked repo and checks out a branch. Also reads issues, comments, and JQL, and asks Claude for an implementation plan.',
    tech: ['Python', 'Jira API'],
    url: 'https://github.com/bradleypaul/jira-bot',
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
  {
    tag: 'Open source',
    name: 'redditp-react',
    description:
      'Fullscreen image and video viewer for Reddit in the spirit of redditp. Multi-subreddit routes, Reddit-hosted and YouTube media, and preloading so the next slide is ready. Vite proxy in dev; Netlify rewrite rules for production.',
    tech: ['React', 'Vite', 'MUI', 'React Router'],
    url: 'https://github.com/bradleypaul/redditp-react',
  },
  {
    tag: 'Tool',
    name: 'teams-hdmi-watcher',
    description:
      'Python utility for Apple Silicon: watch a USB HDMI capture and fire macOS notifications when motion appears in a corner ROI — useful for Teams toasts on a capture feed.',
    tech: ['Python', 'OpenCV', 'macOS'],
    url: 'https://github.com/bradleypaul/teams-hdmi-watcher',
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
  `At TapTab I designed and run jira-bot, an AI pipeline that takes a Jira ticket through implementation and tests to a PR, so the human work is writing the ticket and reviewing the change. Its Jira client and ticket watcher are open source. I like typed UI, predictable state, and systems that fail in obvious ways.`,
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

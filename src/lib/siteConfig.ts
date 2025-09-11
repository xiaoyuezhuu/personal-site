export type SocialLinks = {
  email?: string
  github?: string
  linkedin?: string
  twitter?: string
  website?: string
}

export const siteConfig = {
  name: 'Your Name',
  title: 'Data Scientist & Founder',
  avatarSrc: '/avatar.svg',
  social: {
    email: 'mailto:you@example.com',
    github: 'https://github.com/yourhandle',
    linkedin: 'https://www.linkedin.com/in/yourhandle',
    twitter: 'https://twitter.com/yourhandle'
  } as SocialLinks,
  about: {
    summary:
      "I'm a data scientist and founder building AI products. I work across ML modeling, data platforms, and product strategy.",
  },
} as const

export type SiteConfig = typeof siteConfig

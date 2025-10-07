export type SocialLinks = {
  email?: string
  github?: string
  linkedin?: string
  twitter?: string
  website?: string
}

export const siteConfig = {
  name: 'Xiaoyue Zhu, PhD',
  title: 'Data Scientist & Founder',
  avatarSrc: '/2018.jpg',
  social: {
    email: 'mailto:xz1634@pm.me',
    github: 'https://github.com/xiaoyuezhuu',
    linkedin: 'https://www.linkedin.com/in/xiaoyue-zhu',
    twitter: 'https://twitter.com/xiaoyuezhuu'
  } as SocialLinks,
  about: {
    summary:
      "I have the mind of a scientist and the hands of a builder. I thrive on self-directed challenges and ambiguity, working at the intersection of science, data and AI to help people learn, decide and thrive.",
  },
} as const

export type SiteConfig = typeof siteConfig

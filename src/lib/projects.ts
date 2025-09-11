export type Project = {
  title: string
  description: string
  href?: string
  github?: string
  year?: string
  image?: string
  imageAlt?: string
}

export const projects: Project[] = [
  {
    title: 'Amooze.ai',
    year: '2025',
    description:
      'One-prompt restaurant discovery, recommendation, and reservation platform.',
    href: 'https://amooze.ai',
    // Optionally add a thumbnail from your public/ folder or an external URL
    // image: '/images/amooze-thumb.jpg',
    // imageAlt: 'Amooze.ai preview',
  },
  {
    title: 'EdTech ML Platform',
    year: '2022–2025',
    description:
      'Led data science for personalization, experimentation, and learning outcomes modeling.',
  },
  {
    title: 'Neuroscience Research Tools',
    year: '2016–2022',
    description:
      'Built analysis pipelines and models for systems & computational neuroscience.',
  },
]

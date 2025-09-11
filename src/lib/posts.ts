export type Post = {
  slug: string
  title: string
  summary?: string
  date?: string
  content: string
}

export const posts: Post[] = [
  {
    slug: 'how-i-vibe-coded-an-end-to-end-consumer-app-with-no-swe-training',
    title: 'How I vibe coded an end-to-end consumer app with no SWE training',
    date: '2025-01-01',
    summary:
      'Notes on building fast by leaning on AI copilots, product sense, and tight loops.',
    content:
      `This is a placeholder. Replace with your real writing.

In this post, I share how I went from idea to shipped consumer app by:
- Using LLMs to accelerate scaffolding and iteration
- Focusing on user value and short feedback loops
- Staying pragmatic with tooling and scope
`,
  },
  {
    slug: 'ai-cognito-manifesto',
    title: 'AI Cognito Manifesto',
    date: '2025-01-15',
    summary: 'A principles-first view on how humans and AI should co-evolve cognition.',
    content:
      `Placeholder for the AI Cognito Manifesto.

Sketch the core principles:
- Human-in-the-loop alignment
- Cognitive leverage over replacement
- Transparent systems and agency preservation
- Frictionless interfaces for thought amplification
`,
  },
]

export function getPostBySlug(slug: string): Post | undefined {
  return posts.find((p) => p.slug === slug)
}

export function getAllSlugs(): string[] {
  return posts.map((p) => p.slug)
}

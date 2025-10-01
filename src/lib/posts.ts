import fs from 'fs'
import path from 'path'

export type Post = {
  slug: string
  title: string
  summary?: string
  date?: string
  content?: string
  contentPath?: string
}

export const posts: Post[] = [
  {
    slug: 'how-i-vibe-coded-an-end-to-end-consumer-app-with-no-swe-training',
    title: 'How I vibe coded an end-to-end consumer app with no SWE training',
    date: '2025-09-29',
    summary:
      'Notes on building fast by leaning on AI copilots, product sense, and tight loops.',
    contentPath:
      path.join(process.cwd(), 'src/content/posts/how-i-vibe-coded-an-end-to-end-consumer-app-with-no-swe-training.md'),
  },
  // {
  //   slug: 'ai-cognito-manifesto',
  //   title: 'AI Cognito Manifesto',
  //   date: '2025-10-15',
  //   summary: 'A principles-first view on how humans and AI should co-evolve cognition.',
  //   contentPath:
  //     path.join(process.cwd(), 'src/content/posts/ai-cognito-manifesto.md'),
  // },
]

export function getPostBySlug(slug: string): Post | undefined {
  const post = posts.find((p) => p.slug === slug)
  if (!post) return undefined
  if (post.contentPath && !post.content) {
    try {
      const raw = fs.readFileSync(post.contentPath, 'utf-8')
      return { ...post, content: raw }
    } catch (e) {
      return post
    }
  }
  return post
}

export function getAllSlugs(): string[] {
  return posts.map((p) => p.slug)
}

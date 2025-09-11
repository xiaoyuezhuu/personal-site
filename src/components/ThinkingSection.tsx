import { Section } from '@/components/Container'
import { H2, Paragraph } from '@/components/Typography'
import { posts } from '@/lib/posts'
import Link from 'next/link'

export function ThinkingSection() {
  return (
    <Section id="thinking">
      <H2>Thinking</H2>
      <ul className="mt-4 space-y-3 list-disc pl-5">
        {posts.map((post) => (
          <li key={post.slug}>
            <Link href={`/${post.slug}`} className="text-accent underline underline-offset-2 hover:no-underline">
              {post.title}
            </Link>
            {post.summary && (
              <Paragraph className="mt-1 text-sm text-secondary">{post.summary}</Paragraph>
            )}
          </li>
        ))}
      </ul>
    </Section>
  )
}

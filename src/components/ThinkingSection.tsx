import { Container } from '@/components/Container'
import { H2, Paragraph } from '@/components/Typography'
import { posts } from '@/lib/posts'
import Link from 'next/link'

export function ThinkingSection() {
  return (
    <section id="thinking" className="py-6 sm:py-8 lg:py-10">
      <Container size="centered">
        <H2>Thinking</H2>
        <ul className="mt-4 space-y-3 list-disc pl-5 text-lg leading-7">
          {posts.map((post) => (
            <li key={post.slug}>
              <Link href={`/${post.slug}`} className="text-primary underline underline-offset-2 hover:no-underline">
                {post.title}
              </Link>
              {post.summary && (
                <Paragraph className="mt-1 text-base text-secondary leading-7">{post.summary}</Paragraph>
              )}
            </li>
          ))}
        </ul>
      </Container>
    </section>
  )
}

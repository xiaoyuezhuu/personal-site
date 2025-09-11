import { notFound } from 'next/navigation'
import { getPostBySlug, getAllSlugs } from '@/lib/posts'
import { Container, Section } from '@/components/Container'
import { H1, SecondaryText, Paragraph } from '@/components/Typography'

export async function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }))
}

export default function PostPage({ params }: { params: { slug: string } }) {
  const post = getPostBySlug(params.slug)
  if (!post) return notFound()

  return (
    <Section>
      <H1>{post.title}</H1>
      {post.date && (
        <SecondaryText className="mb-6">{new Date(post.date).toLocaleDateString()}</SecondaryText>
      )}
      <article className="prose prose-neutral max-w-none">
        <pre className="whitespace-pre-wrap text-primary text-[15px] leading-7">{post.content}</pre>
      </article>
    </Section>
  )
}

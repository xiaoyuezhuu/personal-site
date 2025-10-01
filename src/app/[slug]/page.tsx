import { notFound } from 'next/navigation'
import { getPostBySlug, getAllSlugs } from '@/lib/posts'
import { Container } from '@/components/Container'
import { H1, SecondaryText, Paragraph } from '@/components/Typography'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'

export async function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }))
}

export default function PostPage({ params }: { params: { slug: string } }) {
  const post = getPostBySlug(params.slug)
  if (!post) return notFound()

  return (
    <section className="py-6 sm:py-8 lg:py-10">
      <Container size="medium">
        <div className="mb-8">
          <Link
            href="/"
            aria-label="Back to home"
            className="inline-flex items-center gap-2 text-sm text-secondary hover:text-accent rounded-md ring-1 ring-black/10 px-3 py-1.5 bg-white/60 backdrop-blur supports-[backdrop-filter]:bg-white/40 hover:bg-white transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to home
          </Link>
        </div>
        <H1>{post.title}</H1>
        {post.date && (
          <SecondaryText className="mb-6">{new Date(post.date).toLocaleDateString()}</SecondaryText>
        )}
        <article className="prose prose-neutral prose-lg max-w-[900px] mx-auto">
          <ReactMarkdown remarkPlugins={[remarkGfm]}>{post.content ?? ''}</ReactMarkdown>
        </article>
      </Container>
    </section>
  )
}

import { Container } from '@/components/Container'
import { Paragraph, SecondaryText } from '@/components/Typography'
import { siteConfig } from '@/lib/siteConfig'

export function AboutSection() {
  return (
    <section id="about" className="pt-1 pb-2">
      <Container size="centered">
        <div className="relative pl-4 sm:pl-5">
          <div className="absolute left-0 top-2 bottom-2 w-0.5 bg-gradient-to-b from-black/10 via-black/10 to-transparent" />
          <SecondaryText className="uppercase tracking-[0.14em] text-[11px] text-secondary/70 mb-2">About</SecondaryText>
          <Paragraph className="max-w-2xl text-base sm:text-lg leading-relaxed tracking-tight text-primary/90 first-line:text-primary">
            {siteConfig.about.summary}
          </Paragraph>
        </div>
      </Container>
    </section>
  )
}

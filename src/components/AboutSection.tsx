import { Section } from '@/components/Container'
import { H2, Paragraph } from '@/components/Typography'
import { siteConfig } from '@/lib/siteConfig'

export function AboutSection() {
  return (
    <Section id="about">
      <H2>About</H2>
      <Paragraph className="max-w-2xl">
        {siteConfig.about.summary}
      </Paragraph>
    </Section>
  )
}

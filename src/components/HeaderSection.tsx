import { siteConfig } from '@/lib/siteConfig'
import { H1, SecondaryText } from '@/components/Typography'
import { Section } from '@/components/Container'
import { SocialLinks } from '@/components/SocialLinks'

export function HeaderSection() {
  const { name, title, avatarSrc } = siteConfig
  return (
    <Section id="home" className="pt-16">
      <div className="flex flex-col sm:flex-row items-center gap-6 sm:gap-8">
        <div className="shrink-0">
          <img
            src={avatarSrc}
            alt={`${name} avatar`}
            className="h-28 w-28 sm:h-32 sm:w-32 rounded-full ring-1 ring-black/5 object-cover bg-gray-100"
            loading="eager"
          />
        </div>
        <div className="text-center sm:text-left">
          <H1 className="mb-2">{name}</H1>
          <SecondaryText className="mb-4">{title}</SecondaryText>
          <SocialLinks />
        </div>
      </div>
    </Section>
  )
}

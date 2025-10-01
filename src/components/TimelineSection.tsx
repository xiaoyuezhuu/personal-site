import { Section } from '@/components/Container'
import { Paragraph, SecondaryText, Link } from '@/components/Typography'
import { timelineEntries } from '@/lib/timeline'
import { parseMarkdownLinks } from '@/lib/markdown'

export function TimelineSection() {
  return (
    <Section id="timeline">
      <div className="relative">
        {/* Vertical line aligned closer to the left */}
        <div className="absolute left-24 sm:left-28 top-0 bottom-0 w-px bg-black/10" />

        <div className="space-y-10">
          {timelineEntries.map((entry, idx) => (
            <div key={idx} className="relative grid grid-cols-[6rem_1fr] sm:grid-cols-[7rem_1fr] gap-4 sm:gap-6">
              {/* Gray dot on the timeline line (refined) */}
              <div className="absolute left-24 sm:left-28 top-3 -translate-x-1/2">
                <div className="relative w-2.5 h-2.5 rounded-full bg-gray-500">
                  {/* subtle inner core */}
                  <div className="absolute inset-0 m-[1px] rounded-full bg-white/40" />
                  {/* soft outer ring */}
                  <div className="absolute -inset-1 rounded-full ring-1 ring-black/10" />
                </div>
              </div>

              {/* Period (left) */}
              <div className="text-right pr-6 sm:pr-8">
                <SecondaryText className="whitespace-nowrap select-none text-base sm:text-lg font-medium">{entry.period}</SecondaryText>
              </div>

              {/* Content (right) */}
              <div>
                <h3 className="mb-2 font-semibold text-xl sm:text-2xl leading-tight font-title text-primary">{entry.title}</h3>
                {entry.description && (
                  <SecondaryText className="text-base sm:text-lg leading-relaxed mb-3">
                    {parseMarkdownLinks(entry.description)}
                  </SecondaryText>
                )}
                {entry.images && entry.images.length > 0 && (
                  <div className="mt-3 grid grid-cols-3 gap-3">
                    {entry.images.map((img, i) => (
                      <div key={i} className="rounded-xl overflow-hidden ring-1 ring-black/10 bg-white">
                        <img
                          src={img.src}
                          alt={img.alt ?? ''}
                          className="w-full h-auto object-contain rounded-xl"
                          loading="lazy"
                        />
                      </div>
                    ))}
                  </div>
                )}
                {entry.links && entry.links.length > 0 && (
                  <div className="space-y-1">
                    {entry.links.map((link, linkIndex) => (
                      <div key={linkIndex}>
                        <Link href={link.url} external className="text-base font-medium">
                          {link.text} →
                        </Link>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  )
}

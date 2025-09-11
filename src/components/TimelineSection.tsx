import { Section } from '@/components/Container'
import { Paragraph, SecondaryText } from '@/components/Typography'
import { timelineEntries } from '@/lib/timeline'

export function TimelineSection() {
  return (
    <Section id="timeline">
      <div className="relative">
        {/* Vertical line aligned closer to the left */}
        <div className="absolute left-16 sm:left-20 top-0 bottom-0 w-px bg-black/10" />

        <div className="space-y-7">
          {timelineEntries.map((entry, idx) => (
            <div key={idx} className="grid grid-cols-[4rem_1fr] sm:grid-cols-[5rem_1fr] gap-3 sm:gap-4">
              {/* Period (left) */}
              <div className="text-right pr-3 sm:pr-4">
                <SecondaryText className="whitespace-nowrap select-none">{entry.period}</SecondaryText>
              </div>

              {/* Content (right) */}
              <div>
                <Paragraph className="mb-1 font-medium text-lg leading-7">{entry.title}</Paragraph>
                {entry.description && (
                  <SecondaryText>{entry.description}</SecondaryText>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  )
}

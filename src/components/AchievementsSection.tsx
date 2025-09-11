import { Section } from '@/components/Container'
import { H2 } from '@/components/Typography'
import { projects } from '@/lib/projects'
import { ProjectCard } from '@/components/ProjectCard'

export function AchievementsSection() {
  return (
    <Section id="achievements">
      <H2>Achievements</H2>
      <div className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2">
        {projects.map((p) => (
          <ProjectCard key={p.title} project={p} />
        ))}
      </div>
    </Section>
  )
}

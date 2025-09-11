import { HeaderSection } from '@/components/HeaderSection'
import { AboutSection } from '@/components/AboutSection'
import { TimelineSection } from '@/components/TimelineSection'
import { AchievementsSection } from '@/components/AchievementsSection'
import { ThinkingSection } from '@/components/ThinkingSection'

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <HeaderSection />
      <AboutSection />
      <TimelineSection />
      <AchievementsSection />
      <ThinkingSection />
    </div>
  )
}

import { HeaderSection } from '@/components/HeaderSection'
import { AboutSection } from '@/components/AboutSection'
import { TimelineSection } from '@/components/TimelineSection'
// import { AchievementsSection } from '@/components/AchievementsSection'
import { ThinkingSection } from '@/components/ThinkingSection'

export default function Home() {
  return (
    <div className="min-h-screen">
      <HeaderSection />
      <AboutSection />

      {/* Divider between bio and timeline */}
      <div className="pt-2 pb-2">
        <div className="w-full h-px bg-black/20"></div>
      </div>

      <TimelineSection />
      {/* Divider between timeline and thinking */}
      <div className="pt-2 pb-2">
        <div className="w-full h-px bg-black/20"></div>
      </div>
      {/* <AchievementsSection /> */}
      <ThinkingSection />
    </div>
  )
}

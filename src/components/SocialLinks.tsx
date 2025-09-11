import { cn } from '@/lib/utils'
import { siteConfig } from '@/lib/siteConfig'
import { Github, Linkedin, Mail, Twitter } from 'lucide-react'

const iconClass = 'h-5 w-5'

export function SocialLinks({ className }: { className?: string }) {
  const { social } = siteConfig
  return (
    <div className={cn('flex items-center gap-4', className)}>
      {social.github && (
        <a href={social.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="text-secondary hover:text-accent transition-colors">
          <Github className={iconClass} />
        </a>
      )}
      {social.linkedin && (
        <a href={social.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-secondary hover:text-accent transition-colors">
          <Linkedin className={iconClass} />
        </a>
      )}
      {social.twitter && (
        <a href={social.twitter} target="_blank" rel="noopener noreferrer" aria-label="Twitter" className="text-secondary hover:text-accent transition-colors">
          <Twitter className={iconClass} />
        </a>
      )}
      {social.email && (
        <a href={social.email} aria-label="Email" className="text-secondary hover:text-accent transition-colors">
          <Mail className={iconClass} />
        </a>
      )}
    </div>
  )
}

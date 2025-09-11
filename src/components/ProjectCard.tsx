import { cn } from '@/lib/utils'
import { ExternalLink, Github } from 'lucide-react'
import type { Project } from '@/lib/projects'
import Image from 'next/image'

export function ProjectCard({ project, className }: { project: Project; className?: string }) {
  return (
    <div className={cn(
      'group rounded-lg border border-black/5 bg-white overflow-hidden shadow-sm transition-shadow hover:shadow-md',
      className
    )}>
      {project.image && (
        <div className="relative aspect-[16/9] w-full bg-black/5">
          <Image
            src={project.image}
            alt={project.imageAlt || project.title}
            fill
            className="object-cover"
            sizes="(min-width: 640px) 50vw, 100vw"
          />
        </div>
      )}

      <div className="p-5">
        <div className="mb-2 flex items-baseline justify-between gap-3">
          <h3 className="text-lg font-semibold text-primary">{project.title}</h3>
          {project.year && (
            <span className="text-xs text-secondary">{project.year}</span>
          )}
        </div>
        <p className="text-sm text-primary/80 leading-relaxed">{project.description}</p>

        {(project.href || project.github) && (
          <div className="mt-4 flex items-center justify-end gap-3">
            {project.github && (
              <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-secondary hover:text-accent">
                <Github className="h-4 w-4" />
              </a>
            )}
            {project.href && (
              <a href={project.href} target="_blank" rel="noopener noreferrer" className="text-secondary hover:text-accent">
                <ExternalLink className="h-4 w-4" />
              </a>
            )}
          </div>
        )}
      </div>
    </div>
  )
}

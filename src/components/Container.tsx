import { ReactNode } from 'react'
import { cn } from '@/lib/utils'

interface ContainerProps {
  children: ReactNode
  className?: string
  size?: 'default' | 'narrow' | 'wide' | 'centered' | 'medium'
}

export function Container({ children, className, size = 'default' }: ContainerProps) {
  const sizeClasses = {
    default: 'max-w-content',
    narrow: 'max-w-2xl',
    wide: 'max-w-4xl',
    centered: 'max-w-content-centered',
    medium: 'max-w-content-medium'
  }

  return (
    <div className={cn(
      'mx-auto px-6 sm:px-8',
      sizeClasses[size],
      className
    )}>
      {children}
    </div>
  )
}

interface SectionProps {
  children: ReactNode
  className?: string
  id?: string
}

export function Section({ children, className, id }: SectionProps) {
  return (
    <section
      id={id}
      className={cn(
        'py-6 sm:py-8 lg:py-10',
        className
      )}
    >
      <Container>
        {children}
      </Container>
    </section>
  )
}

import { ReactNode } from 'react'
import { cn } from '@/lib/utils'

interface ContainerProps {
  children: ReactNode
  className?: string
  size?: 'default' | 'narrow' | 'wide'
}

export function Container({ children, className, size = 'default' }: ContainerProps) {
  const sizeClasses = {
    default: 'max-w-content',
    narrow: 'max-w-2xl',
    wide: 'max-w-4xl'
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
        'py-12 sm:py-16 lg:py-20',
        className
      )}
    >
      <Container>
        {children}
      </Container>
    </section>
  )
}

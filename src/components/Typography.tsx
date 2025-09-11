import { ReactNode } from 'react'
import { cn } from '@/lib/utils'

interface TypographyProps {
  children: ReactNode
  className?: string
}

export function H1({ children, className }: TypographyProps) {
  return (
    <h1 className={cn(
      "text-4xl sm:text-5xl font-bold tracking-tight text-primary mb-4",
      className
    )}>
      {children}
    </h1>
  )
}

export function H2({ children, className }: TypographyProps) {
  return (
    <h2 className={cn(
      "text-2xl sm:text-3xl font-semibold text-primary mb-3",
      className
    )}>
      {children}
    </h2>
  )
}

export function H3({ children, className }: TypographyProps) {
  return (
    <h3 className={cn(
      "text-xl sm:text-2xl font-medium text-primary mb-2",
      className
    )}>
      {children}
    </h3>
  )
}

export function Paragraph({ children, className }: TypographyProps) {
  return (
    <p className={cn(
      "text-base text-primary leading-relaxed mb-4",
      className
    )}>
      {children}
    </p>
  )
}

export function SecondaryText({ children, className }: TypographyProps) {
  return (
    <p className={cn(
      "text-sm text-secondary leading-relaxed",
      className
    )}>
      {children}
    </p>
  )
}

interface LinkProps extends TypographyProps {
  href: string
  external?: boolean
}

export function Link({ children, href, external = false, className }: LinkProps) {
  return (
    <a
      href={href}
      target={external ? '_blank' : undefined}
      rel={external ? 'noopener noreferrer' : undefined}
      className={cn(
        "text-accent underline decoration-1 underline-offset-2 link-hover",
        className
      )}
    >
      {children}
    </a>
  )
}

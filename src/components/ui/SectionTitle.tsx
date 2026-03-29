import { cn } from '@/lib/utils'

interface SectionTitleProps {
  title: string
  subtitle?: string
  centered?: boolean
  className?: string
}

export function SectionTitle({ title, subtitle, centered = true, className }: SectionTitleProps) {
  return (
    <div className={cn(centered && 'text-center', 'mb-10', className)}>
      <h2 className="font-heading text-3xl md:text-4xl font-bold text-rose-dark">{title}</h2>
      {subtitle && (
        <p className="mt-3 text-base md:text-lg text-rose-dark/70 max-w-2xl mx-auto">{subtitle}</p>
      )}
      <div className={cn('mt-4 h-1 w-16 rounded-full bg-cherry', centered && 'mx-auto')} />
    </div>
  )
}

import { cn } from '@/lib/utils'

interface BadgeProps {
  variant?: 'default' | 'success' | 'new' | 'season'
  children: React.ReactNode
  className?: string
}

export function Badge({ variant = 'default', children, className }: BadgeProps) {
  const variants = {
    default: 'bg-cherry/10 text-cherry',
    success: 'bg-leaf/10 text-leaf-dark',
    new: 'bg-amber-100 text-amber-800',
    season: 'bg-purple-100 text-purple-800',
  }

  return (
    <span className={cn('inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium', variants[variant], className)}>
      {children}
    </span>
  )
}

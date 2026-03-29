import { cn } from '@/lib/utils'

interface ProductImageProps {
  name: string
  category?: string
  className?: string
}

const categoryGradients: Record<string, string> = {
  pasteles: 'from-pink-200 via-rose-100 to-pink-50',
  cupcakes: 'from-purple-200 via-pink-100 to-purple-50',
  galletas: 'from-amber-200 via-orange-100 to-amber-50',
  postres: 'from-rose-200 via-pink-100 to-rose-50',
  panes: 'from-amber-200 via-yellow-100 to-amber-50',
  temporada: 'from-emerald-200 via-green-100 to-emerald-50',
}

const categoryEmojis: Record<string, string> = {
  pasteles: '🎂',
  cupcakes: '🧁',
  galletas: '🍪',
  postres: '🍰',
  panes: '🍞',
  temporada: '🌸',
}

export function ProductImage({ name, category = 'pasteles', className }: ProductImageProps) {
  const gradient = categoryGradients[category] || categoryGradients.pasteles
  const emoji = categoryEmojis[category] || '🍰'

  return (
    <div className={cn('relative bg-gradient-to-br overflow-hidden flex items-center justify-center', gradient, className)}>
      <div className="text-center p-4">
        <span className="text-5xl md:text-6xl block mb-2">{emoji}</span>
        <span className="text-xs md:text-sm text-rose-dark/50 font-medium line-clamp-2">{name}</span>
      </div>
    </div>
  )
}

import { Category } from '@/types/product'

export const categories: Category[] = [
  {
    slug: 'pasteles',
    name: 'Pasteles',
    description: 'Pasteles artesanales para toda ocasion',
    gradient: 'from-cherry/20 to-rose/10',
    icon: '🎂',
  },
  {
    slug: 'cupcakes',
    name: 'Cupcakes',
    description: 'Cupcakes decorados a mano con ingredientes premium',
    gradient: 'from-pink-200/40 to-cherry/10',
    icon: '🧁',
  },
  {
    slug: 'galletas',
    name: 'Galletas',
    description: 'Galletas artesanales decoradas para regalar',
    gradient: 'from-amber-100/40 to-orange-100/30',
    icon: '🍪',
  },
  {
    slug: 'postres',
    name: 'Postres',
    description: 'Postres individuales y para compartir',
    gradient: 'from-purple-100/30 to-cherry/10',
    icon: '🍰',
  },
  {
    slug: 'panes',
    name: 'Panes',
    description: 'Pan artesanal horneado diariamente',
    gradient: 'from-amber-100/30 to-yellow-50/40',
    icon: '🍞',
  },
  {
    slug: 'temporada',
    name: 'Temporada',
    description: 'Productos especiales de temporada',
    gradient: 'from-leaf/10 to-emerald-50/30',
    icon: '🌸',
  },
]

export function getCategoryBySlug(slug: string): Category | undefined {
  return categories.find((c) => c.slug === slug)
}

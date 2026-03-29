'use client'

import Link from 'next/link'
import { cn } from '@/lib/utils'
import { categories } from '@/data/categories'

interface CategoryFilterProps {
  activeCategory?: string
}

export function CategoryFilter({ activeCategory }: CategoryFilterProps) {
  return (
    <div className="flex flex-wrap gap-2">
      <Link
        href="/tienda"
        className={cn(
          'px-4 py-2 rounded-full text-sm font-medium transition-all',
          !activeCategory
            ? 'bg-cherry text-white'
            : 'bg-cream text-rose-dark hover:bg-cherry/10'
        )}
      >
        Todos
      </Link>
      {categories.map((cat) => (
        <Link
          key={cat.slug}
          href={`/tienda/${cat.slug}`}
          className={cn(
            'px-4 py-2 rounded-full text-sm font-medium transition-all',
            activeCategory === cat.slug
              ? 'bg-cherry text-white'
              : 'bg-cream text-rose-dark hover:bg-cherry/10'
          )}
        >
          <span className="mr-1">{cat.icon}</span>
          {cat.name}
        </Link>
      ))}
    </div>
  )
}

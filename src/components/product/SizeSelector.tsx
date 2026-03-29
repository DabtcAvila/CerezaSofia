'use client'

import { cn } from '@/lib/utils'
import { ProductSize } from '@/types/product'
import { formatPrice } from '@/data/products'

interface SizeSelectorProps {
  sizes: ProductSize[]
  selected: string
  onSelect: (label: string) => void
}

export function SizeSelector({ sizes, selected, onSelect }: SizeSelectorProps) {
  return (
    <div className="space-y-2">
      <label className="block text-sm font-medium text-rose-dark">Tamano</label>
      <div className="flex flex-wrap gap-2">
        {sizes.map((size) => (
          <button
            key={size.label}
            onClick={() => onSelect(size.label)}
            className={cn(
              'px-4 py-2.5 rounded-xl border-2 text-sm font-medium transition-all',
              selected === size.label
                ? 'border-cherry bg-cherry/5 text-cherry'
                : 'border-gray-200 text-rose-dark/70 hover:border-cherry/30'
            )}
          >
            <span className="block font-semibold">{size.label}</span>
            <span className="text-xs">{formatPrice(size.priceInCents)}</span>
            {size.serves && <span className="block text-xs opacity-60">{size.serves}</span>}
          </button>
        ))}
      </div>
    </div>
  )
}

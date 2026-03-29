'use client'

import Link from 'next/link'
import { Trash2, Minus, Plus } from 'lucide-react'
import { CartItem } from '@/types/cart'
import { ProductImage } from '@/components/ui/ProductImage'
import { useCartStore } from '@/store/cart-store'
import { formatPrice } from '@/data/products'

interface CartItemRowProps {
  item: CartItem
}

export function CartItemRow({ item }: CartItemRowProps) {
  const { updateQuantity, removeItem } = useCartStore()

  return (
    <div className="flex gap-4 py-4 border-b border-gray-100 last:border-0">
      {/* Image */}
      <Link href={`/producto/${item.slug}`} className="shrink-0">
        <div className="w-20 h-20 rounded-xl overflow-hidden">
          <ProductImage name={item.name} className="w-full h-full" />
        </div>
      </Link>

      {/* Info */}
      <div className="flex-1 min-w-0">
        <Link href={`/producto/${item.slug}`} className="font-heading font-semibold text-rose-dark hover:text-cherry transition-colors line-clamp-1">
          {item.name}
        </Link>
        {item.selectedSize && (
          <p className="text-xs text-rose-dark/50 mt-0.5">{item.selectedSize}</p>
        )}
        <p className="text-sm font-medium text-cherry mt-1">
          {formatPrice(item.priceInCents)}
        </p>

        {/* Quantity controls */}
        <div className="flex items-center justify-between mt-2">
          <div className="flex items-center border border-gray-200 rounded-full">
            <button
              onClick={() => updateQuantity(item.productId, item.quantity - 1, item.selectedSize)}
              className="p-1.5 hover:bg-cream rounded-l-full transition-colors"
              aria-label="Disminuir"
            >
              <Minus size={14} />
            </button>
            <span className="w-8 text-center text-sm font-medium">{item.quantity}</span>
            <button
              onClick={() => updateQuantity(item.productId, Math.min(10, item.quantity + 1), item.selectedSize)}
              className="p-1.5 hover:bg-cream rounded-r-full transition-colors"
              aria-label="Aumentar"
            >
              <Plus size={14} />
            </button>
          </div>

          <div className="flex items-center gap-3">
            <span className="text-sm font-bold text-rose-dark">
              {formatPrice(item.priceInCents * item.quantity)}
            </span>
            <button
              onClick={() => removeItem(item.productId, item.selectedSize)}
              className="p-1.5 text-gray-400 hover:text-red-500 transition-colors"
              aria-label="Eliminar"
            >
              <Trash2 size={16} />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

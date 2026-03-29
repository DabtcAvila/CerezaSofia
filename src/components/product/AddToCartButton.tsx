'use client'

import { useState } from 'react'
import { ShoppingBag, Minus, Plus, Check } from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { useCartStore } from '@/store/cart-store'
import { Product } from '@/types/product'
import toast from 'react-hot-toast'

interface AddToCartButtonProps {
  product: Product
  selectedSize?: string
  priceInCents: number
}

export function AddToCartButton({ product, selectedSize, priceInCents }: AddToCartButtonProps) {
  const [qty, setQty] = useState(1)
  const [added, setAdded] = useState(false)
  const addItem = useCartStore((s) => s.addItem)

  const handleAdd = () => {
    addItem({
      productId: product.id,
      name: product.name,
      slug: product.slug,
      priceInCents,
      quantity: qty,
      selectedSize,
      image: product.images[0] || '',
    })
    setAdded(true)
    toast.success(`${product.name} agregado al carrito`)
    setTimeout(() => setAdded(false), 2000)
  }

  return (
    <div className="space-y-4">
      {/* Quantity selector */}
      <div className="flex items-center gap-3">
        <span className="text-sm font-medium text-rose-dark">Cantidad:</span>
        <div className="flex items-center border border-gray-200 rounded-full">
          <button
            onClick={() => setQty((q) => Math.max(1, q - 1))}
            className="p-2 hover:bg-cream rounded-l-full transition-colors"
            aria-label="Disminuir cantidad"
          >
            <Minus size={16} />
          </button>
          <span className="w-10 text-center font-medium text-sm">{qty}</span>
          <button
            onClick={() => setQty((q) => Math.min(10, q + 1))}
            className="p-2 hover:bg-cream rounded-r-full transition-colors"
            aria-label="Aumentar cantidad"
          >
            <Plus size={16} />
          </button>
        </div>
      </div>

      <Button onClick={handleAdd} size="lg" className="w-full" disabled={added}>
        {added ? (
          <>
            <Check size={18} className="mr-2" />
            Agregado
          </>
        ) : (
          <>
            <ShoppingBag size={18} className="mr-2" />
            Agregar al Carrito
          </>
        )}
      </Button>
    </div>
  )
}

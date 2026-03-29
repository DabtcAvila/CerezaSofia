'use client'

import { useState } from 'react'
import Link from 'next/link'
import { ChevronRight } from 'lucide-react'
import { Product } from '@/types/product'
import { ProductImage } from '@/components/ui/ProductImage'
import { Badge } from '@/components/ui/Badge'
import { SizeSelector } from './SizeSelector'
import { AddToCartButton } from './AddToCartButton'
import { formatPrice } from '@/data/products'
import { getCategoryBySlug } from '@/data/categories'

interface ProductDetailProps {
  product: Product
}

export function ProductDetail({ product }: ProductDetailProps) {
  const [selectedSize, setSelectedSize] = useState(
    product.sizes?.[0]?.label || ''
  )

  const currentPrice = product.sizes
    ? product.sizes.find((s) => s.label === selectedSize)?.priceInCents || product.sizes[0].priceInCents
    : product.priceInCents

  const category = getCategoryBySlug(product.category)

  const tagLabels: Record<string, { label: string; variant: 'default' | 'success' | 'new' | 'season' }> = {
    bestseller: { label: 'Mas Vendido', variant: 'default' },
    nuevo: { label: 'Nuevo', variant: 'new' },
    temporada: { label: 'Temporada', variant: 'season' },
  }

  return (
    <div>
      {/* Breadcrumb */}
      <nav className="flex items-center gap-1 text-sm text-rose-dark/60 mb-6">
        <Link href="/" className="hover:text-cherry transition-colors">Inicio</Link>
        <ChevronRight size={14} />
        <Link href="/tienda" className="hover:text-cherry transition-colors">Tienda</Link>
        <ChevronRight size={14} />
        {category && (
          <>
            <Link href={`/tienda/${product.category}`} className="hover:text-cherry transition-colors">
              {category.name}
            </Link>
            <ChevronRight size={14} />
          </>
        )}
        <span className="text-rose-dark">{product.name}</span>
      </nav>

      <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
        {/* Image */}
        <div className="aspect-square rounded-2xl overflow-hidden">
          <ProductImage
            name={product.name}
            category={product.category}
            className="w-full h-full"
          />
        </div>

        {/* Info */}
        <div className="space-y-6">
          {/* Tags */}
          {product.tags.length > 0 && (
            <div className="flex gap-2">
              {product.tags.map((tag) => {
                const t = tagLabels[tag]
                return t ? <Badge key={tag} variant={t.variant}>{t.label}</Badge> : null
              })}
            </div>
          )}

          <div>
            <p className="text-sm text-cherry font-medium uppercase tracking-wide mb-1">
              {category?.name}
            </p>
            <h1 className="font-heading text-3xl md:text-4xl font-bold text-rose-dark">
              {product.name}
            </h1>
          </div>

          <p className="text-2xl font-bold text-cherry">
            {formatPrice(currentPrice)}
          </p>

          <p className="text-rose-dark/70 leading-relaxed">
            {product.description}
          </p>

          {/* Size selector */}
          {product.sizes && (
            <SizeSelector
              sizes={product.sizes}
              selected={selectedSize}
              onSelect={setSelectedSize}
            />
          )}

          {/* Add to cart */}
          <AddToCartButton
            product={product}
            selectedSize={selectedSize || undefined}
            priceInCents={currentPrice}
          />

          {/* Info notes */}
          <div className="border-t border-gray-100 pt-4 space-y-2 text-sm text-rose-dark/60">
            <p>📦 Pedidos con al menos 48 horas de anticipacion</p>
            <p>🚚 Entregas en CDMX y Estado de Mexico</p>
            <p>💬 Confirma tu pedido por WhatsApp</p>
          </div>
        </div>
      </div>
    </div>
  )
}

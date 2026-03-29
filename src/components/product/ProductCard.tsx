import Link from 'next/link'
import { Product } from '@/types/product'
import { Badge } from '@/components/ui/Badge'
import { ProductImage } from '@/components/ui/ProductImage'
import { formatPrice } from '@/data/products'

interface ProductCardProps {
  product: Product
}

export function ProductCard({ product }: ProductCardProps) {
  const tagLabels: Record<string, { label: string; variant: 'default' | 'success' | 'new' | 'season' }> = {
    bestseller: { label: 'Mas Vendido', variant: 'default' },
    nuevo: { label: 'Nuevo', variant: 'new' },
    temporada: { label: 'Temporada', variant: 'season' },
  }

  return (
    <Link
      href={`/producto/${product.slug}`}
      className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
    >
      <div className="relative aspect-square">
        <ProductImage
          name={product.name}
          category={product.category}
          className="w-full h-full"
        />
        {product.tags.length > 0 && (
          <div className="absolute top-3 left-3 flex gap-1.5">
            {product.tags.map((tag) => {
              const t = tagLabels[tag]
              return t ? (
                <Badge key={tag} variant={t.variant}>{t.label}</Badge>
              ) : null
            })}
          </div>
        )}
      </div>
      <div className="p-4">
        <p className="text-xs text-cherry font-medium uppercase tracking-wide mb-1">
          {product.category}
        </p>
        <h3 className="font-heading text-lg font-semibold text-rose-dark group-hover:text-cherry transition-colors line-clamp-1">
          {product.name}
        </h3>
        <p className="text-sm text-rose-dark/60 mt-1 line-clamp-2">
          {product.shortDescription}
        </p>
        <div className="mt-3 flex items-center justify-between">
          <span className="text-lg font-bold text-cherry">
            {product.sizes
              ? `Desde ${formatPrice(product.sizes[0].priceInCents)}`
              : formatPrice(product.priceInCents)}
          </span>
        </div>
      </div>
    </Link>
  )
}

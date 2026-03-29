export type CategorySlug =
  | 'pasteles'
  | 'cupcakes'
  | 'galletas'
  | 'postres'
  | 'panes'
  | 'temporada'

export interface ProductSize {
  label: string
  priceInCents: number
  serves?: string
}

export interface Product {
  id: string
  slug: string
  name: string
  description: string
  shortDescription: string
  category: CategorySlug
  priceInCents: number
  sizes?: ProductSize[]
  tags: ('bestseller' | 'nuevo' | 'temporada')[]
  images: string[]
  available: boolean
}

export interface Category {
  slug: CategorySlug
  name: string
  description: string
  gradient: string
  icon: string
}

import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { Container } from '@/components/ui/Container'
import { SectionTitle } from '@/components/ui/SectionTitle'
import { CategoryFilter } from '@/components/product/CategoryFilter'
import { ProductGrid } from '@/components/product/ProductGrid'
import { getProductsByCategory } from '@/data/products'
import { getCategoryBySlug, categories } from '@/data/categories'

interface Props {
  params: Promise<{ category: string }>
}

export function generateStaticParams() {
  return categories.map((c) => ({ category: c.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { category } = await params
  const cat = getCategoryBySlug(category)
  if (!cat) return { title: 'Categoria no encontrada' }
  return {
    title: cat.name,
    description: cat.description,
  }
}

export default async function CategoryPage({ params }: Props) {
  const { category } = await params
  const cat = getCategoryBySlug(category)
  if (!cat) notFound()

  const categoryProducts = getProductsByCategory(category)

  return (
    <section className="py-10 md:py-16">
      <Container>
        <SectionTitle
          title={cat.name}
          subtitle={cat.description}
        />
        <div className="mb-8">
          <CategoryFilter activeCategory={category} />
        </div>
        <ProductGrid products={categoryProducts} />
      </Container>
    </section>
  )
}

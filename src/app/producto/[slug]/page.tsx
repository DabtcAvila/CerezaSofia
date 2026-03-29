import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { Container } from '@/components/ui/Container'
import { ProductDetail } from '@/components/product/ProductDetail'
import { ProductGrid } from '@/components/product/ProductGrid'
import { SectionTitle } from '@/components/ui/SectionTitle'
import { getProductBySlug, getProductsByCategory, products } from '@/data/products'

interface Props {
  params: Promise<{ slug: string }>
}

export function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const product = getProductBySlug(slug)
  if (!product) return { title: 'Producto no encontrado' }
  return {
    title: product.name,
    description: product.shortDescription,
  }
}

export default async function ProductPage({ params }: Props) {
  const { slug } = await params
  const product = getProductBySlug(slug)
  if (!product) notFound()

  const related = getProductsByCategory(product.category)
    .filter((p) => p.id !== product.id)
    .slice(0, 4)

  return (
    <section className="py-10 md:py-16">
      <Container>
        <ProductDetail product={product} />

        {related.length > 0 && (
          <div className="mt-16">
            <SectionTitle title="Tambien te puede gustar" />
            <ProductGrid products={related} />
          </div>
        )}
      </Container>
    </section>
  )
}

import { Metadata } from 'next'
import { Container } from '@/components/ui/Container'
import { SectionTitle } from '@/components/ui/SectionTitle'
import { CategoryFilter } from '@/components/product/CategoryFilter'
import { ProductGrid } from '@/components/product/ProductGrid'
import { products } from '@/data/products'

export const metadata: Metadata = {
  title: 'Tienda',
  description: 'Explora nuestro catalogo completo de pasteles, cupcakes, galletas y postres artesanales.',
}

export default function TiendaPage() {
  const available = products.filter((p) => p.available)

  return (
    <section className="py-10 md:py-16">
      <Container>
        <SectionTitle
          title="Nuestra Tienda"
          subtitle="Todos nuestros productos artesanales, hechos con los mejores ingredientes"
        />
        <div className="mb-8">
          <CategoryFilter />
        </div>
        <ProductGrid products={available} />
      </Container>
    </section>
  )
}

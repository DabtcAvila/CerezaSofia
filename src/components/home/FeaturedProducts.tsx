import { Container } from '@/components/ui/Container'
import { SectionTitle } from '@/components/ui/SectionTitle'
import { ProductCard } from '@/components/product/ProductCard'
import { getFeaturedProducts } from '@/data/products'
import { Button } from '@/components/ui/Button'

export function FeaturedProducts() {
  const featured = getFeaturedProducts()

  return (
    <section className="py-16 md:py-20 bg-cream">
      <Container>
        <SectionTitle
          title="Los Mas Pedidos"
          subtitle="Nuestras creaciones favoritas de nuestros clientes"
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featured.slice(0, 4).map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
        <div className="text-center mt-10">
          <Button href="/tienda" variant="outline" size="lg">
            Ver Todo el Catalogo
          </Button>
        </div>
      </Container>
    </section>
  )
}

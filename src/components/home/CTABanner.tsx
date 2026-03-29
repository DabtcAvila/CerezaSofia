import { Container } from '@/components/ui/Container'
import { Button } from '@/components/ui/Button'

export function CTABanner() {
  return (
    <section className="py-16 md:py-20 bg-gradient-to-r from-cherry to-rose text-white">
      <Container className="text-center">
        <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
          Haz tu pedido hoy
        </h2>
        <p className="text-white/80 text-lg max-w-xl mx-auto mb-8">
          Pidelo ahora y recibelo en 48 horas. Entregas en CDMX y Estado de Mexico.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button href="/tienda" size="lg" className="bg-white text-cherry hover:bg-cream">
            Explorar Catalogo
          </Button>
          <Button
            href={`https://wa.me/5215512345678?text=${encodeURIComponent('Hola, me gustaria hacer un pedido especial')}`}
            size="lg"
            className="bg-white/20 text-white border-2 border-white/40 hover:bg-white/30"
          >
            Pedido Personalizado
          </Button>
        </div>
      </Container>
    </section>
  )
}

import { Container } from '@/components/ui/Container'
import { SectionTitle } from '@/components/ui/SectionTitle'
import { Star } from 'lucide-react'
import { testimonials } from '@/data/testimonials'

export function Testimonials() {
  return (
    <section className="py-16 md:py-20 bg-cream">
      <Container>
        <SectionTitle
          title="Lo Que Dicen Nuestros Clientes"
          subtitle="La satisfaccion de nuestros clientes es nuestra mejor receta"
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.slice(0, 3).map((t) => (
            <div key={t.id} className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex gap-1 mb-3">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star key={i} size={16} className="fill-amber-400 text-amber-400" />
                ))}
              </div>
              <p className="text-rose-dark/80 text-sm leading-relaxed mb-4">
                &ldquo;{t.text}&rdquo;
              </p>
              <div>
                <p className="font-medium text-rose-dark">{t.name}</p>
                <p className="text-xs text-rose-dark/50">{t.product}</p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}

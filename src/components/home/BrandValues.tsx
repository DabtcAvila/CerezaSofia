import { Container } from '@/components/ui/Container'
import { SectionTitle } from '@/components/ui/SectionTitle'
import { Heart, Award, Truck, Sparkles } from 'lucide-react'

const values = [
  {
    icon: Sparkles,
    title: 'Artesanal',
    description: 'Cada producto es hecho a mano con atencion al detalle y tecnicas tradicionales de reposteria.',
  },
  {
    icon: Award,
    title: 'Premium',
    description: 'Usamos solo ingredientes de la mas alta calidad: chocolate belga, vainilla de Madagascar, mantequilla europea.',
  },
  {
    icon: Truck,
    title: 'Entrega Segura',
    description: 'Entregamos en CDMX y Estado de Mexico con empaque especial para que todo llegue perfecto.',
  },
  {
    icon: Heart,
    title: 'Hecho con Amor',
    description: 'Cada pastel cuenta una historia. Ponemos corazon en cada creacion para hacer tu dia especial.',
  },
]

export function BrandValues() {
  return (
    <section className="py-16 md:py-20">
      <Container>
        <SectionTitle
          title="Por Que Elegirnos"
          subtitle="Lo que hace especial a cada creacion de Cereza Sofia"
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {values.map((value) => (
            <div key={value.title} className="text-center group">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-cherry/10 text-cherry mb-4 group-hover:bg-cherry group-hover:text-white transition-all duration-300">
                <value.icon size={28} />
              </div>
              <h3 className="font-heading text-lg font-bold text-rose-dark mb-2">{value.title}</h3>
              <p className="text-sm text-rose-dark/60 leading-relaxed">{value.description}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}

import { Metadata } from 'next'
import { Container } from '@/components/ui/Container'
import { SectionTitle } from '@/components/ui/SectionTitle'
import { Heart, Award, Users, Clock } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Nosotros',
  description: 'Conoce la historia de Cereza Sofia, pasteleria artesanal hecha con amor en CDMX.',
}

const stats = [
  { icon: Heart, label: 'Pasteles Creados', value: '2,500+' },
  { icon: Users, label: 'Clientes Felices', value: '1,200+' },
  { icon: Award, label: 'Anos de Experiencia', value: '5+' },
  { icon: Clock, label: 'Horas de Horneado', value: '10,000+' },
]

export default function NosotrosPage() {
  return (
    <section className="py-10 md:py-16">
      <Container>
        {/* Hero */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <SectionTitle
            title="Nuestra Historia"
            subtitle="Detras de cada postre hay una historia de pasion, dedicacion y mucho amor"
          />
        </div>

        {/* Story */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          <div className="aspect-square rounded-2xl bg-gradient-to-br from-cherry/10 via-pink-50 to-cream flex items-center justify-center">
            <span className="text-8xl">👩‍🍳</span>
          </div>
          <div className="space-y-4">
            <h3 className="font-heading text-2xl font-bold text-rose-dark">De un sueno a tu mesa</h3>
            <p className="text-rose-dark/70 leading-relaxed">
              Cereza Sofia nacio de la pasion de Sofia por la reposteria artesanal. Lo que comenzo como un hobbie en su cocina, creando pasteles para familia y amigos, se convirtio en algo mas grande cuando todos empezaron a pedir mas y mas.
            </p>
            <p className="text-rose-dark/70 leading-relaxed">
              Hoy, cada creacion que sale de nuestro taller sigue la misma filosofia: ingredientes premium, tecnicas artesanales y mucho corazon. No somos una fabrica, somos un taller donde cada pastel es tratado como una obra de arte.
            </p>
            <p className="text-rose-dark/70 leading-relaxed">
              Usamos chocolate belga, vainilla de Madagascar, mantequilla europea y frutas frescas de temporada. Creemos que la calidad de los ingredientes se nota en cada bocado.
            </p>
          </div>
        </div>

        {/* Values */}
        <div className="bg-cream rounded-3xl p-8 md:p-12 mb-20">
          <h3 className="font-heading text-2xl md:text-3xl font-bold text-rose-dark text-center mb-8">
            Nuestros Valores
          </h3>
          <div className="grid sm:grid-cols-2 gap-6">
            <div className="bg-white rounded-2xl p-6">
              <h4 className="font-heading text-lg font-bold text-rose-dark mb-2">Calidad sin compromiso</h4>
              <p className="text-sm text-rose-dark/60">Solo usamos los mejores ingredientes. Si no es digno de nuestra mesa, no es digno de la tuya.</p>
            </div>
            <div className="bg-white rounded-2xl p-6">
              <h4 className="font-heading text-lg font-bold text-rose-dark mb-2">Hecho a mano, siempre</h4>
              <p className="text-sm text-rose-dark/60">Cada producto es elaborado artesanalmente, con atencion al detalle y tecnicas de reposteria clasica.</p>
            </div>
            <div className="bg-white rounded-2xl p-6">
              <h4 className="font-heading text-lg font-bold text-rose-dark mb-2">Frescura garantizada</h4>
              <p className="text-sm text-rose-dark/60">Preparamos todo bajo pedido para garantizar que siempre recibas productos frescos y deliciosos.</p>
            </div>
            <div className="bg-white rounded-2xl p-6">
              <h4 className="font-heading text-lg font-bold text-rose-dark mb-2">Entrega con amor</h4>
              <p className="text-sm text-rose-dark/60">Cuidamos cada detalle del empaque y entrega para que tu experiencia sea perfecta de principio a fin.</p>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-cherry/10 text-cherry mb-3">
                <stat.icon size={24} />
              </div>
              <p className="font-heading text-2xl md:text-3xl font-bold text-rose-dark">{stat.value}</p>
              <p className="text-sm text-rose-dark/60">{stat.label}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}

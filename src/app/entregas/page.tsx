import { Metadata } from 'next'
import { Container } from '@/components/ui/Container'
import { SectionTitle } from '@/components/ui/SectionTitle'
import { deliveryZones, deliverySchedule } from '@/data/delivery'
import { formatPrice } from '@/data/products'
import { MapPin, Clock, Truck, AlertCircle } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Entregas',
  description: 'Informacion de zonas de entrega, costos y horarios. Entregas en CDMX y Estado de Mexico.',
}

const faqs = [
  {
    q: 'Con cuanta anticipacion debo hacer mi pedido?',
    a: 'Minimo 48 horas antes de la fecha de entrega deseada. Para pedidos grandes o personalizados, recomendamos 5 dias de anticipacion.',
  },
  {
    q: 'Puedo recoger mi pedido?',
    a: 'Si, ofrecemos recoleccion en nuestro taller. Coordinamos horario por WhatsApp sin costo adicional.',
  },
  {
    q: 'Que pasa si no estoy en casa?',
    a: 'Nuestro repartidor te contactara 30 minutos antes de llegar. Si no es posible la entrega, se reprogramara con un cargo adicional.',
  },
  {
    q: 'Hacen entregas en domingo?',
    a: 'No. Nuestro horario de entregas es de lunes a sabado. Para eventos en domingo, la entrega se programa el sabado previo.',
  },
]

export default function EntregasPage() {
  return (
    <section className="py-10 md:py-16">
      <Container>
        <SectionTitle
          title="Zonas de Entrega"
          subtitle="Entregamos en CDMX y Estado de Mexico con empaque especial"
        />

        {/* Zones */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {deliveryZones.map((zone) => (
            <div key={zone.name} className="bg-white rounded-2xl p-6 shadow-sm border border-cherry/5">
              <div className="flex items-center gap-2 mb-4">
                <MapPin size={20} className="text-cherry" />
                <h3 className="font-heading text-lg font-bold text-rose-dark">{zone.name}</h3>
              </div>
              <div className="space-y-3 mb-4">
                <div className="flex justify-between text-sm">
                  <span className="text-rose-dark/60">Costo de envio</span>
                  <span className="font-bold text-cherry">{formatPrice(zone.feeInCents)}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-rose-dark/60">Pedido minimo</span>
                  <span className="font-medium text-rose-dark">{formatPrice(zone.minOrderInCents)}</span>
                </div>
              </div>
              <div className="border-t border-gray-100 pt-3">
                <p className="text-xs text-rose-dark/50 font-medium mb-2">Alcaldias/Municipios:</p>
                <div className="flex flex-wrap gap-1">
                  {zone.areas.map((area) => (
                    <span key={area} className="text-xs bg-cream text-rose-dark/70 px-2 py-1 rounded-full">
                      {area}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Schedule */}
        <div className="bg-cream rounded-3xl p-8 md:p-12 mb-16">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Clock size={20} className="text-cherry" />
                <h3 className="font-heading text-xl font-bold text-rose-dark">Horarios de Entrega</h3>
              </div>
              <p className="text-sm text-rose-dark/60 mb-4">{deliverySchedule.days}</p>
              <div className="space-y-2">
                {deliverySchedule.hours.map((h) => (
                  <div key={h.value} className="bg-white rounded-lg px-4 py-3 text-sm font-medium text-rose-dark">
                    {h.label}
                  </div>
                ))}
              </div>
            </div>
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Truck size={20} className="text-cherry" />
                <h3 className="font-heading text-xl font-bold text-rose-dark">Informacion Importante</h3>
              </div>
              <div className="space-y-3 text-sm text-rose-dark/70">
                <div className="flex items-start gap-2">
                  <AlertCircle size={16} className="text-cherry shrink-0 mt-0.5" />
                  <p>Pedidos con minimo <strong>48 horas</strong> de anticipacion</p>
                </div>
                <div className="flex items-start gap-2">
                  <AlertCircle size={16} className="text-cherry shrink-0 mt-0.5" />
                  <p>Envio <strong>gratis</strong> en pedidos mayores a $800 en Zona Centro</p>
                </div>
                <div className="flex items-start gap-2">
                  <AlertCircle size={16} className="text-cherry shrink-0 mt-0.5" />
                  <p>No hay entregas en <strong>domingos y dias festivos</strong></p>
                </div>
                <div className="flex items-start gap-2">
                  <AlertCircle size={16} className="text-cherry shrink-0 mt-0.5" />
                  <p>Empaque especial incluido para <strong>proteger tu pedido</strong></p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* FAQ */}
        <div className="max-w-3xl mx-auto">
          <h3 className="font-heading text-2xl font-bold text-rose-dark text-center mb-8">
            Preguntas Frecuentes
          </h3>
          <div className="space-y-4">
            {faqs.map((faq) => (
              <div key={faq.q} className="bg-white rounded-2xl p-6 shadow-sm">
                <h4 className="font-heading font-bold text-rose-dark mb-2">{faq.q}</h4>
                <p className="text-sm text-rose-dark/60">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  )
}

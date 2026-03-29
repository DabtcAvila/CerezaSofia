import { Metadata } from 'next'
import { Container } from '@/components/ui/Container'
import { Button } from '@/components/ui/Button'
import { CheckCircle, Clock, MessageCircle } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Pedido Enviado',
}

export default function ConfirmacionPage() {
  return (
    <section className="py-16 md:py-24">
      <Container className="max-w-2xl text-center">
        <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-leaf/10 text-leaf mb-6">
          <CheckCircle size={40} />
        </div>

        <h1 className="font-heading text-3xl md:text-4xl font-bold text-rose-dark mb-4">
          Pedido Enviado
        </h1>
        <p className="text-lg text-rose-dark/70 mb-8">
          Tu pedido ha sido enviado por WhatsApp. Nuestro equipo lo revisara y te contactara para confirmar disponibilidad y metodo de pago.
        </p>

        <div className="bg-cream rounded-2xl p-6 md:p-8 text-left space-y-4 mb-8">
          <h3 className="font-heading text-lg font-bold text-rose-dark">Proximos pasos:</h3>
          <div className="flex items-start gap-3">
            <MessageCircle size={20} className="text-cherry shrink-0 mt-0.5" />
            <div>
              <p className="font-medium text-rose-dark">Confirmacion por WhatsApp</p>
              <p className="text-sm text-rose-dark/60">Te responderemos en las proximas horas para confirmar tu pedido.</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <Clock size={20} className="text-cherry shrink-0 mt-0.5" />
            <div>
              <p className="font-medium text-rose-dark">Preparacion</p>
              <p className="text-sm text-rose-dark/60">Una vez confirmado, prepararemos tu pedido con ingredientes frescos.</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <CheckCircle size={20} className="text-cherry shrink-0 mt-0.5" />
            <div>
              <p className="font-medium text-rose-dark">Entrega</p>
              <p className="text-sm text-rose-dark/60">Recibirás tu pedido en la fecha y horario seleccionados.</p>
            </div>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button href="/" size="lg">
            Volver al Inicio
          </Button>
          <Button href="/tienda" variant="outline" size="lg">
            Seguir Comprando
          </Button>
        </div>
      </Container>
    </section>
  )
}

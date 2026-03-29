import { Metadata } from 'next'
import { Container } from '@/components/ui/Container'

export const metadata: Metadata = {
  title: 'Terminos y Condiciones',
}

export default function TerminosPage() {
  return (
    <section className="py-10 md:py-16">
      <Container className="max-w-3xl">
        <h1 className="font-heading text-3xl md:text-4xl font-bold text-rose-dark mb-8">
          Terminos y Condiciones
        </h1>
        <div className="prose prose-sm max-w-none text-rose-dark/70 space-y-6">
          <h2 className="font-heading text-xl font-bold text-rose-dark">Pedidos</h2>
          <ul className="list-disc pl-6 space-y-1">
            <li>Todos los pedidos deben realizarse con un minimo de 48 horas de anticipacion.</li>
            <li>Los pedidos se confirman una vez que recibimos la confirmacion via WhatsApp y el pago correspondiente.</li>
            <li>Los precios mostrados son en pesos mexicanos (MXN) e incluyen IVA.</li>
            <li>Nos reservamos el derecho de rechazar pedidos por disponibilidad de ingredientes o capacidad.</li>
          </ul>

          <h2 className="font-heading text-xl font-bold text-rose-dark">Pagos</h2>
          <ul className="list-disc pl-6 space-y-1">
            <li>Aceptamos transferencia bancaria y pago en efectivo al momento de la entrega.</li>
            <li>El pago debe realizarse al menos 24 horas antes de la entrega para pedidos por transferencia.</li>
            <li>Proximamente aceptaremos pagos con tarjeta a traves de MercadoPago.</li>
          </ul>

          <h2 className="font-heading text-xl font-bold text-rose-dark">Entregas</h2>
          <ul className="list-disc pl-6 space-y-1">
            <li>Realizamos entregas de lunes a sabado en los horarios establecidos.</li>
            <li>El costo de envio varia segun la zona de entrega.</li>
            <li>Es responsabilidad del cliente asegurarse de estar disponible en el horario de entrega seleccionado.</li>
            <li>En caso de no poder recibir el pedido, se debera reprogramar con un cargo adicional.</li>
          </ul>

          <h2 className="font-heading text-xl font-bold text-rose-dark">Cancelaciones</h2>
          <ul className="list-disc pl-6 space-y-1">
            <li>Las cancelaciones deben realizarse con al menos 24 horas de anticipacion.</li>
            <li>Cancelaciones con menos de 24 horas tendran un cargo del 50% del pedido.</li>
            <li>No se aceptan cancelaciones el mismo dia de la entrega.</li>
          </ul>

          <h2 className="font-heading text-xl font-bold text-rose-dark">Alergenos</h2>
          <p>
            Nuestros productos pueden contener o haber estado en contacto con: leche, huevo, trigo (gluten), nueces, cacahuates y soya. Si tienes alguna alergia, por favor informanos antes de hacer tu pedido.
          </p>

          <h2 className="font-heading text-xl font-bold text-rose-dark">Contacto</h2>
          <p>
            Para cualquier duda sobre estos terminos, contactenos por WhatsApp al 55 1234 5678.
          </p>

          <p className="text-xs text-rose-dark/40">
            Ultima actualizacion: Marzo 2025
          </p>
        </div>
      </Container>
    </section>
  )
}

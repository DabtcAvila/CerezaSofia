import { Metadata } from 'next'
import { Container } from '@/components/ui/Container'

export const metadata: Metadata = {
  title: 'Aviso de Privacidad',
}

export default function PrivacidadPage() {
  return (
    <section className="py-10 md:py-16">
      <Container className="max-w-3xl">
        <h1 className="font-heading text-3xl md:text-4xl font-bold text-rose-dark mb-8">
          Aviso de Privacidad
        </h1>
        <div className="prose prose-sm max-w-none text-rose-dark/70 space-y-6">
          <p>
            <strong>Cereza Sofia</strong>, con domicilio en Ciudad de Mexico, Mexico, es responsable del tratamiento de los datos personales que nos proporcione, los cuales seran protegidos conforme a lo dispuesto por la Ley Federal de Proteccion de Datos Personales en Posesion de los Particulares.
          </p>

          <h2 className="font-heading text-xl font-bold text-rose-dark">Datos que recopilamos</h2>
          <p>Para llevar a cabo las finalidades descritas, utilizaremos los siguientes datos personales:</p>
          <ul className="list-disc pl-6 space-y-1">
            <li>Nombre completo</li>
            <li>Numero de telefono</li>
            <li>Correo electronico</li>
            <li>Direccion de entrega</li>
          </ul>

          <h2 className="font-heading text-xl font-bold text-rose-dark">Finalidades del tratamiento</h2>
          <p>Sus datos personales seran utilizados para:</p>
          <ul className="list-disc pl-6 space-y-1">
            <li>Procesar y entregar sus pedidos</li>
            <li>Contactarlo para confirmar pedidos y coordinar entregas</li>
            <li>Enviar informacion sobre promociones y nuevos productos (previo consentimiento)</li>
            <li>Mejorar nuestros productos y servicios</li>
          </ul>

          <h2 className="font-heading text-xl font-bold text-rose-dark">Comparticion de datos</h2>
          <p>
            No compartimos sus datos personales con terceros, excepto con nuestro servicio de entrega para cumplir con su pedido.
          </p>

          <h2 className="font-heading text-xl font-bold text-rose-dark">Derechos ARCO</h2>
          <p>
            Usted tiene derecho a Acceder, Rectificar, Cancelar u Oponerse al tratamiento de sus datos personales (derechos ARCO). Para ejercer cualquiera de estos derechos, puede contactarnos a traves de WhatsApp o correo electronico.
          </p>

          <h2 className="font-heading text-xl font-bold text-rose-dark">Contacto</h2>
          <p>
            Para cualquier duda o solicitud relacionada con este aviso de privacidad, contactenos por WhatsApp al 55 1234 5678.
          </p>

          <p className="text-xs text-rose-dark/40">
            Ultima actualizacion: Marzo 2025
          </p>
        </div>
      </Container>
    </section>
  )
}

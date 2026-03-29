import Link from 'next/link'
import { Container } from '@/components/ui/Container'
import { Instagram, Facebook, MapPin, Phone, Clock } from 'lucide-react'

export function Footer() {
  return (
    <footer className="bg-rose-dark text-white/90">
      <Container className="py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand */}
          <div>
            <h3 className="font-heading text-2xl font-bold text-white mb-4">
              Cereza<span className="text-cherry-light"> Sofia</span>
            </h3>
            <p className="text-white/70 text-sm leading-relaxed mb-4">
              Pasteleria artesanal hecha con amor. Cada creacion es unica, preparada con ingredientes premium para hacer tus momentos especiales aun mas dulces.
            </p>
            <div className="flex gap-3">
              <a href="https://instagram.com/cerezasofia" target="_blank" rel="noopener noreferrer" className="p-2 bg-white/10 rounded-full hover:bg-cherry transition-colors" aria-label="Instagram">
                <Instagram size={18} />
              </a>
              <a href="https://facebook.com/cerezasofia" target="_blank" rel="noopener noreferrer" className="p-2 bg-white/10 rounded-full hover:bg-cherry transition-colors" aria-label="Facebook">
                <Facebook size={18} />
              </a>
            </div>
          </div>

          {/* Tienda */}
          <div>
            <h4 className="font-heading text-lg font-semibold text-white mb-4">Tienda</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/tienda/pasteles" className="hover:text-cherry-light transition-colors">Pasteles</Link></li>
              <li><Link href="/tienda/cupcakes" className="hover:text-cherry-light transition-colors">Cupcakes</Link></li>
              <li><Link href="/tienda/galletas" className="hover:text-cherry-light transition-colors">Galletas</Link></li>
              <li><Link href="/tienda/postres" className="hover:text-cherry-light transition-colors">Postres</Link></li>
              <li><Link href="/tienda/panes" className="hover:text-cherry-light transition-colors">Panes</Link></li>
              <li><Link href="/tienda/temporada" className="hover:text-cherry-light transition-colors">Temporada</Link></li>
            </ul>
          </div>

          {/* Info */}
          <div>
            <h4 className="font-heading text-lg font-semibold text-white mb-4">Informacion</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/nosotros" className="hover:text-cherry-light transition-colors">Nosotros</Link></li>
              <li><Link href="/entregas" className="hover:text-cherry-light transition-colors">Zonas de Entrega</Link></li>
              <li><Link href="/politicas/privacidad" className="hover:text-cherry-light transition-colors">Aviso de Privacidad</Link></li>
              <li><Link href="/politicas/terminos" className="hover:text-cherry-light transition-colors">Terminos y Condiciones</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading text-lg font-semibold text-white mb-4">Contacto</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <MapPin size={16} className="mt-0.5 shrink-0 text-cherry-light" />
                <span>CDMX y Estado de Mexico</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone size={16} className="shrink-0 text-cherry-light" />
                <span>55 1234 5678</span>
              </li>
              <li className="flex items-center gap-2">
                <Clock size={16} className="shrink-0 text-cherry-light" />
                <span>Lun - Sab: 9:00 - 19:00</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/10 text-center text-sm text-white/50">
          <p>&copy; {new Date().getFullYear()} Cereza Sofia. Todos los derechos reservados.</p>
        </div>
      </Container>
    </footer>
  )
}

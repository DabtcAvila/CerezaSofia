'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { Container } from '@/components/ui/Container'
import { SectionTitle } from '@/components/ui/SectionTitle'
import { Input } from '@/components/ui/Input'
import { Button } from '@/components/ui/Button'
import { useCartStore } from '@/store/cart-store'
import { formatPrice } from '@/data/products'
import { formatWhatsAppMessage } from '@/lib/utils'
import { WHATSAPP_NUMBER, deliverySchedule } from '@/data/delivery'
import { MessageCircle, ShoppingBag } from 'lucide-react'

export default function CheckoutPage() {
  const router = useRouter()
  const { items, getTotal, clearCart } = useCartStore()
  const [form, setForm] = useState({
    name: '',
    phone: '',
    email: '',
    address: '',
    colony: '',
    zipCode: '',
    city: 'CDMX',
    deliveryDate: '',
    deliveryTime: '',
    notes: '',
  })

  const total = getTotal()
  const deliveryFee = total >= 80000 ? 0 : 8000
  const grandTotal = total + deliveryFee

  if (items.length === 0) {
    return (
      <section className="py-16 md:py-24">
        <Container className="text-center">
          <ShoppingBag size={64} className="mx-auto text-cherry/30 mb-4" />
          <h1 className="font-heading text-3xl font-bold text-rose-dark mb-3">
            No hay productos en tu carrito
          </h1>
          <Button href="/tienda" size="lg" className="mt-4">
            Ir a la Tienda
          </Button>
        </Container>
      </section>
    )
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    const whatsappItems = items.map((item) => ({
      name: item.name,
      quantity: item.quantity,
      size: item.selectedSize,
      price: formatPrice(item.priceInCents * item.quantity),
    }))

    const msg = formatWhatsAppMessage(
      whatsappItems,
      {
        name: form.name,
        address: form.address,
        colony: form.colony,
        city: form.city,
        date: form.deliveryDate,
        time: form.deliveryTime,
        notes: form.notes,
      },
      formatPrice(grandTotal)
    )

    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${msg}`
    window.open(whatsappUrl, '_blank')
    clearCart()
    router.push('/checkout/confirmacion')
  }

  // Min date = 2 days from now
  const minDate = new Date()
  minDate.setDate(minDate.getDate() + 2)
  const minDateStr = minDate.toISOString().split('T')[0]

  return (
    <section className="py-10 md:py-16">
      <Container>
        <SectionTitle title="Checkout" centered={false} />

        <form onSubmit={handleSubmit}>
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Form */}
            <div className="lg:col-span-2 space-y-6">
              {/* Delivery info */}
              <div className="bg-white rounded-2xl p-6 shadow-sm space-y-4">
                <h3 className="font-heading text-lg font-bold text-rose-dark">Datos de Entrega</h3>

                <div className="grid sm:grid-cols-2 gap-4">
                  <Input label="Nombre completo" name="name" value={form.name} onChange={handleChange} required placeholder="Tu nombre" />
                  <Input label="Telefono" name="phone" type="tel" value={form.phone} onChange={handleChange} required placeholder="55 1234 5678" />
                </div>
                <Input label="Email" name="email" type="email" value={form.email} onChange={handleChange} required placeholder="tu@email.com" />
                <Input label="Direccion" name="address" value={form.address} onChange={handleChange} required placeholder="Calle, numero, interior" />
                <div className="grid sm:grid-cols-3 gap-4">
                  <Input label="Colonia" name="colony" value={form.colony} onChange={handleChange} required placeholder="Colonia" />
                  <Input label="Codigo Postal" name="zipCode" value={form.zipCode} onChange={handleChange} required placeholder="01000" />
                  <div className="space-y-1">
                    <label htmlFor="city" className="block text-sm font-medium text-rose-dark">Ciudad</label>
                    <select
                      id="city"
                      name="city"
                      value={form.city}
                      onChange={handleChange}
                      className="w-full rounded-lg border border-gray-200 px-4 py-2.5 text-sm text-rose-dark focus:border-cherry focus:ring-2 focus:ring-cherry/20 focus:outline-none"
                    >
                      <option value="CDMX">CDMX</option>
                      <option value="Estado de Mexico">Estado de Mexico</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Schedule */}
              <div className="bg-white rounded-2xl p-6 shadow-sm space-y-4">
                <h3 className="font-heading text-lg font-bold text-rose-dark">Fecha y Hora de Entrega</h3>
                <p className="text-sm text-rose-dark/60">{deliverySchedule.note}</p>
                <div className="grid sm:grid-cols-2 gap-4">
                  <Input
                    label="Fecha de entrega"
                    name="deliveryDate"
                    type="date"
                    min={minDateStr}
                    value={form.deliveryDate}
                    onChange={handleChange}
                    required
                  />
                  <div className="space-y-1">
                    <label htmlFor="deliveryTime" className="block text-sm font-medium text-rose-dark">Horario</label>
                    <select
                      id="deliveryTime"
                      name="deliveryTime"
                      value={form.deliveryTime}
                      onChange={handleChange}
                      required
                      className="w-full rounded-lg border border-gray-200 px-4 py-2.5 text-sm text-rose-dark focus:border-cherry focus:ring-2 focus:ring-cherry/20 focus:outline-none"
                    >
                      <option value="">Selecciona horario</option>
                      {deliverySchedule.hours.map((h) => (
                        <option key={h.value} value={h.label}>{h.label}</option>
                      ))}
                    </select>
                  </div>
                </div>
                <div className="space-y-1">
                  <label htmlFor="notes" className="block text-sm font-medium text-rose-dark">Notas adicionales (opcional)</label>
                  <textarea
                    id="notes"
                    name="notes"
                    value={form.notes}
                    onChange={handleChange}
                    rows={3}
                    className="w-full rounded-lg border border-gray-200 px-4 py-2.5 text-sm text-rose-dark placeholder:text-gray-400 focus:border-cherry focus:ring-2 focus:ring-cherry/20 focus:outline-none"
                    placeholder="Instrucciones especiales, dedicatoria, etc."
                  />
                </div>
              </div>
            </div>

            {/* Order Summary */}
            <div>
              <div className="bg-cream rounded-2xl p-6 sticky top-24">
                <h3 className="font-heading text-lg font-bold text-rose-dark mb-4">
                  Resumen del Pedido
                </h3>
                <div className="space-y-3 mb-4">
                  {items.map((item) => (
                    <div key={`${item.productId}-${item.selectedSize}`} className="flex justify-between text-sm">
                      <span className="text-rose-dark/70">
                        {item.quantity}x {item.name}
                        {item.selectedSize && <span className="text-xs block text-rose-dark/50">{item.selectedSize}</span>}
                      </span>
                      <span className="font-medium text-rose-dark">{formatPrice(item.priceInCents * item.quantity)}</span>
                    </div>
                  ))}
                </div>
                <div className="border-t border-cherry/10 pt-3 space-y-2 text-sm">
                  <div className="flex justify-between text-rose-dark/70">
                    <span>Subtotal</span>
                    <span>{formatPrice(total)}</span>
                  </div>
                  <div className="flex justify-between text-rose-dark/70">
                    <span>Envio</span>
                    <span>{deliveryFee === 0 ? 'Gratis' : formatPrice(deliveryFee)}</span>
                  </div>
                  <div className="border-t border-cherry/10 pt-2 flex justify-between font-bold text-rose-dark">
                    <span>Total</span>
                    <span className="text-cherry text-lg">{formatPrice(grandTotal)}</span>
                  </div>
                </div>

                <Button type="submit" size="lg" className="w-full mt-6">
                  <MessageCircle size={18} className="mr-2" />
                  Confirmar por WhatsApp
                </Button>

                <p className="text-xs text-rose-dark/50 text-center mt-3">
                  Se abrira WhatsApp con tu pedido. Te confirmaremos disponibilidad y pago.
                </p>
              </div>
            </div>
          </div>
        </form>
      </Container>
    </section>
  )
}

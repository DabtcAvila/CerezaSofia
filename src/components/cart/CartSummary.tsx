'use client'

import { useCartStore } from '@/store/cart-store'
import { Button } from '@/components/ui/Button'
import { formatPrice } from '@/data/products'

export function CartSummary() {
  const { getTotal, getItemCount } = useCartStore()
  const total = getTotal()
  const count = getItemCount()

  const deliveryFee = total >= 80000 ? 0 : 8000

  return (
    <div className="bg-cream rounded-2xl p-6 sticky top-24">
      <h3 className="font-heading text-lg font-bold text-rose-dark mb-4">
        Resumen del Pedido
      </h3>
      <div className="space-y-3 text-sm">
        <div className="flex justify-between text-rose-dark/70">
          <span>Productos ({count})</span>
          <span>{formatPrice(total)}</span>
        </div>
        <div className="flex justify-between text-rose-dark/70">
          <span>Envio estimado</span>
          <span>{deliveryFee === 0 ? 'Gratis' : formatPrice(deliveryFee)}</span>
        </div>
        {deliveryFee === 0 && (
          <p className="text-xs text-leaf font-medium">Envio gratis en pedidos mayores a $800</p>
        )}
        <div className="border-t border-cherry/10 pt-3 flex justify-between font-bold text-rose-dark">
          <span>Total</span>
          <span className="text-cherry text-lg">{formatPrice(total + deliveryFee)}</span>
        </div>
      </div>

      <Button href="/checkout" size="lg" className="w-full mt-6">
        Proceder al Checkout
      </Button>

      <Button href="/tienda" variant="ghost" size="sm" className="w-full mt-2 text-sm">
        Seguir comprando
      </Button>
    </div>
  )
}

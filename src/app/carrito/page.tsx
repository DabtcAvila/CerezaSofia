'use client'

import { Container } from '@/components/ui/Container'
import { SectionTitle } from '@/components/ui/SectionTitle'
import { CartItemRow } from '@/components/cart/CartItemRow'
import { CartSummary } from '@/components/cart/CartSummary'
import { Button } from '@/components/ui/Button'
import { useCartStore } from '@/store/cart-store'
import { ShoppingBag } from 'lucide-react'

export default function CarritoPage() {
  const { items, clearCart } = useCartStore()

  if (items.length === 0) {
    return (
      <section className="py-16 md:py-24">
        <Container className="text-center">
          <ShoppingBag size={64} className="mx-auto text-cherry/30 mb-4" />
          <h1 className="font-heading text-3xl font-bold text-rose-dark mb-3">
            Tu carrito esta vacio
          </h1>
          <p className="text-rose-dark/60 mb-8">
            Agrega algunos de nuestros deliciosos productos para comenzar.
          </p>
          <Button href="/tienda" size="lg">
            Explorar Tienda
          </Button>
        </Container>
      </section>
    )
  }

  return (
    <section className="py-10 md:py-16">
      <Container>
        <SectionTitle title="Tu Carrito" centered={false} />

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Items */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl p-4 md:p-6 shadow-sm">
              {items.map((item) => (
                <CartItemRow key={`${item.productId}-${item.selectedSize}`} item={item} />
              ))}
              <div className="mt-4 pt-4 border-t border-gray-100">
                <button
                  onClick={clearCart}
                  className="text-sm text-red-500 hover:text-red-600 transition-colors"
                >
                  Vaciar carrito
                </button>
              </div>
            </div>
          </div>

          {/* Summary */}
          <div>
            <CartSummary />
          </div>
        </div>
      </Container>
    </section>
  )
}

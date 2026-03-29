'use client'

import { useState } from 'react'
import Link from 'next/link'
import { ShoppingBag, Menu, X, ChevronDown } from 'lucide-react'
import { Container } from '@/components/ui/Container'
import { useCartStore } from '@/store/cart-store'
import { categories } from '@/data/categories'

const navLinks = [
  { href: '/', label: 'Inicio' },
  { href: '/tienda', label: 'Tienda', hasDropdown: true },
  { href: '/nosotros', label: 'Nosotros' },
  { href: '/entregas', label: 'Entregas' },
]

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [shopOpen, setShopOpen] = useState(false)
  const itemCount = useCartStore((s) => s.getItemCount())

  return (
    <header className="sticky top-0 z-50 bg-warm-white/95 backdrop-blur-sm border-b border-cherry/10">
      <Container>
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <span className="text-2xl md:text-3xl font-heading font-bold text-rose-dark">
              Cereza<span className="text-cherry"> Sofia</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <div key={link.href} className="relative group">
                {link.hasDropdown ? (
                  <button
                    className="flex items-center gap-1 text-rose-dark/80 hover:text-cherry transition-colors font-medium"
                    onMouseEnter={() => setShopOpen(true)}
                    onMouseLeave={() => setShopOpen(false)}
                  >
                    <Link href={link.href}>{link.label}</Link>
                    <ChevronDown size={14} />
                  </button>
                ) : (
                  <Link
                    href={link.href}
                    className="text-rose-dark/80 hover:text-cherry transition-colors font-medium"
                  >
                    {link.label}
                  </Link>
                )}

                {/* Dropdown */}
                {link.hasDropdown && (
                  <div
                    className={`absolute top-full left-0 mt-1 w-56 bg-white rounded-xl shadow-lg border border-cherry/10 py-2 transition-all duration-200 ${shopOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-2'}`}
                    onMouseEnter={() => setShopOpen(true)}
                    onMouseLeave={() => setShopOpen(false)}
                  >
                    <Link
                      href="/tienda"
                      className="block px-4 py-2 text-sm text-rose-dark hover:bg-cream hover:text-cherry transition-colors font-medium"
                    >
                      Ver Todo
                    </Link>
                    {categories.map((cat) => (
                      <Link
                        key={cat.slug}
                        href={`/tienda/${cat.slug}`}
                        className="block px-4 py-2 text-sm text-rose-dark/80 hover:bg-cream hover:text-cherry transition-colors"
                      >
                        <span className="mr-2">{cat.icon}</span>
                        {cat.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* Cart + Mobile Toggle */}
          <div className="flex items-center gap-3">
            <Link
              href="/carrito"
              className="relative p-2 text-rose-dark hover:text-cherry transition-colors"
              aria-label="Carrito de compras"
            >
              <ShoppingBag size={22} />
              {itemCount > 0 && (
                <span className="absolute -top-0.5 -right-0.5 bg-cherry text-white text-[10px] font-bold w-5 h-5 rounded-full flex items-center justify-center">
                  {itemCount}
                </span>
              )}
            </Link>

            <button
              className="md:hidden p-2 text-rose-dark"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Menu"
            >
              {mobileOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </Container>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden bg-white border-t border-cherry/10 shadow-lg">
          <nav className="py-4">
            {navLinks.map((link) => (
              <div key={link.href}>
                <Link
                  href={link.href}
                  className="block px-6 py-3 text-rose-dark hover:bg-cream hover:text-cherry transition-colors font-medium"
                  onClick={() => setMobileOpen(false)}
                >
                  {link.label}
                </Link>
                {link.hasDropdown && (
                  <div className="bg-cream/50">
                    {categories.map((cat) => (
                      <Link
                        key={cat.slug}
                        href={`/tienda/${cat.slug}`}
                        className="block px-10 py-2 text-sm text-rose-dark/70 hover:text-cherry transition-colors"
                        onClick={() => setMobileOpen(false)}
                      >
                        <span className="mr-2">{cat.icon}</span>
                        {cat.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>
        </div>
      )}
    </header>
  )
}

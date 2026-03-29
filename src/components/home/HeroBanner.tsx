'use client'

import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/Button'
import { Container } from '@/components/ui/Container'
import { ChevronLeft, ChevronRight } from 'lucide-react'

const slides = [
  {
    title: 'Endulza tus\nmomentos especiales',
    subtitle: 'Pasteles y postres artesanales hechos con amor, listos para celebrar contigo.',
    cta: 'Ver Tienda',
    href: '/tienda',
    gradient: 'from-cherry/5 via-pink-50 to-warm-white',
    emoji: '🎂',
  },
  {
    title: 'Cupcakes que\nenamoran',
    subtitle: 'Decorados a mano con ingredientes premium. Perfectos para cualquier ocasion.',
    cta: 'Ver Cupcakes',
    href: '/tienda/cupcakes',
    gradient: 'from-purple-50 via-pink-50 to-warm-white',
    emoji: '🧁',
  },
  {
    title: 'Galletas\npersonalizadas',
    subtitle: 'Disenos unicos para bodas, baby showers, cumpleanos y eventos corporativos.',
    cta: 'Ver Galletas',
    href: '/tienda/galletas',
    gradient: 'from-amber-50 via-orange-50/50 to-warm-white',
    emoji: '🍪',
  },
]

export function HeroBanner() {
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((c) => (c + 1) % slides.length)
    }, 6000)
    return () => clearInterval(timer)
  }, [])

  const slide = slides[current]

  return (
    <section className={`relative bg-gradient-to-br ${slide.gradient} transition-all duration-700`}>
      <Container className="py-16 md:py-24 lg:py-32">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="space-y-6">
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-rose-dark leading-tight whitespace-pre-line">
              {slide.title}
            </h1>
            <p className="text-lg md:text-xl text-rose-dark/70 max-w-md">
              {slide.subtitle}
            </p>
            <div className="flex gap-4">
              <Button href={slide.href} size="lg">
                {slide.cta}
              </Button>
              <Button href="/nosotros" variant="outline" size="lg">
                Conocenos
              </Button>
            </div>
          </div>

          <div className="flex items-center justify-center">
            <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full bg-white/60 shadow-xl flex items-center justify-center">
              <span className="text-8xl md:text-9xl animate-pulse">{slide.emoji}</span>
              <div className="absolute inset-0 rounded-full border-4 border-cherry/10" />
            </div>
          </div>
        </div>

        {/* Navigation dots */}
        <div className="flex justify-center gap-2 mt-10">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                i === current ? 'bg-cherry w-8' : 'bg-cherry/30'
              }`}
              aria-label={`Slide ${i + 1}`}
            />
          ))}
        </div>

        {/* Arrows */}
        <button
          onClick={() => setCurrent((c) => (c - 1 + slides.length) % slides.length)}
          className="hidden md:flex absolute left-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/80 shadow hover:bg-white transition-colors"
          aria-label="Anterior"
        >
          <ChevronLeft size={20} className="text-rose-dark" />
        </button>
        <button
          onClick={() => setCurrent((c) => (c + 1) % slides.length)}
          className="hidden md:flex absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/80 shadow hover:bg-white transition-colors"
          aria-label="Siguiente"
        >
          <ChevronRight size={20} className="text-rose-dark" />
        </button>
      </Container>
    </section>
  )
}

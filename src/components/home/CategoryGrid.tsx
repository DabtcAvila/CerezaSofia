import Link from 'next/link'
import { Container } from '@/components/ui/Container'
import { SectionTitle } from '@/components/ui/SectionTitle'
import { categories } from '@/data/categories'

export function CategoryGrid() {
  return (
    <section className="py-16 md:py-20">
      <Container>
        <SectionTitle
          title="Nuestras Categorias"
          subtitle="Encuentra el postre perfecto para cada ocasion"
        />
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
          {categories.map((cat) => (
            <Link
              key={cat.slug}
              href={`/tienda/${cat.slug}`}
              className="group relative overflow-hidden rounded-2xl bg-gradient-to-br p-6 md:p-8 transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
              style={{ background: `linear-gradient(135deg, var(--color-cream), white)` }}
            >
              <div className="relative z-10">
                <span className="text-4xl md:text-5xl block mb-3">{cat.icon}</span>
                <h3 className="font-heading text-lg md:text-xl font-bold text-rose-dark group-hover:text-cherry transition-colors">
                  {cat.name}
                </h3>
                <p className="text-sm text-rose-dark/60 mt-1 line-clamp-2">{cat.description}</p>
              </div>
              <div className="absolute top-0 right-0 w-24 h-24 bg-cherry/5 rounded-full -translate-x-1/2 -translate-y-1/2 group-hover:scale-150 transition-transform duration-500" />
            </Link>
          ))}
        </div>
      </Container>
    </section>
  )
}

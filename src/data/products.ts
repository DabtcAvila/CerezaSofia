import { Product } from '@/types/product'

export const products: Product[] = [
  // PASTELES
  {
    id: 'pastel-chocolate-belga',
    slug: 'pastel-chocolate-belga',
    name: 'Pastel de Chocolate Belga',
    description: 'Nuestro pastel insignia. Tres capas de bizcocho de chocolate oscuro con ganache de chocolate belga, decorado con frutos rojos y laminillas de oro comestible. Un verdadero placer para los amantes del chocolate.',
    shortDescription: 'Triple chocolate con ganache belga y frutos rojos',
    category: 'pasteles',
    priceInCents: 85000,
    sizes: [
      { label: '15 cm', priceInCents: 85000, serves: '8-10 personas' },
      { label: '20 cm', priceInCents: 120000, serves: '15-18 personas' },
      { label: '25 cm', priceInCents: 165000, serves: '25-30 personas' },
    ],
    tags: ['bestseller'],
    images: ['/images/placeholder-cake-1.jpg'],
    available: true,
  },
  {
    id: 'pastel-red-velvet',
    slug: 'pastel-red-velvet',
    name: 'Pastel Red Velvet',
    description: 'Clasico pastel red velvet con un suave betun de queso crema Philadelphia. Decorado con petalos de rosa comestibles y un toque de vainilla de Madagascar.',
    shortDescription: 'Red velvet clasico con betun de queso crema',
    category: 'pasteles',
    priceInCents: 78000,
    sizes: [
      { label: '15 cm', priceInCents: 78000, serves: '8-10 personas' },
      { label: '20 cm', priceInCents: 110000, serves: '15-18 personas' },
      { label: '25 cm', priceInCents: 155000, serves: '25-30 personas' },
    ],
    tags: ['bestseller'],
    images: ['/images/placeholder-cake-2.jpg'],
    available: true,
  },
  {
    id: 'pastel-fresas-crema',
    slug: 'pastel-fresas-crema',
    name: 'Pastel de Fresas con Crema',
    description: 'Bizcocho de vainilla con capas de crema chantilly y fresas frescas de temporada. Decorado con fresas enteras y un glaseado espejo de fresa.',
    shortDescription: 'Bizcocho de vainilla, crema chantilly y fresas frescas',
    category: 'pasteles',
    priceInCents: 72000,
    sizes: [
      { label: '15 cm', priceInCents: 72000, serves: '8-10 personas' },
      { label: '20 cm', priceInCents: 105000, serves: '15-18 personas' },
    ],
    tags: [],
    images: ['/images/placeholder-cake-3.jpg'],
    available: true,
  },
  {
    id: 'pastel-zanahoria',
    slug: 'pastel-zanahoria',
    name: 'Pastel de Zanahoria',
    description: 'Pastel de zanahoria especiado con nuez pecana, cubierto con betun de queso crema y decorado con zanahorias de fondant. Receta de la abuela con un toque gourmet.',
    shortDescription: 'Zanahoria especiada con nuez y betun de queso crema',
    category: 'pasteles',
    priceInCents: 75000,
    sizes: [
      { label: '15 cm', priceInCents: 75000, serves: '8-10 personas' },
      { label: '20 cm', priceInCents: 108000, serves: '15-18 personas' },
    ],
    tags: ['nuevo'],
    images: ['/images/placeholder-cake-4.jpg'],
    available: true,
  },

  // CUPCAKES
  {
    id: 'cupcakes-vainilla-6',
    slug: 'cupcakes-vainilla',
    name: 'Cupcakes de Vainilla',
    description: 'Caja de 6 cupcakes de vainilla de Madagascar con betun de mantequilla en diferentes colores pastel. Perfectos para cualquier celebracion.',
    shortDescription: 'Caja de 6 con betun de mantequilla pastel',
    category: 'cupcakes',
    priceInCents: 36000,
    sizes: [
      { label: '6 piezas', priceInCents: 36000 },
      { label: '12 piezas', priceInCents: 65000 },
    ],
    tags: ['bestseller'],
    images: ['/images/placeholder-cupcake-1.jpg'],
    available: true,
  },
  {
    id: 'cupcakes-red-velvet-6',
    slug: 'cupcakes-red-velvet',
    name: 'Cupcakes Red Velvet',
    description: 'Caja de 6 cupcakes red velvet con betun de queso crema y decorados con chispas de chocolate blanco.',
    shortDescription: 'Caja de 6 red velvet con queso crema',
    category: 'cupcakes',
    priceInCents: 39000,
    sizes: [
      { label: '6 piezas', priceInCents: 39000 },
      { label: '12 piezas', priceInCents: 72000 },
    ],
    tags: [],
    images: ['/images/placeholder-cupcake-2.jpg'],
    available: true,
  },
  {
    id: 'cupcakes-chocolate-6',
    slug: 'cupcakes-chocolate',
    name: 'Cupcakes de Chocolate',
    description: 'Caja de 6 cupcakes de chocolate oscuro con ganache y decorados con viruta de chocolate artesanal.',
    shortDescription: 'Caja de 6 chocolate oscuro con ganache',
    category: 'cupcakes',
    priceInCents: 39000,
    sizes: [
      { label: '6 piezas', priceInCents: 39000 },
      { label: '12 piezas', priceInCents: 72000 },
    ],
    tags: ['nuevo'],
    images: ['/images/placeholder-cupcake-3.jpg'],
    available: true,
  },

  // GALLETAS
  {
    id: 'galletas-mantequilla-decoradas',
    slug: 'galletas-mantequilla-decoradas',
    name: 'Galletas de Mantequilla Decoradas',
    description: 'Set de 12 galletas de mantequilla premium decoradas a mano con royal icing. Disponibles en diseños personalizados para cumpleanos, baby showers, bodas y mas.',
    shortDescription: 'Set de 12 galletas decoradas con royal icing',
    category: 'galletas',
    priceInCents: 45000,
    tags: ['bestseller'],
    images: ['/images/placeholder-cookie-1.jpg'],
    available: true,
  },
  {
    id: 'galletas-chocolate-chip',
    slug: 'galletas-chocolate-chip',
    name: 'Galletas Chocolate Chip',
    description: 'Bolsa de 8 galletas chocolate chip estilo americano con centro suave y bordes crujientes. Hechas con chips de chocolate belga.',
    shortDescription: 'Bolsa de 8 con chocolate belga, centro suave',
    category: 'galletas',
    priceInCents: 22000,
    tags: [],
    images: ['/images/placeholder-cookie-2.jpg'],
    available: true,
  },

  // POSTRES
  {
    id: 'cheesecake-frutos-rojos',
    slug: 'cheesecake-frutos-rojos',
    name: 'Cheesecake de Frutos Rojos',
    description: 'Cheesecake New York style con coulis de frutos rojos y base de galleta graham. Cremoso, denso y con el balance perfecto de dulzura.',
    shortDescription: 'Estilo New York con coulis de frutos rojos',
    category: 'postres',
    priceInCents: 68000,
    sizes: [
      { label: '15 cm', priceInCents: 68000, serves: '6-8 personas' },
      { label: '20 cm', priceInCents: 98000, serves: '12-15 personas' },
    ],
    tags: ['bestseller'],
    images: ['/images/placeholder-dessert-1.jpg'],
    available: true,
  },
  {
    id: 'tiramisú-clasico',
    slug: 'tiramisu-clasico',
    name: 'Tiramisu Clasico',
    description: 'Tiramisu tradicional italiano con mascarpone importado, cafe espresso y cacao en polvo. Preparado 24 horas antes para el sabor perfecto.',
    shortDescription: 'Mascarpone importado y cafe espresso',
    category: 'postres',
    priceInCents: 58000,
    tags: ['nuevo'],
    images: ['/images/placeholder-dessert-2.jpg'],
    available: true,
  },

  // PANES
  {
    id: 'pan-platano-nuez',
    slug: 'pan-platano-nuez',
    name: 'Pan de Platano y Nuez',
    description: 'Pan de platano artesanal con nuez pecana tostada y un toque de canela. Horneado diariamente con platanos maduros seleccionados.',
    shortDescription: 'Artesanal con nuez pecana y canela',
    category: 'panes',
    priceInCents: 28000,
    tags: [],
    images: ['/images/placeholder-bread-1.jpg'],
    available: true,
  },
  {
    id: 'brioche-artesanal',
    slug: 'brioche-artesanal',
    name: 'Brioche Artesanal',
    description: 'Brioche frances clasico con mantequilla europea. Textura sedosa y sabor inigualable. Perfecto para el desayuno o como acompanamiento.',
    shortDescription: 'Brioche frances con mantequilla europea',
    category: 'panes',
    priceInCents: 18000,
    tags: [],
    images: ['/images/placeholder-bread-2.jpg'],
    available: true,
  },

  // TEMPORADA
  {
    id: 'rosca-reyes-2025',
    slug: 'rosca-reyes',
    name: 'Rosca de Reyes Premium',
    description: 'Rosca de reyes artesanal con frutas cristalizadas premium, ate de membrillo y rellena de crema pastelera de vainilla. Incluye munequitos de porcelana.',
    shortDescription: 'Artesanal con frutas premium y crema pastelera',
    category: 'temporada',
    priceInCents: 55000,
    sizes: [
      { label: 'Chica', priceInCents: 55000, serves: '8-10 personas' },
      { label: 'Grande', priceInCents: 95000, serves: '18-20 personas' },
    ],
    tags: ['temporada'],
    images: ['/images/placeholder-seasonal-1.jpg'],
    available: true,
  },
]

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug)
}

export function getProductsByCategory(category: string): Product[] {
  return products.filter((p) => p.category === category && p.available)
}

export function getFeaturedProducts(): Product[] {
  return products.filter((p) => p.tags.includes('bestseller') && p.available)
}

export function formatPrice(cents: number): string {
  return `$${(cents / 100).toLocaleString('es-MX', { minimumFractionDigits: 0 })}`
}

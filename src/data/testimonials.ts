export interface Testimonial {
  id: string
  name: string
  text: string
  rating: number
  product: string
}

export const testimonials: Testimonial[] = [
  {
    id: '1',
    name: 'Maria G.',
    text: 'El pastel de chocolate belga fue la estrella de la fiesta. Todos preguntaron de donde era. Definitivamente volvere a pedir.',
    rating: 5,
    product: 'Pastel de Chocolate Belga',
  },
  {
    id: '2',
    name: 'Carlos R.',
    text: 'Pedi cupcakes para el cumpleanos de mi hija y quedaron hermosos. El sabor es increible, se nota la calidad de los ingredientes.',
    rating: 5,
    product: 'Cupcakes de Vainilla',
  },
  {
    id: '3',
    name: 'Ana L.',
    text: 'Las galletas decoradas para mi baby shower fueron perfectas. El diseno exactamente como lo pedi y el sabor delicioso.',
    rating: 5,
    product: 'Galletas de Mantequilla Decoradas',
  },
  {
    id: '4',
    name: 'Roberto M.',
    text: 'El cheesecake de frutos rojos es una obra de arte. Cremoso, con el balance perfecto de dulce y acido. Mi favorito.',
    rating: 5,
    product: 'Cheesecake de Frutos Rojos',
  },
  {
    id: '5',
    name: 'Sofia P.',
    text: 'Llevo 3 pedidos y cada vez me sorprenden mas. La entrega siempre puntual y todo llega en perfectas condiciones.',
    rating: 5,
    product: 'Pastel Red Velvet',
  },
]

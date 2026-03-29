export interface CartItem {
  productId: string
  name: string
  slug: string
  priceInCents: number
  quantity: number
  selectedSize?: string
  image: string
}

export interface CartState {
  items: CartItem[]
  addItem: (item: CartItem) => void
  removeItem: (productId: string, selectedSize?: string) => void
  updateQuantity: (productId: string, quantity: number, selectedSize?: string) => void
  clearCart: () => void
  getTotal: () => number
  getItemCount: () => number
}

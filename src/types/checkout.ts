export interface DeliveryInfo {
  name: string
  phone: string
  email: string
  address: string
  colony: string
  zipCode: string
  city: string
  deliveryDate: string
  deliveryTime: string
  notes?: string
}

export interface OrderSummary {
  items: {
    name: string
    quantity: number
    size?: string
    priceInCents: number
  }[]
  subtotal: number
  deliveryFee: number
  total: number
  delivery: DeliveryInfo
}

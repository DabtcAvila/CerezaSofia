'use client'

import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import { CartItem, CartState } from '@/types/cart'

export const useCartStore = create<CartState>()(
  persist(
    (set, get) => ({
      items: [],

      addItem: (newItem: CartItem) => {
        set((state) => {
          const existingIndex = state.items.findIndex(
            (item) => item.productId === newItem.productId && item.selectedSize === newItem.selectedSize
          )

          if (existingIndex >= 0) {
            const updated = [...state.items]
            updated[existingIndex] = {
              ...updated[existingIndex],
              quantity: updated[existingIndex].quantity + newItem.quantity,
            }
            return { items: updated }
          }

          return { items: [...state.items, newItem] }
        })
      },

      removeItem: (productId: string, selectedSize?: string) => {
        set((state) => ({
          items: state.items.filter(
            (item) => !(item.productId === productId && item.selectedSize === selectedSize)
          ),
        }))
      },

      updateQuantity: (productId: string, quantity: number, selectedSize?: string) => {
        if (quantity <= 0) {
          get().removeItem(productId, selectedSize)
          return
        }
        set((state) => ({
          items: state.items.map((item) =>
            item.productId === productId && item.selectedSize === selectedSize
              ? { ...item, quantity }
              : item
          ),
        }))
      },

      clearCart: () => set({ items: [] }),

      getTotal: () => {
        return get().items.reduce((sum, item) => sum + item.priceInCents * item.quantity, 0)
      },

      getItemCount: () => {
        return get().items.reduce((sum, item) => sum + item.quantity, 0)
      },
    }),
    {
      name: 'cereza-sofia-cart',
    }
  )
)

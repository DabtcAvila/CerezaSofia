'use client'

import { MessageCircle } from 'lucide-react'
import { WHATSAPP_NUMBER } from '@/data/delivery'

export function WhatsAppButton() {
  return (
    <a
      href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent('Hola, me gustaria hacer un pedido')}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-lg hover:scale-110 hover:shadow-xl transition-all duration-200"
      aria-label="Contactar por WhatsApp"
    >
      <MessageCircle size={24} fill="white" />
    </a>
  )
}

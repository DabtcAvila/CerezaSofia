'use client'

import { useState } from 'react'
import { X } from 'lucide-react'

export function AnnouncementBar() {
  const [visible, setVisible] = useState(true)

  if (!visible) return null

  return (
    <div className="bg-cherry text-white text-center text-sm py-2 px-4 relative">
      <p className="font-medium">
        Envio gratis en pedidos mayores a $800 en Zona Centro CDMX
      </p>
      <button
        onClick={() => setVisible(false)}
        className="absolute right-3 top-1/2 -translate-y-1/2 p-1 hover:bg-white/20 rounded-full transition-colors"
        aria-label="Cerrar anuncio"
      >
        <X size={14} />
      </button>
    </div>
  )
}

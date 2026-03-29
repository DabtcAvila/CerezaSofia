import { clsx, type ClassValue } from 'clsx'

export function cn(...inputs: ClassValue[]) {
  return clsx(inputs)
}

export function formatWhatsAppMessage(items: { name: string; quantity: number; size?: string; price: string }[], delivery: { name: string; address: string; colony: string; city: string; date: string; time: string; notes?: string }, total: string): string {
  let msg = '🍰 *Nuevo Pedido - Cereza Sofia*\n\n'
  msg += '📋 *Productos:*\n'
  items.forEach((item) => {
    msg += `• ${item.quantity}x ${item.name}`
    if (item.size) msg += ` (${item.size})`
    msg += ` - ${item.price}\n`
  })
  msg += `\n💰 *Total: ${total}*\n\n`
  msg += '🚚 *Datos de entrega:*\n'
  msg += `👤 ${delivery.name}\n`
  msg += `📍 ${delivery.address}, ${delivery.colony}, ${delivery.city}\n`
  msg += `📅 ${delivery.date}\n`
  msg += `🕐 ${delivery.time}\n`
  if (delivery.notes) msg += `📝 ${delivery.notes}\n`
  msg += '\n¡Gracias por tu pedido! 🎉'
  return encodeURIComponent(msg)
}

export interface DeliveryZone {
  name: string
  areas: string[]
  feeInCents: number
  minOrderInCents: number
}

export const deliveryZones: DeliveryZone[] = [
  {
    name: 'Zona Centro CDMX',
    areas: [
      'Benito Juarez', 'Coyoacan', 'Cuauhtemoc', 'Miguel Hidalgo',
      'Alvaro Obregon', 'Tlalpan (zona centro)',
    ],
    feeInCents: 8000,
    minOrderInCents: 30000,
  },
  {
    name: 'Zona Sur CDMX',
    areas: [
      'Xochimilco', 'Tlalpan (zona sur)', 'Magdalena Contreras',
      'Iztapalapa (zona centro)',
    ],
    feeInCents: 12000,
    minOrderInCents: 40000,
  },
  {
    name: 'Estado de Mexico',
    areas: [
      'Naucalpan', 'Huixquilucan', 'Atizapan', 'Tlalnepantla',
      'Metepec', 'Toluca (zona centro)',
    ],
    feeInCents: 18000,
    minOrderInCents: 50000,
  },
]

export const deliverySchedule = {
  days: 'Lunes a Sabado',
  hours: [
    { label: '10:00 - 13:00', value: '10-13' },
    { label: '13:00 - 16:00', value: '13-16' },
    { label: '16:00 - 19:00', value: '16-19' },
  ],
  advanceHours: 48,
  note: 'Pedidos con al menos 48 horas de anticipacion. Domingos y dias festivos no hay entregas.',
}

export const WHATSAPP_NUMBER = '5215512345678'

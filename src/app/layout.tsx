import type { Metadata } from 'next'
import { Playfair_Display, DM_Sans } from 'next/font/google'
import { Toaster } from 'react-hot-toast'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { WhatsAppButton } from '@/components/layout/WhatsAppButton'
import { AnnouncementBar } from '@/components/layout/AnnouncementBar'
import './globals.css'

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-heading',
  display: 'swap',
})

const dmSans = DM_Sans({
  subsets: ['latin'],
  variable: '--font-body',
  display: 'swap',
})

export const metadata: Metadata = {
  title: {
    default: 'Cereza Sofia | Pasteleria Artesanal en CDMX',
    template: '%s | Cereza Sofia',
  },
  description: 'Pasteles, cupcakes y postres artesanales hechos con amor. Entregas en CDMX y Estado de Mexico.',
  keywords: ['pasteleria', 'pasteles', 'cupcakes', 'CDMX', 'artesanal', 'postres', 'entrega'],
  openGraph: {
    type: 'website',
    locale: 'es_MX',
    siteName: 'Cereza Sofia',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" className={`${playfair.variable} ${dmSans.variable}`}>
      <body className="min-h-screen flex flex-col">
        <Toaster
          position="top-right"
          toastOptions={{
            style: {
              fontFamily: 'var(--font-body)',
            },
          }}
        />
        <AnnouncementBar />
        <Header />
        <main className="flex-1">
          {children}
        </main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  )
}

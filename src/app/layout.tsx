import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Página Simple y Rápida',
  description: 'Una página web moderna, simple y rápida creada con Next.js y Tailwind CSS',
  keywords: 'página web, simple, rápida, moderna, Next.js, Tailwind CSS',
  authors: [{ name: 'Desarrollador Web' }],
  viewport: 'width=device-width, initial-scale=1',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" className="scroll-smooth">
      <body className={`${inter.className} antialiased`}>
        <div className="min-h-screen bg-white">
          {children}
        </div>
      </body>
    </html>
  )
}
import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import { Providers } from "@/components/providers";
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'HVAC Services',
  description: 'Professional HVAC services for your home and business',
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          {children}
          <FloatingWhatsApp />
          <Toaster />
          <Sonner />
        </Providers>
      </body>
    </html>
  )
}
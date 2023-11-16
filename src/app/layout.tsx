import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Coin Price Tracker',
  description: 'with Burak Can Yıldırım',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`bg-slate-900 ${inter.className}`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}

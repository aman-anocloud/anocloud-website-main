// app/layout.tsx

import './globals.css'
import { Inter } from 'next/font/google'
import type { Metadata } from 'next'
import Navbar from '@/components/Navbar' // ✅ Import Navbar
import Footer from '@/components/Footer' // ✅ Import Footer
import ScrollToTopButton from '@/components/ScrollToTopButton'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'AnoCloud',
  description: 'Future‑Proof Your Business with AI & Security',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />   {/* ✅ Navbar at top */}
        <main className=""> {/* Add padding to prevent overlap with fixed navbar */}
          {children}
        </main>
        <Footer />   {/* ✅ Footer at bottom */}
        <ScrollToTopButton />
      </body>
    </html>
  )
}

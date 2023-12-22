import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import './globals.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
const poppins = Poppins({ weight: "400" , subsets: ["latin"] , display: "swap" })

export const metadata: Metadata = {
  title: 'ClassSnap',
  description: 'ClassSnap is the way to go for all your class needs.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <Navbar />
        {children}
        <Footer />
        </body>
    </html>
  )
}
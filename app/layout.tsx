import './globals.css'
import { Inter } from 'next/font/google'
import Navbar from './_Components/Navbar/Navbar'
import Footer from './_Components/Footer/Footer'

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        <main className="flex-1 container mx-auto">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}

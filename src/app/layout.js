import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/navbar/Navbar'
import Footer from '@/components/footer/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Next 14 Website',
  description: 'By Wei Zhu',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className='container'>
          <Navbar /> {/* Narbar Component: Logo div, Links div */}
          {children} {/* Homepage, About, Contact, Blog */}
          <Footer /> {/* Footer Component */}
        </div>
      </body>
    </html>
  )
}

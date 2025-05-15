import Footer from './components/Footer/Footer'
import Navbar from './components/Navbar/Navbar'
import './globals.css'
import { Josefin_Sans, Inknut_Antiqua } from 'next/font/google'

const josefin = Josefin_Sans({
  subsets: ['latin'],
  weight: ['400', '600', '700'],
  variable: '--font-josefin'
})

const inknut = Inknut_Antiqua({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  variable: '--font-inknut'
})

export const metadata = {
  title: 'Coencers',
  description: 'Connecting influencers with companies',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${josefin.variable} ${inknut.variable}`}>
      <body>
        <Navbar/>{children}<Footer/></body>
    </html>
  )
}

import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { NavBar } from './pages/NavBar'
import { Footer } from './pages/footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Для Татьяны',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) 


{
  let datatheme="black"
  return (
    <html lang="en" data-theme={datatheme}>

      <body className={inter.className}>
        <NavBar/>
        <div className="2xl:px-[200px]">{children}</div>
        <Footer/>
        </body>
    </html>
  )
}

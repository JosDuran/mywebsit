import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import NavJos from  '../components/navjos';

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Join to cloud',
  description: 'Handmade by Jos',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">      
      <body className={inter.className}>
        <NavJos/>
        {children}
      </body>

    </html>
  )
}

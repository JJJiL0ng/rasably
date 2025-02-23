// app/layout.js
import './globals.css'
import { Inter } from 'next/font/google'
import { Analytics } from "@vercel/analytics/react"

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Rasably - Korean Fashion in India',
  description: 'Discover trendy Korean fashion in India with Rasably. Get exclusive discounts on your favorite K-fashion styles.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
        <meta name="theme-color" content="#FC7E7A" />
      </head>
      <body className={inter.className}>
        <main>{children}</main>
        <Analytics />
      </body>
    </html>
  )
}
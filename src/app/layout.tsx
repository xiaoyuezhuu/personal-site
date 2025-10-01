import type { Metadata } from 'next'
import './globals.css'
import { Inter, Space_Grotesk } from 'next/font/google'

const text = Inter({ subsets: ['latin'], variable: '--font-text', display: 'swap' })
const title = Space_Grotesk({ subsets: ['latin'], variable: '--font-title', display: 'swap' })

export const metadata: Metadata = {
  title: 'Xiaoyue Zhu, PhD - Data Scientist & Founder',
  description: 'Personal website of a data scientist and founder',
  keywords: ['data science', 'machine learning', 'founder', 'AI'],
  authors: [{ name: 'Xiaoyue Zhu' }],
  viewport: 'width=device-width, initial-scale=1',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`scroll-smooth ${text.variable} ${title.variable}`}>
      <body className="antialiased font-sans">
        <main className="min-h-screen">
          {children}
        </main>
      </body>
    </html>
  )
}

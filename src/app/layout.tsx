import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Your Name - Data Scientist & Founder',
  description: 'Personal website of a data scientist and founder',
  keywords: ['data science', 'machine learning', 'founder', 'AI'],
  authors: [{ name: 'Your Name' }],
  viewport: 'width=device-width, initial-scale=1',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="antialiased">
        <main className="min-h-screen">
          {children}
        </main>
      </body>
    </html>
  )
}

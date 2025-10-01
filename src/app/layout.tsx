import type { Metadata } from 'next'
import './globals.css'
import { Inter, Space_Grotesk } from 'next/font/google'
import { StructuredData } from '@/components/StructuredData'

const text = Inter({ subsets: ['latin'], variable: '--font-text', display: 'swap' })
const title = Space_Grotesk({ subsets: ['latin'], variable: '--font-title', display: 'swap' })

export const metadata: Metadata = {
  title: 'Xiaoyue Zhu, PhD - Data Scientist & Founder',
  description: 'Xiaoyue Zhu is a neuroscientist, data scientist, and founder. Explore my work in neuroscience, AI and data science, and technology innovation.',
  keywords: ['Xiaoyue Zhu', 'data science', 'machine learning', 'founder', 'AI-native app', 'AI', 'artificial intelligence', 'PhD', 'researcher', 'neuroscientist'],
  authors: [{ name: 'Xiaoyue Zhu' }],
  creator: 'Xiaoyue Zhu',
  publisher: 'Xiaoyue Zhu',
  metadataBase: new URL('https://xiaoyuezhu.xyz'),
  alternates: {
    canonical: 'https://xiaoyuezhu.xyz',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://xiaoyuezhu.xyz',
    title: 'Xiaoyue Zhu, PhD - Data Scientist & Founder',
    description: 'Xiaoyue Zhu is a neuroscientist, data scientist, and founder. Explore my work in neuroscience, AI and data science, and technology innovation.',
    siteName: 'Xiaoyue Zhu',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Xiaoyue Zhu, PhD - Data Scientist & Founder',
    description: 'Xiaoyue Zhu is a neuroscientist, data scientist, and founder. Explore my work in neuroscience, AI and data science, and technology innovation.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'VxtlkCNRKUAz5mHPKaCfzpk4OXAT1n78f1LlQj9bNZE',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`scroll-smooth ${text.variable} ${title.variable}`}>
      <head>
        <StructuredData />
      </head>
      <body className="antialiased font-sans">
        <main className="min-h-screen">
          {children}
        </main>
      </body>
    </html>
  )
}

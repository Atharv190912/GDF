import type { Metadata, Viewport } from 'next'
import './globals.css'

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#002147',
}

export const metadata: Metadata = {
  title: {
    default: 'Global Diplomatic Foundation',
    template: '%s | Global Diplomatic Foundation',
  },
  description: 'The Global Diplomatic Foundation fosters a culture of dialogue, leadership, and international cooperation through diplomatic initiatives and global engagement.',
  keywords: ['Global Diplomatic Foundation', 'Diplomacy', 'International Cooperation', 'Leadership', 'Dialogue'],
  authors: [{ name: 'Global Diplomatic Foundation' }],
  creator: 'Global Diplomatic Foundation',
  publisher: 'Global Diplomatic Foundation',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://gdfintl.org'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Global Diplomatic Foundation',
    description: 'Fostering a culture of dialogue, leadership, and international cooperation.',
    url: 'https://gdfintl.org',
    siteName: 'Global Diplomatic Foundation',
    images: [
      {
        url: '/logo.png',
        width: 800,
        height: 800,
        alt: 'Global Diplomatic Foundation Logo',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Global Diplomatic Foundation',
    description: 'Fostering a culture of dialogue, leadership, and international cooperation.',
    images: ['/logo.png'],
  },
  icons: {
    icon: '/logo.png',
    shortcut: '/logo.png',
    apple: '/logo.png',
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
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Josefin+Sans:wght@100;200;300;400;600;700&display=swap" rel="stylesheet" />
      </head>
      <body>{children}</body>
    </html>
  )
}
